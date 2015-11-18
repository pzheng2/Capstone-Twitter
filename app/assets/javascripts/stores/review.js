(function (root) {
  var _reviews = [];
  var CHANGE_EVENT = "change";

  var resetReviews = function (reviews) {
    _reviews = reviews;
  };

  var addReview = function (review) {
    _reviews.push(review);
  };

  root.ReviewStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _reviews.slice();
    },

    addChangeListener: function () {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function () {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case ReviewConstants.NEW_REVIEW:
          addReview(payload.review);
          ReviewStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
