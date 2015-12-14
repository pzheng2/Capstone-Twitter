json.array!(@tabsInfo) do |category, restaurants|
  json.array!(restaurants) do |restaurant|
    json.extract! restaurant, :id, :name, :address, :phone, :image, :categories, :rating
    json.image_url asset_path(restaurant.image.url)
  end
end
