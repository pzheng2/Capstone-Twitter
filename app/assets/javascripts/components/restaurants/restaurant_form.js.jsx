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
    var file = event.currentTarget.files[0];

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
    var formData = new FormData();

    formData.append("restaurant[name]", this.state.name);
    formData.append("restaurant[address]", this.state.address);
    formData.append("restaurant[phone]", this.state.phone);
    formData.append("restaurant[image]", this.state.imageFile);

    ApiUtil.createRestaurant(formData, this.successCallback, this.errorCallback);

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
      <div className="body">
        <div className="errors">
          {
            errors.map(function (error, i) {
              return <div key={ i }>{error}</div>;
            })
          }
        </div>
        <form onSubmit={ this._onSubmit }>
          <label>
            Name:
            <input type="text" onChange={ this._updateName } value={ this.state.name } />
          </label>

          <label>
            Address:
            <input type="text" onChange={ this._updateAddress } value={ this.state.address } />
          </label>

          <label>
            Phone #:
            <input type="text" onChange={ this._updatePhone } value={ this.state.phone } />
          </label>

          <label>
            Picture:
            <input type="file" onChange={ this._updateFile } />
          </label>

          <button>submit</button>
        </form>
        <img className="preview-image" src={ this.state.imageUrl } />
        <Link to="/">Back to Index</Link>
      </div>
    );
  }

});
