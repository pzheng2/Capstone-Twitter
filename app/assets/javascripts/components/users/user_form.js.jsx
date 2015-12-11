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
      <form className="login-body group" onSubmit={ this.submit }>
        <ul>
          <li>
            <div className="errors">
              {
                errors.map(function (error) {
                  return <div>{error}</div>;
                })
              }
            </div>
          </li>

          <li>
            <input className="login-input input-animation" type="text" name="username" placeholder="Username" valueLink={ this.linkState("username") } />
          </li>

          <li>
            <input className="login-input input-animation" type="password" name="password" placeholder="Password" valueLink={ this.linkState("password") } />
          </li>

          <li><button className="login-button">Sign Up</button></li>
        </ul>
      </form>
    );
  },

});
      // <form className="login-body group" onSubmit={ this.submit }>
      //   <ul>
      //     <li>
      //       <div className="errors">
      //         {
      //           errors.map(function (error) {
      //             return <div>{error}</div>;
      //           })
      //         }
      //       </div>
      //     </li>
      //
      //     <li>
      //       <input className="input animation" type="text"
      //         name="username"
      //         valueLink={ this.linkState("username") }
      //         placeholder="Username" />
      //     </li>
      //
      //     <li>
      //       <input type="password"
      //         name="password"
      //         valueLink={ this.linkState("password") }
      //         placeholder="Password" />
      //     </li>
      //
      //     <li>
      //       <button>Join!</button>
      //     </li>
      //   </ul>
      // </form>
