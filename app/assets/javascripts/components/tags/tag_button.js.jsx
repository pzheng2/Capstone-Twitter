var TagButton = window.TagButton = React.createClass ({
  getInitialState: function () {
    return {
      status: false
    };
  },

  handleClick: function () {
    this.setState({ status: !this.state.status });
  },

  render: function () {
    return (
      <a href="#">
        { this.props.name }
      </a>
    );
  }
});
