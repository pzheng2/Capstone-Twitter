var Search = window.Search = React.createClass({

  getInitialState: function () {
    return {
      restaurants: RestaurantStore.all()
    };
  },

  _onChange: function () {
    
  },

  render: function () {
    return (
      <div>
        <Map />
        <RestaurantIndex />
      </div>
    );
  }


});
