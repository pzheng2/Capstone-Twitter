var Map = window.Map = React.createClass({
  getInitialState: function () {
    return {
      markers: [],
      previousRestaurants: RestaurantStore.all(),
      prevRestaurantMarkers: {}
    };
  },

  setupMap: function () {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: { lat: 40.725024, lng: -73.996792 },
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    this.map.addListener('idle', function () {
      var latLngBounds = this.map.getBounds();
      var bounds = {
        "northEast": { "lat": latLngBounds.getNorthEast().lat(), "lng": latLngBounds.getNorthEast().lng() },
        "southWest": { "lat": latLngBounds.getSouthWest().lat(), "lng": latLngBounds.getSouthWest().lng() }
      };
      ApiUtil.fetchRestaurantsInBounds(bounds);
    }.bind(this));

  },

  componentDidMount: function () {
    this.setupMap();

    // RestaurantStore.addChangeListener(this.manageMarkers);
  },



  render: function () {
    return (
      <div className="map" ref="map">
      </div>
    );
  }

});
