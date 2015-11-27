var TagForm = window.TagForm = React.createClass ({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
    this.initialTags = {
      useful: { initial: false, id: null },
      funny:  { initial: false, id: null },
      cool:   { initial: false, id: null }
    };

    return {
      numUsefulTags: this.props.review.numUsefulTags,
      numFunnyTags: this.props.review.numFunnyTags,
      numCoolTags: this.props.review.numCoolTags,
      useful: false,
      funny: false,
      cool: false,
      currentUser: null
    };
  },

  componentDidMount: function () {
    this._userChange();
    CurrentUserStore.addChangeListener(this._userChange);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this._userChange);
    this.findChangedTags();
  },

  _userChange: function () {
    var useful = false, funny = false, cool = false;
    var currentUser = CurrentUserStore.currentUser();

    // Get tags for current user where review_id = review.id and send it in Jbuilder
    this.props.review.tags && this.props.review.tags.forEach(function (tag) {
      if (tag.user_id === currentUser.id) {
        if (tag.category === "useful") {
          useful = true;
          this.initialTags.useful = { initial: true, id: tag.id };
        } else if (tag.category === "funny") {
          funny = true;
          this.initialTags.funny = { initial: true, id: tag.id };
        } else {
          cool = true;
          this.initialTags.cool = { initial: true, id: tag.id };
        }
      }
    }.bind(this));

    this.setState({
      currentUser: currentUser,
      useful: useful,
      funny: funny,
      cool: cool
    });
  },

  findChangedTags: function () {
    if (this.initialTags.useful.initial !== this.state.useful)
      this.saveTagChanges("useful");

    if (this.initialTags.funny.initial !== this.state.funny)
      this.saveTagChanges("funny");

    if (this.initialTags.cool.initial !== this.state.cool)
      this.saveTagChanges("cool");

  },

  saveTagChanges: function (category) {
    if (this.initialTags[category].id) {
      TagApiUtil.deleteTag({
        id: this.initialTags[category].id
      });
    } else {
      TagApiUtil.createTag({
        user_id: this.state.currentUser.id,
        review_id: this.props.review.id,
        category: category
      });
    }

  },

  _adjustCount: function (event) {
    var category = event.currentTarget.dataset.category;
    var toggle = this.state[category] ? -1 : 1;

    var numCategory = "num" + category[0].toUpperCase() + category.slice(1) + "Tags";
    var change = {};
    change[category] = !this.state[category];
    change[numCategory] = this.state[numCategory] + toggle;
    this.setState(change);

  },

  render: function () {
    return (
      <ul className="review-tags group">
        <li>
          <div className="num_tags">Useful{ this.state.numUsefulTags || ""}</div>
          <input type="checkbox" onChange={ this._adjustCount } checked={ this.state.useful } data-category="useful"></input>
        </li>
        <li>
          <div className="num_tags">Funny{ this.state.numFunnyTags || ""}</div>
          <input type="checkbox" onChange={ this._adjustCount } checked={ this.state.funny } data-category="funny"></input>
        </li>
        <li>
          <div className="num_tags">Cool{ this.state.numCoolTags || ""}</div>
          <input type="checkbox" onChange={ this._adjustCount } checked={ this.state.cool } data-category="cool"></input>
        </li>
      </ul>
    );
  }
});
