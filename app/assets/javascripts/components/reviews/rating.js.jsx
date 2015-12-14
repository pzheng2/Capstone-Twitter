var Rating = window.Rating = React.createClass ({
  getInitialState: function () {
    this.defaultReviewDescription = "Select your rating.";
    return {
      reviewDescription: this.defaultReviewDescription
    };
  },

  _onMouseOver: function (event) {
    this.setState({ reviewDescription: event.currentTarget.innerHTML });
  },

  _onMouseOut: function (event) {
    this.setState({ reviewDescription: this.defaultReviewDescription });
  },

  render: function () {
    return (
      <div>
        <span className="rating">
          <input type="radio" onClick={ this.props.updateRating } onHover={ this._onHover }
            className="rating-input" id="rating-input-1-5" name="rating-input-1"/>
          <label onMouseOver={ this._onMouseOver } onMouseOut={ this._onMouseOut }
            htmlFor="rating-input-1-5" className="rating-star">{ "Woohoo! As good as it gets!" }</label>

          <input type="radio" onClick={ this.props.updateRating }
            className="rating-input" id="rating-input-1-4" name="rating-input-1"/>
          <label onMouseOver={ this._onMouseOver } onMouseOut={ this._onMouseOut }
            htmlFor="rating-input-1-4" className="rating-star">{ "Yay! I'm a fan." }</label>

          <input type="radio" onClick={ this.props.updateRating }
            className="rating-input" id="rating-input-1-3" name="rating-input-1"/>
          <label onMouseOver={ this._onMouseOver } onMouseOut={ this._onMouseOut }
            htmlFor="rating-input-1-3" className="rating-star">{ "A-OK." }</label>

          <input type="radio" onClick={ this.props.updateRating }
            className="rating-input" id="rating-input-1-2" name="rating-input-1"/>
          <label onMouseOver={ this._onMouseOver } onMouseOut={ this._onMouseOut }
            htmlFor="rating-input-1-2" className="rating-star">{ "Meh. I've had better." }</label>

          <input type="radio" onClick={ this.props.updateRating }
            className="rating-input" id="rating-input-1-1" name="rating-input-1"/>
          <label onMouseOver={ this._onMouseOver } onMouseOut={ this._onMouseOut }
            htmlFor="rating-input-1-1" className="rating-star">{ "Eek! Methinks not." }</label>
        </span>
        <p className="star-description">{ this.state.reviewDescription }</p>
      </div>
    );
  }

});
