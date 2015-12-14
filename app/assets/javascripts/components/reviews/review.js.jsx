var Review = window.Review = React.createClass({

  render: function () {
    return (
      <div className="review-body">
        <ul>
          <li className="review-title">
            { this.props.review.title }
            <div className = { "review-rating rating-" + this.props.review.rating }>
            </div>
          </li>

          <li className="review-date">
            { this.props.review.date }
          </li>

          <li className="review-description">
            { this.props.review.description }
          </li>

          <li className="review-author">
            { this.props.review.author }
          </li>

        </ul>

        <TagForm review={ this.props.review } />
      </div>
    );
  }

});
