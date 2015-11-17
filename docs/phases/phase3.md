# Phase 3: Reviews (1 days)

## Rails
### Models
* Review

### Controllers
* Api::ReviewsController (create, destroy, index, show, update)

### Views
* reviews/index.json.jbuilder
* reviews/show.json.jbuilder

## Flux
### Views (React Components)
* NavigationIndex
  - RestaurantIndex -Restaurant -Restaurant Detail -ReviewIndex -ReviewForm -Reviews
* Review

### Stores

### Actions
* ApiActions.receiveAllReviews
* ApiActions.receiveSingleReviews
* ApiActions.deleteReviews

### ApiUtil
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReviews
* ApiUtil.createReviews
* ApiUtil.editReviews
* ApiUtil.destroyReviews

## Gems/Libraries
