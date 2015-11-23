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

  createRestaurant: function (restaurantParams, successCallback, errorCallback) {
    debugger
    $.ajax ({
      type: 'POST',
      url: 'api/restaurants',
      processData: false,
      contentType: false,
      data: restaurantParams,
      success: function (restaurant) {
        ApiActions.NewRestaurant(restaurant);
        successCallback && successCallback(restaurant);
      },
      error: function (errors) {
        errorCallback && errorCallback(errors);
      }
    });
  },

  createReview: function (reviewParams, successCallback, errorCallback) {
    $.ajax ({
      type: 'POST',
      url: 'api/reviews',
      data: { review: reviewParams },
      success: function (review) {
        ApiActions.NewReview(review);
        successCallback && successCallback();
      },
      error: function (errors) {
        errorCallback && errorCallback(errors);
      }
    });
  }

};
