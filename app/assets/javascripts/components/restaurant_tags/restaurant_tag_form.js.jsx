var RestaurantTagForm = window.RestaurantTagForm = React.createClass ({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      bar: false,
      american: false,
      italian: false,
      asian: false,
      spanish: false,
      errors: null
    };
  },

  render: function () {
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
              return <div key={ i }>{ error }</div>;
            })
          }
        </div>
        
      </div>
    );
  }

});
