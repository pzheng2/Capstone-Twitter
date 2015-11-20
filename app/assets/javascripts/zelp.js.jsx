$(function () {
  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
    <Route path="/" component={ App }>
      <IndexRoute component={ Search } />
      <Route path="login" component={ SessionForm } />
      <Route path="users" component={ UserIndex } />
      <Route path="users/new" component={ UserForm } />
      <Route path="users/:id" component={ UserShow } />
      <Route path="restaurants/new" component={ RestaurantForm } />
      <Route path="restaurants/:id" component={ Restaurant }>
        <Route path="review" component={ ReviewForm } />
      </Route>
    </Route>
  );

  React.render(<Router>{ routes }</Router>, root);

});
