var Review = window.Review = React.createClass({

  render: function () {
    return (
      <div>
        <label>
          Title:
          {this.props.review.title}
        </label>

        <label>
          Description:
          {this.props.review.description}
        </label>

        <label>
          Rating:
          {this.props.review.rating}
        </label>

        <label>
          Author:
          {this.props.review.author}
        </label>

        <label>
          Date:
          {this.props.review.date}
        </label>
      </div>
    );
  }

});
