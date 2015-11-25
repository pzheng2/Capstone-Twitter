var TagForm = window.TagForm = React.createClass ({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
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
    //TagApiUtil.createTag();
  },

  _userChange: function () {
    var useful = false, funny = false, cool = false;
    var currentUser = CurrentUserStore.currentUser();

    this.props.review.tags.forEach(function (tag) {
      if (tag.user_id === currentUser.id) {
        if (tag.category === "useful") {
          useful = true;
        } else if (tag.category === "funny") {
          funny = true;
        } else {
          cool = true;
        }
      }
    });

    this.setState({
      currentUser: currentUser,
      useful: useful,
      funny: funny,
      cool: cool
    });
  },

  _adjustCount: function (event) {
    var category = event.currentTarget.dataset.category;
    var toggle = this.state[category] ? -1 : 1;

    // switch (category) {
    //   case "useful":
    //     this.setState({ useful: !this.state.useful, numUsefulTags: this.state.numUsefulTags + toggle });
    //     break;
    //
    //   case "funny":
    //     this.setState({ funny: !this.state.funny, numFunnyTags: this.state.numFunnyTags + toggle });
    //     break;
    //
    //   case "cool":
    //     this.setState({ cool: !this.state.cool, numCoolTags: this.state.numCoolTags + toggle });
    //     break;
    // }

    var numCategory = "num" + category[0].toUpperCase() + category.slice(1) + "Tags";
    var change = {};
    change[category] = !this.state[category];
    change[numCategory] = this.state[numCategory] + toggle;
    this.setState(change);

    // if (this.state[category]) {
    //   this.setState({ category: false, numCategory: this.state[numCategory]-- });
    // } else {
    //   this.setState({ category: true, numCategory: this.state[numCategory]++ });
    // }

  },

  render: function () {
    return (
      <div>
        <input type="checkbox" onChange={ this._adjustCount } checked={ this.state.useful } data-category="useful">Useful</input>{ this.state.numUsefulTags || ""}
        <input type="checkbox" onChange={ this._adjustCount } checked={ this.state.funny } data-category="funny">Funny</input>{ this.state.numFunnyTags || ""}
        <input type="checkbox" onChange={ this._adjustCount } checked={ this.state.cool } data-category="cool">Cool</input>{ this.state.numCoolTags || ""}
      </div>
    );
  }
});
