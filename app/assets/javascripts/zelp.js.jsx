$(function () {
  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass ({
    render: function () {
      return (
        <div>
          <header><h1>Zelp</h1></header>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="restaurants/new" component={RestaurantForm} />
      <Route path="restaurants/:id/show" component={Restaurant} />
      <Route path="reviews/new" component={ReviewForm} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);

});
