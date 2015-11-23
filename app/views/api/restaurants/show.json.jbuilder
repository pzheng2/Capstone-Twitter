json.id @restaurant.id
json.name @restaurant.name
json.address @restaurant.address
json.phone @restaurant.phone
json.latitude @restaurant.latitude
json.longitude @restaurant.longitude
json.image_url asset_path(@restaurant.image.url)
json.reviews @restaurant.reviews do |review|
  json.id review.id
  json.title review.title
  json.description review.description
  json.rating review.rating
  json.date review.date
  json.author review.author.username
end
