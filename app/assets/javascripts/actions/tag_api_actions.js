TagApiActions = {
  NewTag: function (tag) {
    AppDispatcher.dispatch({
      actionType: TagConstants.NEW_TAG,
      tag: tag
    });
  },
};
