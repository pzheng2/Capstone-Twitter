var Map = window.Map = React.createClass({
  getInitialState: function () {
    return {
      markers: [],
      previousRestaurants: [],
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

    var mapStyles = [
      // {
      //   stylers: [
      //     { saturation: 100 }
      //   ]
      // },
      {
        featureType: "poi",
        stylers: [
          { visibility: "off" }
        ]
      },
      {
        featureType: "transit.station",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    this.map.setOptions({ styles: mapStyles });

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
    RestaurantStore.addChangeListener(this.manageMarkers);
  },

  componentWillUnmount: function () {
    RestaurantStore.removeChangeListener(this.manageMarkers);
  },

  createMarkers: function () {
    RestaurantStore.all().forEach(function (restaurant, i) {
      if (!this.includesRestaurant(this.state.previousRestaurants, restaurant)) {
        var latLng = { lat: restaurant.latitude, lng: restaurant.longitude };

        var sContent = (
          '<h2><b>' + restaurant.name + '</b></h2>' +
          '<br />' + restaurant.address +
          '<br />' + restaurant.phone +
          '<br />' + restaurant.categories.join(", ")
        );

        infoWindow = new google.maps.InfoWindow({ content: sContent });

        marker = new google.maps.Marker({
          position: latLng,
          label: (i + 1).toString(),
          map: this.map,
          info: sContent
        });

        google.maps.event.addListener(marker, 'mouseover', function () {
          infoWindow.setContent(this.info);
          infoWindow.open(this.map, this);
        });

        google.maps.event.addListener(marker, 'mouseout', function () {
          infoWindow.close(this.map, this);
        });

        this.state.prevRestaurantMarkers[restaurant.name] = marker;
        marker.setMap(this.map);
      }
    }.bind(this));

  },


  deleteMarkers: function () {
    this.state.previousRestaurants.forEach(function (prevRestaurant) {
      if (!this.includesRestaurant(RestaurantStore.all(), prevRestaurant)) {
        this.state.prevRestaurantMarkers[prevRestaurant.name].setMap(null);
      }
    }.bind(this));
  },

  includesRestaurant: function (arr, restaurant) {
    for (var i = 0; i < arr.length; i++) {
      if (restaurant.name === arr[i].name) {
        return true;
      }
    }

    return false;
  },

  manageMarkers: function () {
    var markersArr = this.state.markers, marker;
    this.createMarkers();
    this.deleteMarkers();

    this.setState({ previousRestaurants: RestaurantStore.all() });
  },

  render: function () {
    return (
      <div className="map" ref="map">
      </div>
    );
  }

});
