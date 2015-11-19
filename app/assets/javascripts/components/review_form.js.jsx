var ReviewForm = window.ReviewForm = React.createClass ({

  // mixins: [React.addons.LinkedStateMixin, ReactRouter.history],

  getInitialState: function () {
    return {
      title: "",
      description: "",
      rating: 5
    };
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

  _updateRating: function (event) {
    this.setState({ rating: event.currentTarget.value });
  },

  errorCallback: function (jqXHR, textStatus) {
    console.log(jqXHR, textStatus);
  },

  _onSubmit: function (event) {
    event.preventDefault();
    ApiUtil.createReview({
      author_id: 1,
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
    return (
      <div>
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
