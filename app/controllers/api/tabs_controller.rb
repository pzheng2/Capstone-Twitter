class Api::TabsController < ApplicationController

  # refactor maybe get all restaurants and then parse
  def index

    @tabsInfo = { bar: [], american: [], italian: [], asian: [], spanish: [], mexican: [] }

    @tabsInfo.keys.each do |category|
      @tabsInfo[category] = Restaurant.tabs_in_bounds(params[:bounds], category)
    end

  end

end
