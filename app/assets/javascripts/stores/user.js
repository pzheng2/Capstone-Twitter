(function (root) {
  var _users = [];
  var CHANGE_EVENT = "change";

  var _addUser = function (newUser) {
    _users.unshift(newUser);
  };

  var resetUsers = function (users) {
    _users = users;
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function () {
      return _users.slice();
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case UserConstants.RECEIVE_USERS:
          resetUsers(payload.users);
          UserStore.emit(CHANGE_EVENT);
          break;
        case UserConstants.RECEIVE_USER:
          _addUser(payload.user);
          UserStore.emit(CHANGE_EVENT);
          break;
      }
    }),

    findUserById: function (id) {
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].id === id) {
          return _users[i];
        }
      }

      return;
    }
  });
})(this);
