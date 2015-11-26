var Tab = React.createClass({
  getInitialState: function () {
    return { selected: 0 };
  },

  changeTab: function (e) {
    this.setState( { selected: parseInt(e.currentTarget.id) } );
  },

  render: function () {
    var tabNames = [];

    for (var i = 0; i < this.props.tabs.length; i++) {
      if (i === this.state.selected) {
        tabNames.push(<li id={i} onClick={this.changeTab}><b><a href="#">{this.props.tabs[i].name}</a></b></li>);
      } else {
        tabNames.push(<li id={i} onClick={this.changeTab}><a href="#">{this.props.tabs[i].name}</a></li>);
      }
    }

    return (
      <div>
        <ul>
          { tabNames }
        </ul>
        <article>{ this.props.tabs[this.state.selected].content }</article>
      </div>
    );
  },

});
