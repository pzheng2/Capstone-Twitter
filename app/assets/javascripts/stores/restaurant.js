(function (root) {
  var _restaurants = [];
  var CHANGE_EVENT = "change";

  var resetRestaurants = function (restaurants) {
    _restaurants = restaurants;
  };

  var addRestaurant = function (restaurant) {
    _restaurants.push(restaurant);
  };

  var addReview = function (review) {
    _restaurants.forEach(function (restaurant) {
      if (restaurant.id === review.restaurant_id) {
        restaurant.reviews.push(review);
      }
    });
  };

  var getDate = function () {
    var date = new Date();
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  };

  // var getAuthor = function (review) {
  //
  // };

  root.RestaurantStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _restaurants.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case RestaurantConstants.RESTAURANTS_RECEIVED:
          resetRestaurants(payload.restaurants);
          RestaurantStore.emit(CHANGE_EVENT);
          break;
        case RestaurantConstants.NEW_RESTAURANT:
          addRestaurant(payload.restaurant);
          RestaurantStore.emit(CHANGE_EVENT);
          break;
        case RestaurantConstants.SINGLE_RESTAURANT_RECEIVED:
          resetRestaurants([payload.restaurant]);
          RestaurantStore.emit(CHANGE_EVENT);
          break;
        case ReviewConstants.NEW_REVIEW:
          payload.review.date = getDate();
          // payload.review.author = getAuthor();
          addReview(payload.review);
          RestaurantStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
