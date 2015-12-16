TabApiUtil = {

  fetchTabs: function (bounds) {
    $.ajax({
      url: '/api/tabs',
      type: 'GET',
      // dataType: 'json',
      data: { bounds: bounds },
      success: function (tabs) {
        TabActions.receiveTabs(tabs);
      }
    });
  }

};
