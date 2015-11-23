var RestaurantForm = window.RestaurantForm = React.createClass ({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {
      name: "",
      address: "",
      phone: "",
      imageUrl: "",
      imageFile: null,
      errors: null
    };
  },

  navigateToShow: function (restaurantId) {
    var restaurantURL = "/restaurants/" + restaurantId;
    this.props.history.pushState(null, restaurantURL);
  },

  successCallback: function (restaurant) {
    this.navigateToShow(restaurant.id);
  },

  errorCallback: function (errors) {
    this.setState({ errors: errors });
  },

  _updateName: function (event) {
    this.setState({ name: event.currentTarget.value });
  },

  _updateAddress: function (event) {
    this.setState({ address: event.currentTarget.value });
  },

  _updatePhone: function (event) {
    this.setState({ phone: event.currentTarget.value });
  },

  _updateFile: function (event) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    reader.onload = function () {
      this.setState({ imageUrl: reader.result, imageFile:file });
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  },

  _onSubmit: function (event) {
    event.preventDefault();

    ApiUtil.createRestaurant({
        name: this.state.name,
        address: this.state.address,
        phone: this.state.phone,
        image: this.state.imageFile
    }, this.successCallback, this.errorCallback);

    this.setState({ name: "", address: "", phone: "" });
  },

  render: function () {
    var Link = ReactRouter.Link;
    var errors = [];
    if (this.state.errors) {
      for (var i = 0; i < this.state.errors.responseJSON.length; i++) {
        errors.push(this.state.errors.responseJSON[i]);
      }
    }

    return (
      <div>
        <div className="errors">
          {
            errors.map(function (error, i) {
              return <div key={i}>{error}</div>;
            })
          }
        </div>
        <form onSubmit={this._onSubmit}>
          <label>
            Name:
            <input type="text" onChange={this._updateName} value={ this.state.name } />
          </label>

          <label>
            Address:
            <input type="text" onChange={this._updateAddress} value={ this.state.address } />
          </label>

          <label>
            Phone #:
            <input type="text" onChange={this._updatePhone} value={ this.state.phone } />
          </label>

          <label>
            Picture:
            <input type="file" onChange={this._updateFile} value={ this.state.imageUrl } />
          </label>

          <button>submit</button>
        </form>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }

});
