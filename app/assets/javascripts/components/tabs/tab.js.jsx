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
        tabNames.push(<li className="tab-name selected" key={ i } id={ i } onClick={ this.changeTab }><a href="#">{ this.props.tabs[i].name }</a></li>);
      } else {
        tabNames.push(<li className="tab-name" key={ i } id={ i } onClick={ this.changeTab }><a href="#">{ this.props.tabs[i].name }</a></li>);
      }
    }

    return (
      <div className="tabs-body">
        <ul className="tab-names">
          { tabNames }
        </ul>
        <div className="tab-contents">
          {
            this.props.tabs[this.state.selected].content.map(function (restaurant) {
              return <RestaurantIndexItem key={ restaurant.id } indexPage={ true } restaurant={ restaurant } />;
            })
          }
        </div>
      </div>
    );
  },

});
