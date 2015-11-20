var App = React.createClass ({
  getInitialState: function () {
    return { currentUser: null };
  },

  mixins: [ReactRouter.History],

  componentDidMount: function () {
    // CurrentUserStore.addChangeListener(this._ensureLoggedIn);
    SessionsApiUtil.fetchCurrentUser();
  },


  _ensureLoggedIn: function () {
    if (!CurrentUserStore.isLoggedIn()) {
      this.history.pushState(null, "/login");
    }

    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  render: function () {
    return (
      <div>
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
});
