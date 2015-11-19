var Restaurant = window.Restaurant = React.createClass ({
  contextTypes: {
    router: React.PropTypes.func
  },

  // getInitialState: function () {
    // var restaurantId = parseInt(this.props.params.id);
    // var restaurant = this._findRestaurantById(restaurantId);
    // if (!restaurant) {
    //   ApiUtil.fetchSingleRestaurant(restaurantId, this._receivedRestaurant);
    // }
    // return { restaurant: restaurant };
  // },
  getInitialState: function () {
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

  // findRestaurant: function () {
  //   this.restaurant = RestaurantStore.all().find(function (restaurant) {
  //     return restaurant.id === parseInt(this.props.params.id);
  //   }.bind(this));
  // },

  componentDidMount: function () {
    // RestaurantStore.addChangeListener(this._restaurantChanged);
    ApiUtil.fetchSingleRestaurant(1, this._receivedRestaurant);
  },

  _restaurantChanged: function () {
    var restaurantId = this.props.params.id;
    var restaurant = this._findRestaurantById(restaurantId);
    this.setState({ restaurant: restaurant });
  },

  render: function () {
    var Link = ReactRouter.Link;
    var reviewURL = "/restuarants/" + 1 + "/review";

    return (
      <div>
        <Link to="/">Back to Restaurants Index</Link>
        <Link to={"/restuarants/" + 1 + "/review"}>Leave a Review</Link>
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
      </div>
    );
  }
});
