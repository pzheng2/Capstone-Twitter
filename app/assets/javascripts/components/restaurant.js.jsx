var Restaurant = window.Restaurant = React.createClass ({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function () {
    this.restaurantId = this.props.params.id;
    ApiUtil.fetchSingleRestaurant(this.restaurantId, this._receivedRestaurant);
    var loadingRestaurant = {
      name: "loading",
      address: "loading",
      phone: "loading",
      reviews: []
    };
    return { restaurant: loadingRestaurant };
  },

  _receivedRestaurant: function (restaurant) {
    this.setState({ restaurant: restaurant });
  },

  _findRestaurantById: function (id) {
    var foundRestaurant;

    RestaurantStore.all().forEach(function (restaurant) {
      if (id === restaurant.id) {
        foundRestaurant = restaurant;
      }
    }.bind(this));
    return foundRestaurant;
  },

  _restaurantChanged: function () {
    var restaurantId = this.props.params.id;
    var restaurant = this._findRestaurantById(restaurantId);
    this.setState({ restaurant: restaurant });
  },

  render: function () {
    var Link = ReactRouter.Link;
    var reviewURL = "/restuarants/" + this.restaurantId + "/review";

    return (
      <div>
        <Link to="/">Back to Restaurants Index</Link>
        <h4>{this.state.restaurant.name}</h4>
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
                  <li key={review.id}><Review review={review} /></li>
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
