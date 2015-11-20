var RestaurantIndex = window.RestaurantIndex = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return { restaurants: RestaurantStore.all() };
  },

  componentDidMount: function () {
    ApiUtil.fetchRestaurants();
    RestaurantStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ restaurants: RestaurantStore.all() });
  },

  _onClick: function (event) {
    this.history.pushState(null,
      "/restaurants/" + event.currentTarget.id,
      null);
  },

  _onHover: function (event) {

  },

  render: function () {
    var Link = ReactRouter.Link;

    return (
      <ol>
        {
          this.state.restaurants.map(function (restaurant) {
            return (
              <li className="restaurant-index-items" onClick={this._onClick} onHover={this._onHover} id={restaurant.id} key={restaurant.id}>
                {restaurant.name}
              </li>
            );
          }.bind(this))
        }

        <Link to="/restaurants/new">Create New Restaurant</Link>
      </ol>
    );
  }

});
