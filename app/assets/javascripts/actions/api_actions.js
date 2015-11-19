ApiActions = {

  ReceiveAllUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USERS,
      users: users
    });
  },

  ReceiveAllRestaurants: function (restaurants) {
    AppDispatcher.dispatch({
      actionType: RestaurantConstants.RESTAURANTS_RECEIVED,
      restaurants: restaurants
    });
  },

  ReceiveSingleRestaurant: function (restaurant) {
    AppDispatcher.dispatch({
      actionType: RestaurantConstants.SINGLE_RESTAURANT_RECEIVED,
      restaurant: restaurant
    });
  },

  NewRestaurant: function (restaurant) {
    AppDispatcher.dispatch({
      actionType: RestaurantConstants.NEW_RESTAURANT,
      restaurant: restaurant
    });
  },

  NewReview: function (review) {
    AppDispatcher.dispatch({
      actionType: ReviewConstants.NEW_REVIEW,
      review: review
    });
  }

};
