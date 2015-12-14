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
      <div className="hvr-grow">
        <li onClick={ this._onClick } className="restaurant-index-item" id={ restaurant.id } key={ restaurant.id }>
          <img className="restaurant-index-items-image" src={ restaurant.image_url } />

            <div className="restaurant-index-items-container group">

              <ul className="restaurant-index-items-body group">
                <li className="restaurant-index-items-name">
                  { restaurant.name }
                  <div className={ "restaurant-rating rating-" + restaurant.rating }>
                  </div>
                </li>

                <li className="restaurant-index-items-address">
                  { restaurant.address }
                </li>

                <li className="restaurant-index-items-phone">
                  { restaurant.phone }
                </li>

                <li className="restaurant-index-items-categories">
                  { restaurant.categories.join(", ") }
                </li>

              </ul>

            </div>

        </li>
      </div>
    );
  }
});
