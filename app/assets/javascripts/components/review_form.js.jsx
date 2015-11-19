var ReviewForm = window.ReviewForm = React.createClass ({

  // mixins: [React.addons.LinkedStateMixin, ReactRouter.history],

  getInitialState: function () {
    return {
      author_id: "",
      restuarant_id: "",
      title: "",
      description: "",
      rating: ""
    };
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

  _onSubmit: function (event) {
    event.preventDefault();
    ApiUtil.createReview({
        title: this.state.title,
        description: this.state.description,
        rating: this.state.rating
    });
  },

  render: function () {
    return (
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
    );
  }

});
