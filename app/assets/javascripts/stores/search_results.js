(function (root) {
  var CHANGE_EVENT = "change";

  var _searchResults = { results: [] };

  var setResults = function (results) {
    _searchResults = results;
  };

  root.SearchResultStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    results: function () {
      return _searchResults.results;
    },

    totalCount: function () {
      return _searchResults.total_count || 0;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case SearchResultConstants.RECEIVE_RESULTS:
          setResults(payload.results);
          SearchResultStore.emit(CHANGE_EVENT);
          break;

      }
    }),
  });
})(this);
