# json.array!(@restaurants) do |restaurant|
#   json.partial!('api/restaurant', restaurant: restaurant)
# end
json.array!(@restaurants) do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
  json.address restaurant.address
  json.phone restaurant.phone
  json.latitude restaurant.latitude
  json.longitude restaurant.longitude
  json.reviews restaurant.reviews do |review|
    json.title review.title
    json.description review.description
    json.rating review.rating
    json.date review.date
    json.author review.author.username
  end
end
