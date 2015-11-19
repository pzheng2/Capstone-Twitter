var Search = window.Search = React.createClass({
  // contextTypes: {
  //   router: React.PropTypes.func
  // },

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
      <div>
        <Map
          handleMarkerClick={this.handleMarkerClick}
          restaurants={this.state.restaurants}
        />
        <RestaurantIndex />
      </div>
    );
  }


});
