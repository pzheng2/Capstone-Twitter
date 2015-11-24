var UserForm = window.UserForm = React.createClass({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      username: "",
      password: "",
      errors: null
    };
  },

  submit: function (e) {
    e.preventDefault();
    UsersApiUtil.createUser({
      username: this.state.username,
      password: this.state.password
    }, this.successCallback, this.errorCallback);
  },

  successCallback: function (user) {
    SessionsApiUtil.login({
      username: this.state.username,
      password: this.state.password
    });
    this.navigateToShow(user.id);
  },

  errorCallback: function (errors) {
    this.setState({ errors: errors });
  },

  navigateToShow: function (userId) {
    var userURL = "/users/" + userId;
    this.props.history.pushState(null, userURL);
  },

  render: function() {
    var errors = [];
    if (this.state.errors) {
      for (var i = 0; i < this.state.errors.responseJSON.length; i++) {
        errors.push(this.state.errors.responseJSON[i]);
      }
    }

    return (
      <form className="body" onSubmit={ this.submit }>
        <div className="errors">
          {
            errors.map(function (error) {
              return <div>{error}</div>;
            })
          }
        </div>
        <h1>Sign Up!</h1>

        <label>
          Username:
          <input type="text"
            name="username"
            valueLink={ this.linkState("username") } />
        </label>

        <label>
          Password:
          <input type="password"
            name="password"
            valueLink={ this.linkState("password") } />
        </label>

        <button>Join!</button>
      </form>
    );
  },

});
