var NavigationBar = window.NavigationBar = React.createClass ({

  getInitialState: function () {
    return {
      currentUser: CurrentUserStore.currentUser()
    };
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
    var options;
    if (CurrentUserStore.isLoggedIn()) {
      options = (
        <div>
          Logged in as
          { this.state.currentUser.username }
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
        <header><h1>Zelp</h1></header>
        { options }
      </div>
    );
  }

});
