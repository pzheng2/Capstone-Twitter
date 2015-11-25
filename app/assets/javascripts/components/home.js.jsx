var Home = window.Home = React.createClass({

  getInitialState: function () {
    return {
      restaurants: RestaurantStore.all()
    };
  },

  _restaurantsChanged: function () {
    this.setState({ restaurants: RestaurantStore.all() });
  },

  componentDidMount: function () {
    RestaurantStore.addChangeListener(this._restaurantsChanged);

  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeListener(this._restaurantsChanged);
  },

  handleMarkerClick: function (restaurant) {
    this.props.history.pushState(null, "restaurants/" + restaurant.id);
  },

  render: function () {
    return (
      <div className="home-body group">
        <RestaurantIndex />
        <Map
          handleMarkerClick={this.handleMarkerClick}
          restaurants={this.state.restaurants}
        />
      </div>
    );
  }


});
