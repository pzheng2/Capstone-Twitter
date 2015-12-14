# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

restaurantTags = ["bar", "american", "italian", "asian", "spanish", "mexican"]

User.create(username: "peter", password: "peterpeter")
User.create(username: "jimmy", password: "jimmyjimmy")

Restaurant.create(name: 'Chipotle', address: "625 Broadway, New York, NY 10012", phone: "(164) 015-4879", image: File.open("app/assets/images/chipotle-bow.jpg"))
(10..35).each do |num|
  Restaurant.create(name: num.to_s, address: num.to_s + " Broadway, New York, NY 10012", phone: "(164) 015-48" + num.to_s, image: File.open("app/assets/images/chipotle-bow.jpg"))
  RestaurantTag.create(restaurant_id: num-9, category: restaurantTags[num % 6])
end

Restaurant.create(name: 'App Academy', address: "598 Broadway, New York, NY 10012", phone: "(176) 405-4879", image: File.open("app/assets/images/aa.png"))
Restaurant.create(name: 'Lahore Deli', address: "132 Crosby St New York, NY 10012", phone: "(212) 965-1777", image: File.open("app/assets/images/indian.jpeg"))
Restaurant.create(name: 'Burger & Barrel', address: "25 W Houston St New York, NY 10012", phone: "(212) 334-7320", image: File.open("app/assets/images/bacon-cheddar-burger.jpg"))


RestaurantTag.create(restaurant_id: 1, category: "mexican")
RestaurantTag.create(restaurant_id: 3, category: "mexican")
RestaurantTag.create(restaurant_id: 4, category: "american")

Review.create(restaurant_id: 1, author_id: 1, title: "review 1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", rating: 5)
Review.create(restaurant_id: 1, author_id: 2, title: "review 2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", rating: 4)
Review.create(restaurant_id: 2, author_id: 1, title: "review", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", rating: 3)
