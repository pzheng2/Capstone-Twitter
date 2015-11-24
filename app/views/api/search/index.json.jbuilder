json.total_count @search_results.total_count

json.results do
  json.array! @search_results.map(&:searchable) do |result|
    if result.class == User
      json.partial! "api/restaurant/restaurant", restaurant: result
      json._type "Restaurant"
    # else
    #   json.partial! "api/posts/post", post: result
    #   json._type "Post"
    end
  end
end
