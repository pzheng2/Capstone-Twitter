(function (root) {
  var CHANGE_EVENT = "change";

  var _tabs = { bar: null };

  root.TabStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function () {
      return _tabs;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case TabConstants.RECEIVE_TABS:
          _tabs = payload.tabs;
          TabStore.emit(CHANGE_EVENT);
          break;
      }
    }),
  });
})(this);
