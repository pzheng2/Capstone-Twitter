var UserIndex = window.UserIndex = React.createClass ({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return { users: UserStore.all() };
  },

  componentDidMount: function () {
    ApiUtil.fetchUsers();
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ users: UserStore.all() });
  },

  render: function () {
    var users = this.state.users.map(function (user) {
      return (
        <li key={ user.id }>
          <a href={ "#/users/" + user.id }>
            { user.username }
          </a>
        </li>
      );
    });

    return (
      <div>
        <h1 className="title">Users</h1>
        <ul className="users-index">{ users }</ul>
      </div>
    );
  }

});
