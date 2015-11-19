$(function () {
  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass ({
    render: function () {
      return (
        <div>
          <NavigationBar />
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Search} />
      <Route path="restaurants/new" component={RestaurantForm} />
      <Route path="restaurants/:id" component={Restaurant}>
        <Route path="review" component={ReviewForm} />
      </Route>
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);

});
