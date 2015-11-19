var RestaurantForm = window.RestaurantForm = React.createClass ({
  getInitialState: function () {
    return {
      name: "",
      address: "",
      phone: ""
    };
  },

  _onSubmit: function (event) {
    event.preventDefault();
    ApiUtil.createRestaurant({
        name: this.state.name,
        address: this.state.address,
        phone: this.state.phone
    });

    this.setState({ name: "", address: "", phone: "" });
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

  render: function () {
    return (
      <form onSubmit={this._onSubmit}>
        <label>
          Name:
          <input type="text" onChange={this._updateName} value={this.state.name} />
        </label>

        <label>
          Address:
          <input type="text" onChange={this._updateAddress} value={this.state.address} />
        </label>

        <label>
          Phone #:
          <input type="text" onChange={this._updatePhone} value={this.state.phone} />
        </label>

        <button>submit</button>
      </form>
    );
  }

});
