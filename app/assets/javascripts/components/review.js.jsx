var Review = window.Review = React.createClass({

  render: function () {
    return (
      <div>
        <label className="review-title">
          Title:
          {this.props.review.title}
        </label>

        <label className="review-description">
          Description:
          {this.props.review.description}
        </label>

        <label className="review-rating">
          Rating:
          {this.props.review.rating}
        </label>

        <label className="review-author">
          Author:
          {this.props.review.author}
        </label>

        <label className="review-date">
          Date:
          {this.props.review.date}
        </label>
      </div>
    );
  }

});
