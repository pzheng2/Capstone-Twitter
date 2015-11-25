(function (root) {
  var CHANGE_EVENT = "change";

  var _usefulTags = [];
  var _funnyTags = [];
  var _coolTags = [];

  var receiveUsefulTags = function () {

  };

  var receiveFunnyTags = function (funnyTags) {

  };

  var receiveCoolTags = function (coolTags) {

  };


  root.TagStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    currentUser: function () {
      return $.extend({}, _currentUser);
    },

    isLoggedIn: function () {
      return (typeof _currentUser.id !== "undefined");
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case CurrentUserConstants.RECEIVE_CURRENT_USER:
          _currentUser = payload.currentUser;
          CurrentUserStore.emit(CHANGE_EVENT);
          break;

      }
    }),
  });
})(this);
