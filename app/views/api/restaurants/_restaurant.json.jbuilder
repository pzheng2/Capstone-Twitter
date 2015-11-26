json.extract! restaurant, :id, :name, :address, :phone, :image, :categories
json.image_url asset_path(restaurant.image.url)
