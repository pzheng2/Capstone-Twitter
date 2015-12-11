json.extract! @restaurant, :id, :name, :address, :phone, :image, :categories, :rating
json.image_url asset_path(@restaurant.image.url)

json.reviews @restaurant.reviews do |review|
  json.id review.id
  json.title review.title
  json.description review.description
  json.rating review.rating
  json.date review.date
  json.author review.author.username
  json.tags review.tags
  json.numUsefulTags review.numUsefulTags
  json.numFunnyTags review.numFunnyTags
  json.numCoolTags review.numCoolTags
end
