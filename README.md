# Zelp

[Heroku link][heroku]

[heroku]: https://capstone-zelp.herokuapp.com/

## Minimum Viable Product

Zelp is a web application inspired by Yelp built using Ruby on Rails and React.js.
This website will allow users to:

- [x] Create an account
- [x] Log in / Log out
- [x] Restaurants
- [x] Search for restaurants
- [ ] Navigation bar
- [x] Restaurant reviews
- [ ] Restaurant tags
- [x] Google maps for restaurant locations
- [ ] Search
- [ ] User Profile
- [ ] Style the website

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## TODO
- Make RestaurantForm's underscore methods private
- Decide if you want to change the state attributes to instance variables in the map component
- Skipped phase 2b
- Create JBuilder for users
- Tags
- Add images to other models


## Implementation Timeline

### Phase 1: User Authentication, Restaurant Model and JSON API (1 day)

- Users will be able to create accounts, sign up, sign in and log out.
- Users will only be able to see other users if they are logged in.
- After signing in or signing up, users will be redirected to the root page
- The root page will contain all of the React components such as Restaurants,
comments, tags and map.
- Create restaurant model
- Set up Api and root page

[Details][phase-one]

### Phase 2a: Flux Architecture and Restaurant CRUD (2 days)

- Set up Flux architecture
- Create restaurant store, App Dispatcher, constants, utils and routes.
- Create actions for creating a new restaurant and fetching all restaurants
- Create restaurant index, restaurant item and restaurant form components.
- Use ruby geocoder to obtain the latitude and longitude of restaurants.
- Create map component using Google maps api.
- Create info window for markers
- Users will be able to create, read and edit restaurants at the end of this phase.

[Details][phase-two-a]

### Phase 2b: Navigation bar (1 day)

Phase 2b will be focused on making the navigation bar which contains sign up, sign in,
a logo and navigation links utilizing React Routers.

[Details][phase-two-b]


### Phase 3: Review (1 day)

- Create review form
- Reviews should be shown on the restaurant item page
- User should be able to navigate to new review page for a restaurant
- User should be able to create and destroy a review
- Reviews should have the option of containing a picture
- Review rating should be from 1-10

[Details][phase-three]

### Phase 4: Tags (1 day)

Tags have a tagging id and a description. Taggings have many tags, restaurants have many taggings. JSON API should be able to return all tags and return all restaurants for a given tag. Nested under tag index, which is nested. JSON API should be nested underneath the restaurant tags.

[Details][phase-four]

### Phase 5: Reminders and Garbage Collection (1 day)

Phase 5 introduces two new features. First, users can set reminders on restaurant
which will at the time they are set for prompt the user to review and edit the
given restaurant. In addition, I will implement a feature that asks users to review
restaurants once they reach a certain age and ask whether they should be kept,
archived, or deleted.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (2 day)

Utilize faker to create seed data for restaurants, reviews, and users. Use bootstrap
to clean up formatting of website

### Bonus Features (TBD)
- [ ] Add photos
- [ ] Add data
- [ ] Display search radius
- [ ] Add friends
- [ ] Hovering over markers displays info

[phase-one]: ./docs/phases/phase1.md
[phase-two-a]: ./docs/phases/phase2a.md
[phase-two-b]: ./docs/phases/phase2b.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
