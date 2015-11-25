var RestaurantTagForm = window.RestaurantTagForm = React.createClass ({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      author: CurrentUserStore.currentUser(),
      bar: false,
      american: false,
      italian: false,
      asian: false,
      spanish: false,
      errors: null
    };
  },

  componentDidMount: function () {
    SessionsApiUtil.fetchCurrentUser(this._ensureLoggedIn);
    CurrentUserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ author: CurrentUserStore.currentUser() });
  },

  _ensureLoggedIn: function (currentUser) {
    if (!currentUser.username) {
      this.history.pushState(
        { errors: "Need to be logged in to give restaurant tags" },
        "/login"
      );
    }

    this.setState({ author: currentUser });
  },

  navigateToShow: function (restaurantId) {
    var restaurantURL = "/restaurants/" + restaurantId;
    this.props.history.pushState(null, restaurantURL);
  },

  successCallback: function (restaurant) {
    this.navigateToShow(restaurant.id);
  },

  errorCallback: function (errors) {
    this.setState({ errors: errors });
  },

  _onSubmit: function (event) {
    event.preventDefault();
    var formData = new FormData();

    formData.append("restaurant[name]", this.state.name);
    formData.append("restaurant[address]", this.state.address);
    formData.append("restaurant[phone]", this.state.phone);
    formData.append("restaurant[image]", this.state.imageFile);

    ApiUtil.createRestaurant(formData, this.successCallback, this.errorCallback);

    this.setState({ name: "", address: "", phone: "" });
  },

  render: function () {
    var Link = ReactRouter.Link;
    var errors = [];
    if (this.state.errors) {
      for (var i = 0; i < this.state.errors.responseJSON.length; i++) {
        errors.push(this.state.errors.responseJSON[i]);
      }
    }

    return (
      <div className="body">
        <div className="errors">
          {
            errors.map(function (error, i) {
              return <div key={ i }>{error}</div>;
            })
          }
        </div>
        <form onSubmit={ this._onSubmit }>

          <label>
            Bar:
            <input type="checkbox" valueLink={ this.linkState("bar") } />
          </label>

          <label>
            American:
            <input type="checkbox" valueLink={ this.linkState("american") } />
          </label>

          <label>
            Italian:
            <input type="checkbox" valueLink={ this.linkState("italian") } />
          </label>

          <label>
            Asian:
            <input type="checkbox" valueLink={ this.linkState("asian") } />
          </label>

          <label>
            Spanish:
            <input type="checkbox" valueLink={ this.linkState("spanish") } />
          </label>

          <button>Submit</button>
        </form>
        <Link to={ "/restaurants/" + this.props.params.id }>Cancel</Link>
      </div>
    );
  }

});
