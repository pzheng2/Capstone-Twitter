TabApiUtil = {

  fetchTabs: function (bounds) {
    $.ajax({
      url: '/api/tabs',
      type: 'GET',
      dataType: 'json',
      bounds: bounds,
      success: function (tabs) {
        TabActions.receiveTabs(tabs);
      },
      error: function (a) {
        debugger
      }
    });
  }

};
