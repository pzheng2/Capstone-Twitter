# Zelp

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Zelp is a web applicaiton inspired by Yelp built using Ruby on Rails and React.js.
This website will allow users to:

- [x] Create an account
- [x] Log in / Log out
- [ ] CRUD for restaurants
- [ ] Search for restaurants
- [ ] CRUD for restaurant reviews
- [ ] CRUD for restaurant tags
- [ ] Google maps for restaurant locations
- [ ] Style the website

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## TODO
- Only signed in users can see other users
- Add validation for restaurant address


## Implementation Timeline

### Phase 1: User Authentication, Note Model and JSON API (1 day)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Restaurants.

[Details][phase-one]

### Phase 2a: Flux Architecture and Restaurant CRUD (2 days)

Phase 2a is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Restaurant store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Restaurant `Index`, `IndexItem` and `Form`. At the end of Phase 2a,
Restaurant can be created, read, edited and destroyed in the browser. Restaurants
should save to the database when the form loses focus or is left idle after editing.
Lastly, while constructing the views I will start using css for styling.

[Details][phase-two-a]

### Phase 2b: Navigation bar (1 day)

Phase 2b will be focused on making the navigation bar which contains sign up, sign in,
a logo and navigation links utilizing React Routers.

[Details][phase-two-b]


### Phase 3: Review (1 day)

Reviews have user id, rating, body, and restaurant id. Reviews belong to restaurants and users. JSON API should be able to create reviews, return all of the reviews for a given restaurant or user. The review components should belong to a review Index, which will be nested under the restaurant component. A restaurant will have a rating based off of the average of all its user reviews. There should be the ability to generate a review (only if logged in as a user), edit the review, and view other user's reviews.

[Details][phase-three]

### Phase 4: Tags (1 day)

Tags have a tagging id and a description. Taggings have many tags, restaurants have many taggings. JSON API should be able to return all tags and return all restaurants for a given tag. Nested under tag index, which is nested. JSON API should be nested underneath the restaurant tags.

[Details][phase-four]

### Phase 5: Reminders and Garbage Collection (1 day)

Phase 5 introduces two new features. First, users can set reminders on notes
which will at the time they are set for prompt the user to review and edit the
given note. In addition, I will implement a feature that asks users to review
notes once they reach a certain age and ask whether they should be kept,
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
