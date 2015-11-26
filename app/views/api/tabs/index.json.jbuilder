@tabsInfo do |tag|
  json.array!(tag) do |restaurant|
    json.extract! restaurant, :id, :name, :address, :phone, :image, :categories
    json.image_url asset_path(restaurant.image.url)
  end
end
