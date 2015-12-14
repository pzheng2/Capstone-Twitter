var Tab = React.createClass({
  getInitialState: function () {
    return { selected: 5 };
  },

  changeTab: function (e) {
    this.setState( { selected: parseInt(e.currentTarget.id) } );
  },

  render: function () {
    var tabNames = [];

    for (var i = 0; i < this.props.tabs.length; i++) {
      if (i === this.state.selected) {
        tabNames.push(<li className="tab-name" key={i} id={i} onClick={this.changeTab}><b><a href="#">{this.props.tabs[i].name}</a></b></li>);
      } else {
        tabNames.push(<li className="tab-name" key={i} id={i} onClick={this.changeTab}><a href="#">{this.props.tabs[i].name}</a></li>);
      }
    }

    return (
      <div>
        <ul>
          { tabNames }
        </ul>
        <div>
          {
            this.props.tabs[this.state.selected].content.map(function (restaurant) {
              return <RestaurantIndexItem key={ restaurant.id } restaurant={ restaurant } />;
            })
          }
        </div>
      </div>
    );
  },

});
