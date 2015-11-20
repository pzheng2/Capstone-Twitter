var ReviewForm = window.ReviewForm = React.createClass ({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      author: CurrentUserStore.currentUser(),
      title: "",
      description: "",
      rating: 5,
      errors: null
    };
  },

  componentDidMount: function () {
    // CurrentUserStore.addChangeListener(this._ensureLoggedIn);
    this._ensureLoggedIn();
    this.setState(this.props.location.state);
  },

  componentWillUnmount: function () {
    // CurrentUserStore.removeChangeListener(this._ensureLoggedIn);
  },

  _ensureLoggedIn: function () {
    if (!CurrentUserStore.isLoggedIn()) {
      this.history.pushState(null, "/login");
    }

    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  navigateToShow: function () {
    var restaurantURL = "/restaurants/" + this.props.params.id;
    this.props.history.pushState(null, restaurantURL);
  },

  navigateBackToForm: function (newState) {
    var restaurantURL = "/restaurants/" + this.props.params.id + "/review";
    this.props.history.pushState(newState, restaurantURL);
  },

  _updateTitle: function (event) {
    this.setState({ title: event.currentTarget.value });
  },

  _updateDescription: function (event) {
    this.setState({ description: event.currentTarget.value });
  },

  _updateRating: function (event) {
    this.setState({ rating: event.currentTarget.value });
  },

  errorCallback: function (errors) {
    this.navigateBackToForm({
      author: CurrentUserStore.currentUser(),
      title: this.state.title,
      description: this.state.description,
      rating: this.state.rating,
      errors: errors
    });
  },

  _onSubmit: function (event) {
    event.preventDefault();
    this.state.errors = null;
    ApiUtil.createReview({
      author_id: this.state.author.id,
      restaurant_id: this.props.params.id,
      title: this.state.title,
      description: this.state.description,
      rating: this.state.rating
    }, this.errorCallback);
    this.navigateToShow();
  },

  _onCancel: function (event) {
    event.preventDefault();
    this.navigateToShow();
  },

  render: function () {
    var errors ="";

    if (this.state.errors) {
      errors = <div className="errors"> { this.state.errors.responseJSON.join(", ") } </div>;
    }

    return (
      <div>
      {errors}
        <form onSubmit={this._onSubmit}>
          <label>
            Title:
            <input type="text" onChange={this._updateTitle} value={this.state.title} />
          </label>

          <label>
            Description:
            <input type="text" onChange={this._updateDescription} value={this.state.description} />
          </label>

          <label>
            Rating:
            <input type="text" onChange={this._updateRating} value={this.state.rating} />
          </label>

          <button>submit</button>
        </form>
        <button onClick={this._onCancel}>Cancel</button>
      </div>
    );
  }

});
