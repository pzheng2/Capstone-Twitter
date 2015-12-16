var UserShow = window.UserShow = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return {
      user: UserStore.findUserById(parseInt(this.props.params.id))
    };
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
    UsersApiUtil.fetchUser(this.props.params.id);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var user = this.state.user;

    if (!user) {
      return (
        <div className="body">DONT HAVE A USER TO RENDER</div>
      );
    }

    var posts = [];
    if (user) {
      user.reviews && user.reviews.forEach(function (review) {
        posts.push(
          <li key={ review.id }><Review review={ review } /></li>
        );
      });
    }

    var reviewRatings = [];
    if (user) {
      Object.keys(user.num_reviews_rating).forEach(function (rating) {
        reviewRatings.push(<li key={ rating }>{ rating + "-star : " + user.num_reviews_rating[rating] }</li>);
      });
    }

    var tagCategories = [];
    if (user) {
      Object.keys(user.num_tags_category).forEach(function (category) {
        tagCategories.push(<li key={ category }>{ category + ": " + user.num_tags_category[category] }</li>);
      });
    }

    return (
      <div className="body">
        <h1 className="title">UserShow: { user.username }</h1>

        <ul className="user-posts">
          <li className="header">Users Reviews:</li>
          { posts }
        </ul>
        <ul className="user-ratings">
          <li className="header">Review Ratings:</li>
          { reviewRatings }
        </ul>

        <ul className="user-tags">
          <li className="header">Likes:</li>
          { tagCategories }
        </ul>
      </div>
    );
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  }
});
