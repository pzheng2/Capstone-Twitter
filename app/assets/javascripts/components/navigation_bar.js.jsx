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
    var options;

    if (CurrentUserStore.isLoggedIn()) {
      options = (
        <div>
          Logged in as
          { " "+this.state.currentUser.username }
          <button onClick={ this.logout }>LOG OUT</button>
        </div>
      );
    } else {
      options = (
        <div>
          <a href="#/login">Login</a>
        </div>
      );
    }

    return (
      <div className="nav">
        <header><h1 className="nav-logo" onClick={this.redirectToRoot}>Zelp</h1></header>
        <ul className="nav-user-options">
          <li>
            { options }
          </li>
          <li>
            <Link to="/users/new">Sign Up!</Link>
          </li>
        </ul>
      </div>
    );
  }

});
