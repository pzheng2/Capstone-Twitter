var SessionForm = window.SessionForm = React.createClass({
  mixins: [ReactRouter.History],

  submit: function (e) {
    e.preventDefault();
    var credentials = $(e.currentTarget).serializeJSON();
    SessionsApiUtil.login(credentials, function () {
      this.history.pushState(null, "/users/" + CurrentUserStore.currentUser().id);
    }.bind(this));
  },

  render: function () {

    return (
      <form onSubmit={ this.submit }>

        <h1>Log In!</h1>

        <label>
          Username:
          <input type="text" name="username" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <button>Log In!</button>
      </form>
    );
  },

});
