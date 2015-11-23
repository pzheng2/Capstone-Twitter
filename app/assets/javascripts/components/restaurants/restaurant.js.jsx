var Restaurant = window.Restaurant = React.createClass ({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function () {
    this.restaurantId = parseInt(this.props.params.id);
    ApiUtil.fetchSingleRestaurant(this.restaurantId, this._receivedRestaurant);
    var loadingRestaurant = {
      name: "loading",
      address: "loading",
      phone: "loading",
      reviews: []
    };
    return { restaurant: loadingRestaurant };
  },

  componentDidMount: function () {
    RestaurantStore.addChangeListener(this._restaurantChanged);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeListener(this._restaurantChanged);
  },

  _receivedRestaurant: function (restaurant) {
    this.setState({ restaurant: restaurant });
  },

  _findRestaurantById: function () {
    var foundRestaurant;
    RestaurantStore.all().forEach(function (restaurant) {
      if (this.restaurantId === restaurant.id) {
        foundRestaurant = restaurant;
      }
    }.bind(this));
    return foundRestaurant;
  },

  _restaurantChanged: function () {
    var restaurant = this._findRestaurantById();
    this.setState({ restaurant: restaurant });
  },

  render: function () {
    var Link = ReactRouter.Link;
    var reviewURL = "/restuarants/" + this.restaurantId + "/review";

    return (
      <div>
        <Link to="/">Back to Restaurants Index</Link>
        <h4 className="restaurant-name">{this.state.restaurant.name}</h4>
        <label>
          <img className="restaurant-image" src={this.state.restaurant.image_url} />
        </label>

        <label>
          Address:
          {this.state.restaurant.address}
        </label>

        <label>
          Phone #:
          {this.state.restaurant.phone}
        </label>

        <br/>
        <label>
          Reviews:
            <ol>
            {
              this.state.restaurant.reviews.map(function (review) {
                return (
                  <li className="review" key={review.id}><Review review={review} /></li>
                );
              })
            }
            </ol>
        </label>
        {
          this.props.children ||
          <Link to={"/restaurants/" + this.restaurantId + "/review"}>Leave a Review</Link>
        }
      </div>
    );
  }
});
