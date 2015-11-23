var TagForm = window.TagForm = React.createClass ({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      useful: this.props.useful,
      funny:  this.props.funny,
      cool:   this.props.cool
    };
  },

  render: function () {
    return (
      <div>
        <button valueLink={ this.state.useful }>Useful</button>
        <button valueLink={ this.state.funny }>Funny</button>
        <button valueLink={ this.state.cool }>Cool</button>
      </div>
    );
  }
});
