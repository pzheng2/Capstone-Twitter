json.total_count @search_results.total_count

json.results do
  json.array! @search_results.map(&:searchable) do |result|
    json.partial! "api/restaurants/restaurant", restaurant: result

  end
end
