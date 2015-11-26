# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Restaurant.create(name: 'Chipotle', address: "625 Broadway, New York, NY 10012", phone: "(164) 015-4879")
Restaurant.create(name: 'App Academy', address: "598 Broadway, New York, NY 10012", phone: "(176) 405-4879")
Restaurant.create(name: 'Lahore Deli', address: "132 Crosby St New York, NY 10012", phone: "(212) 965-1777")
Restaurant.create(name: 'Burger & Barrel', address: "25 W Houston St New York, NY 10012", phone: "(212) 334-7320")

RestaurantTag.create(restaurant_id: 1, category: "mexican")
RestaurantTag.create(restaurant_id: 3, category: "mexican")
RestaurantTag.create(restaurant_id: 4, category: "american")
