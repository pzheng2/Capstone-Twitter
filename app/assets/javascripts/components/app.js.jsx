var App = React.createClass ({
  getInitialState: function () {
    return { currentUser: null };
  },

  mixins: [ReactRouter.History],

  componentDidMount: function () {
    SessionsApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {

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
