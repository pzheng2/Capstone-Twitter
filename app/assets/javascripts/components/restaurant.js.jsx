var Restaurant = window.Restaurant = React.createClass ({

  findRestaurant: function () {
    var restaurant = RestaurantStore.all().find(function (restaurant) {
      return restaurant.id === parseInt(this.props.params.id);
    }.bind(this));
    return restaurant;
  },

  render: function () {
    var restaurant = this.findRestaurant();

    return (
      <div>
        <h4>{restaurant.name}</h4>
        <label>
          Address:
          {restaurant.address}
        </label>

        <label>
          Phone #:
          {restaurant.phone}
        </label>

        <br/>
        <label>
          Reviews:
            <ol>
            {
              restaurant.reviews.map(function (review) {
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
