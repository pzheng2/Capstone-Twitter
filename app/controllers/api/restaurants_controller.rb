class Api::RestaurantsController < ApplicationController

  def index
    if params[:bounds]
      @restaurants = Restaurant.in_bounds(params[:bounds])
    else
      @restaurants = Restaurant.all
    end
    render json: @restaurants
  end

  def create
    @restaurant = Restaurant.create!(restaurant_params)
    render json: @restaurant
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :phone)
  end

end
