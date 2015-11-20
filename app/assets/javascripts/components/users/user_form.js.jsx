var UserForm = window.UserForm = React.createClass({
  mixins: [ReactRouter.History],

  submit: function (e) {
    e.preventDefault();
  },

  render: function() {
    return (
      <form onSubmit={ this.submit }>

        <h1>Sign Up!</h1>

        <label>
          Username:
          <input type="text" name="username" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <button>Join!</button>
      </form>
    );
  },

});
