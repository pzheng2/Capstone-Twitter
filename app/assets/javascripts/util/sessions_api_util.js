SessionsApiUtil = {

  login: function (credentials, success) {
    $.ajax({
      type: 'POST',
      url: '/api/session',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        console.log("logged in!");
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }
    });
  },

  logout: function () {
    $.ajax ({
      type: 'DELETE',
      url: 'api/session',
      dataType: 'json',
      success: function () {
        CurrentUserActions.receiveCurrentUser({});
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
     url: '/api/session',
     type: 'GET',
     dataType: 'json',
     success: function (currentUser) {
       CurrentUserActions.receiveCurrentUser(currentUser);
     }
   });
  }
};
