class Api::TabsController < ApplicationController

  # refactor maybe get all restaurants and then parse
  def index
    @tabsInfo = { bar: [], american: [], italian: [], asian: [], spanish: [], mexican: [] }
    @tabsInfo.keys.each do |category|
      RestaurantTag.where(category: category).each do |tag|
        restaurant = tag.restaurant
        # restaurant["categories"] = restaurant.categories
        @tabsInfo[category].push(restaurant)
      end
    end

    render json: @tabsInfo
  end

end
