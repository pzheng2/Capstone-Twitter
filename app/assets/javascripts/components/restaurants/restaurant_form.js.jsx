var RestaurantForm = window.RestaurantForm = React.createClass ({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      name: "",
      address: "",
      phone: "",
      imageUrl: "",
      imageFile: null,
      errors: null,
      tags: []
    };
  },

  navigateToShow: function (restaurantId) {
    var restaurantURL = "/restaurants/" + restaurantId;
    this.props.history.pushState(null, restaurantURL);
  },

  successCallback: function (restaurant) {
    this.navigateToShow(restaurant.id);
    this.state.tags.forEach(function (tag) {
      RestaurantTagApiUtil.createTag({ restaurant_id: restaurant.id, category: tag });
    }.bind(this));
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

  _saveRestaurantTags: function () {

  },

  _onSubmit: function (event) {
    event.preventDefault();
    var formData = new FormData();

    formData.append("restaurant[name]", this.state.name);
    formData.append("restaurant[address]", this.state.address);
    formData.append("restaurant[phone]", this.state.phone);
    if (this.state.imageFile) {
      formData.append("restaurant[image]", this.state.imageFile);
    }

    ApiUtil.createRestaurant(formData, this.successCallback, this.errorCallback);

    this.setState({
      name: "",
      address: "",
      phone: ""
    });
  },

  includes: function (category) {
    for (var i = 0; i < this.state.tags.length; i++) {
      if (this.state.tags[i] === category) {
        return true;
      }
    }

    return false;
  },

  changeTags: function (event) {
    var category = event.currentTarget.dataset.category;

    if (this.includes(category)) {
      this.state.tags.splice(this.state.tags.indexOf(category), 1);
    } else {
      this.state.tags.push(category);
    }
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

          <label>Name:
            <input type="text" valueLink={ this.linkState("name") } />
          </label>

          <label>Address:
            <input type="text" valueLink={ this.linkState("address") } />
          </label>

          <label>Phone #:
            <input type="text" valueLink={ this.linkState("phone") } />
          </label>

          <label>Picture:
            <input type="file" onChange={ this._updateFile } />
          </label>

          <br/>

          <label>
            Bar:
            <input type="checkbox" onChange={this.changeTags} data-category="bar" />
          </label>

          <label>
            American:
            <input type="checkbox" onChange={this.changeTags} data-category="american" />
          </label>

          <label>
            Italian:
            <input type="checkbox" onChange={this.changeTags} data-category="italian"/>
          </label>

          <label>
            Asian:
            <input type="checkbox" onChange={this.changeTags} data-category="asian"/>
          </label>

          <label>
            Spanish:
            <input type="checkbox" onChange={this.changeTags} data-category="spanish"/>
          </label>

          <button>submit</button>
        </form>
        <img className="preview-image" src={ this.state.imageUrl } />
        <Link to="/">Back to Index</Link>
      </div>
    );
  }

});
