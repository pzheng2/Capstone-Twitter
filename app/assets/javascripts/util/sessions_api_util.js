SessionsApiUtil = {

  login: function (credentials, successCallback, errorCallback) {
    $.ajax({
      type: 'POST',
      url: '/api/session',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        successCallback && successCallback(currentUser);
      },
      error: function (errors) {
        errorCallback && errorCallback(errors);
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

  fetchCurrentUser: function (successCallback) {
    $.ajax({
     url: '/api/session',
     type: 'GET',
     dataType: 'json',
     success: function (currentUser) {
       CurrentUserActions.receiveCurrentUser(currentUser);
       successCallback && successCallback(currentUser);
     }
   });
  }
};
