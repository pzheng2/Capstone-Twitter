ApiActions = {

  ReceiveAllRestaurants: function (restaurants) {
      AppDispatcher.dispatch({
        actionType: RestaurantConstants.RESTAURANTS_RECEIVED,
        restaurants: restaurants
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
    })
  }

};
