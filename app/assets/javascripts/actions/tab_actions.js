TabActions = {
  receiveTabs: function (tabs) {
    AppDispatcher.dispatch({
      actionType: TabConstants.RECEIVE_TABS,
      tabs: tabs
    });
  }

};
