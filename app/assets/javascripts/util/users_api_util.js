UsersApiUtil = {

  fetchUsers: function () {
    $.ajax({
      url: '/api/users',
      type: 'GET',
      dataType: 'json',
      success: function (users) {
        UserActions.receiveUsers(users);
      }
    });
  },

  fetchUser: function (id) {
    $.ajax({
      url: '/api/users/' + id,
      type: 'GET',
      dataType: 'json',
      success: function (user) {
        UserActions.receiveUser(user);
        debugger
      }
    });
  },

  createUser: function (credentials, successCallback, errorCallback) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: { user: credentials },
      success: function (user) {
        UserActions.receiveUser(user);
        successCallback && successCallback(user);
      },
      error: function (errors) {
        errorCallback && errorCallback(errors);
      }
    });
  }
};
