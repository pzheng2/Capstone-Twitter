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
      <form className="login-body group" onSubmit={ this.submit }>
        <ul>
          <li>{ this.state.errors }</li>

          <li>
            <input className="input-animation" type="text" name="username" placeholder="Username" />
          </li>

          <li>
            <input className="input-animation" type="password" name="password" placeholder="Password" />
          </li>

          <li><button className="login-button">Log In!</button></li>
        </ul>
      </form>
    );
  },
          // <li><h1>Log In!</h1></li>

});
