ApiUtil = {

  fetchRestaurantsInBounds: function (bounds) {
    $.ajax ({
      type: 'GET',
      url: 'api/restaurants',
      data: { bounds: bounds },
      success: function (restaurants) {
        ApiActions.ReceiveAllRestaurants(restaurants);
      }
    });
  },

  fetchRestaurants: function () {
    $.ajax ({
      type: 'GET',
      url: 'api/restaurants',
      success: function (restaurants) {
        ApiActions.ReceiveAllRestaurants(restaurants);
      }
    });
  },

  createRestaurant: function (restaurantParams) {
    $.ajax ({
      type: 'POST',
      url: 'api/restaurants',
      data: { restaurant: restaurantParams },
      success: function (restaurant) {
        ApiActions.NewRestaurant(restaurant);
      }
    });
  },

  createReview: function (reviewParams) {
    $.ajax ({
      type: 'POST',
      url: 'api/reviews',
      data: { review: reviewParams },
      success: function (review) {
        ApiActions.NewReview(review);
      }
    })
  }



};
