TabApiUtil = {

  fetchTabs: function () {
    $.ajax({
      url: '/api/tabs',
      type: 'GET',
      dataType: 'json',
      success: function (tabs) {
        TabActions.receiveTabs(tabs);
      }
    });
  }

};
