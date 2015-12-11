json.extract! restaurant, :id, :name, :address, :phone, :image, :categories, :rating
json.image_url asset_path(restaurant.image.url)
