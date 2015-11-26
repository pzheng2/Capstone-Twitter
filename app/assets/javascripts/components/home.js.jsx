var Home = window.Home = React.createClass({

  getInitialState: function () {
    return {
      restaurants: RestaurantStore.all(),
      tabs: TabStore.all()
    };
  },

  _restaurantsChanged: function () {
    this.setState({ restaurants: RestaurantStore.all() });
  },

  _tabsChanged: function () {
    this.setState({ tabs: TabStore.all() });
  },

  componentDidMount: function () {
    TabApiUtil.fetchTabs();
    RestaurantStore.addChangeListener(this._restaurantsChanged);
    TabStore.addChangeListener(this._tabsChanged);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeListener(this._restaurantsChanged);
    TabStore.removeChangeListener(this._tabsChanged);
  },

  handleMarkerClick: function (restaurant) {
    this.props.history.pushState(null, "restaurants/" + restaurant.id);
  },

  render: function () {
    var tabsList = [];

    this.state.tabs.bar && Object.keys(this.state.tabs).forEach(function (category) {
      tabsList.push({ name: category, content: this.state.tabs[category] });
    }.bind(this));

    return (
      <div className="home-body group">
        <RestaurantIndex />
        <Map
          handleMarkerClick={this.handleMarkerClick}
          restaurants={this.state.restaurants}
        />
        {
          this.state.tabs.bar &&
          <Tab tabs={ tabsList } />
        }

      </div>
    );
  }
        // {
        //   this.state.tabs.bar &&
        //   Object.keys(this.state.tabs).map(function (category) {
        //     return <Tab category={{ category: category, restaurants: this.state.tabs.category }} />;
        //   }.bind(this))
        // }

});
