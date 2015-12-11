var Search = window.Search = React.createClass ({

  mixins: [ReactRouter.History],

  componentDidMount: function () {
    SearchResultStore.addChangeListener(this._onChange);

    var queryParams = this.props.location.query;
    SearchApiUtil.search(queryParams.query || "", queryParams.page || 1);
  },

  componentWillUnmount: function () {
    SearchResultStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps: function (newProps) {
    SearchApiUtil.search(
      newProps.location.query.query,
      newProps.location.query.page
    );
  },

  _onChange: function () {
    this.setState({ results: SearchResultStore.results() });
  },

  _onInput: function (e) {
    e.preventDefault();
    var query = $(e.currentTarget).val();
    this.history.pushState(null, "/search", {
      query: query,
      page: 1
    });
  },

  render: function () {
    var results = SearchResultStore.results().map(function (result, index) {
      return (
        <RestaurantIndexItem key={ index } restaurant={ result } />
      );
    });

    var nextPage = (parseInt(this.props.location.query.page) || 1) + 1;
    var query = this.props.location.query.query;

    var nextButton = (
      <a href={ "#/search?query=" + query + "&page=" + nextPage }>
        Next
      </a>
    );

    return (
      <div className="body">
        <input className="search-bar" type="text"
          value={ query }
          onChange={ this._onInput }
          placeholder="search..."
        />

        <p className="pages-info">
          { "Displaying " + SearchResultStore.results().length + " of " + SearchResultStore.totalCount()}
        </p>

        <ul className="search-results">
          { results }
        </ul>


      </div>
    );
  }

});
