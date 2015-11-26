var NavigationBar = window.NavigationBar = React.createClass ({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      currentUser: CurrentUserStore.currentUser()
    };
  },

  redirectToRoot: function () {
    this.history.pushState(null, "/#");
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ currentUser: CurrentUserStore.currentUser() });
  },

  logout: function () {
    SessionsApiUtil.logout();
  },

  render: function () {
    var Link = ReactRouter.Link;
    var options, message;

    if (CurrentUserStore.isLoggedIn()) {
      message = "Logged in as: " + this.state.currentUser.username;
      options = (
        <a className="logout" href="#/login" onClick={ this.logout }>Log out</a>
      );
    } else {

      options = (
        <a className="login" href="#/login">Login</a>
      );
    }

    return (
      <div className="nav group">
        <header><h1 className="nav-logo" onClick={this.redirectToRoot}>Zelp</h1></header>
        <ul className="nav-user-options group">
          <li>
            { message }
          </li>

          <li>
            { options }
          </li>

          <li>
            <Link className="signup" to="/users/new">Sign Up!</Link>
          </li>
        </ul>
      </div>
    );
  }

});
