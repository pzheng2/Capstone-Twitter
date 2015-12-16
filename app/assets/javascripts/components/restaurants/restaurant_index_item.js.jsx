var RestaurantIndexItem = window.RestaurantIndexItem = React.createClass ({

  mixins: [ReactRouter.History],

  _onClick: function (event) {
    this.history.pushState(null,
      "/restaurants/" + event.currentTarget.id,
      null);
  },

  render: function () {
    var restaurant = this.props.restaurant;
    var categoriesString;
    if (restaurant.categories) {
      categoriesString = restaurant.categories.join(", ");
    }

    var grow = "";
    if (this.props.indexPage) {
      grow = "hvr-grow";
    }

    return (
      <div className={ grow }>
        <div onClick={ this._onClick } className="restaurant-index-item" id={ restaurant.id } key={ restaurant.id }>
          <img className="restaurant-index-items-image" src={ restaurant.image_url || restaurant.image } />

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
                  { categoriesString }
                </li>

              </ul>

            </div>

        </div>
      </div>
    );
  }
});
