var SessionForm = window.SessionForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    var errors;
    if (this.props.location.state) {
      errors = this.props.location.state.errors;
    }
    return {
      errors: errors
    };
  },

  submit: function (e) {
    e.preventDefault();
    var credentials = $(e.currentTarget).serializeJSON();
    SessionsApiUtil.login(
      credentials,
      this.redirectToUsersPage,
      this.errorCallback
    );
  },

  redirectToUsersPage: function (currentUser) {
    this.history.pushState(null, "/users/" + currentUser.id);
  },

  errorCallback: function (errors) {
    this.setState({ errors: errors.responseJSON.errors });
  },

  render: function () {
    return (
      <form onSubmit={ this.submit }>
        { this.state.errors }
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
