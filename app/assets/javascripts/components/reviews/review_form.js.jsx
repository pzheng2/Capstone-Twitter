var ReviewForm = window.ReviewForm = React.createClass ({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      author: CurrentUserStore.currentUser(),
      title: "",
      description: "",
      rating: "",
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
        { errors: "Need to be logged in to write a review" },
        "/login"
      );
    }

    this.setState({ author: currentUser });
  },

  navigateToShow: function () {
    var restaurantURL = "/restaurants/" + this.props.params.id;
    this.props.history.pushState(null, restaurantURL);
  },

  _updateTitle: function (event) {
    this.setState({ title: event.currentTarget.value });
  },

  _updateDescription: function (event) {
    this.setState({ description: event.currentTarget.value });
  },

  // _updateRating: function (event) {
  //   this.setState({ rating: event.currentTarget.value });
  // },

  _updateRating: function (event) {
    this.setState({ rating: event.currentTarget.id.slice(-1) });
  },

  errorCallback: function (errors) {
    this.setState({ errors: errors });
  },

  successCallback: function () {
    this.navigateToShow();
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
    }, this.successCallback, this.errorCallback);
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
      <div className="review-form">
        <div className="errors">
          {
            errors.map(function (error) {
              return <div>{error}</div>;
            })
          }
        </div>
        <form onSubmit={this._onSubmit}>
          <ul className="review-form-components group">
            <li><input className="input" type="text" onChange={this._updateTitle} value={this.state.title} placeholder="Title" /></li>
            <li><textarea className="input" onChange={this._updateDescription} value={this.state.description} placeholder="Description"/></li>
            <li>
              <Rating updateRating={ this._updateRating }/>
            </li>
            <li><button>Submit</button></li>
            <li><Link to={ "/restaurants/" + this.props.params.id }>Cancel</Link></li>
          </ul>
        </form>
      </div>
    );
  }

});
