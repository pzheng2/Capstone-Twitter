var RestaurantIndexItem = window.RestaurantIndexItem = React.createClass ({

  mixins: [ReactRouter.History],

  _onClick: function (event) {
    this.history.pushState(null,
      "/restaurants/" + event.currentTarget.id,
      null);
  },

  render: function () {
    var restaurant = this.props.restaurant;
    return (
      <div>
        <li onClick={ this._onClick } className="restaurant-index-item" id={ restaurant.id } key={ restaurant.id }>
          <img className="restaurant-index-items-image" src={ restaurant.image_url } />
          <label onHover={ this._onHover }>

            <div className="restaurant-index-items-body">
              <label className="restaurant-index-items-name">
                { restaurant.name }
              </label>

              <label className="restaurant-index-items-address">
                { restaurant.address }
              </label>

              <label className="restaurant-index-items-phone">
                { restaurant.phone }
              </label>

              <label className="restaurant-index-items-categories">
                { restaurant.categories.join(", ") }
              </label>

            </div>

          </label>
        </li>
      </div>
    );
  }
});
