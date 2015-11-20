ApiUtil = {

  fetchUsers: function () {
    $.ajax ({
      type: 'GET',
      url: 'api/users',
      success: function (users) {
        ApiActions.ReceiveAllUsers(users);
      }
    });
  },

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

  fetchSingleRestaurant: function (id, callback) {
    $.ajax ({
      type: 'GET',
      url: 'api/restaurants/' + id,
      success: function (restaurant) {
        ApiActions.ReceiveSingleRestaurant(restaurant);
        callback && callback(restaurant);
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

  createReview: function (reviewParams, errorCallback) {
    $.ajax ({
      type: 'POST',
      url: 'api/reviews',
      data: { review: reviewParams },
      success: function (review) {
        ApiActions.NewReview(review);
      },
      error: function (jqXHR, textStatus) {
        errorCallback();
      }
    });
  }

};
