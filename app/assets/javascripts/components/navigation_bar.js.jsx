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
      message = (
        <li className="message">
          <a className="user" href={ "#/users/" + this.state.currentUser.id }>
            { this.state.currentUser.username }
          </a>
        </li>
      );
      options = (
        <li className="options">
          <a className="logout" href="#/login" onClick={ this.logout }>Log out</a>
        </li>
      );
    } else {
      options = (
        <li className="options">
          <a className="login" href="#/login">Log In</a>
        </li>
      );

      signup = (
        <li>
          <Link className="signup" to="/users/new">Sign Up!</Link>
        </li>
      );
    }

    return (
      <div className="nav group">
        <header><h1 className="nav-logo" onClick={this.redirectToRoot}>Zelp</h1></header>
        <ul className="nav-user-options group">


          { message }

          <li className="options">
            <a className="search" href="#/search">Search</a>
          </li>

          { options }

          { signup }

        </ul>
      </div>
    );
  }

});
