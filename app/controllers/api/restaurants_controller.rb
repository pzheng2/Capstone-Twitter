class Api::RestaurantsController < ApplicationController

  def index
    if params[:bounds]
      @restaurants = Restaurant.in_bounds(params[:bounds])
    else
      @restaurants = Restaurant.all
    end
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render json: @restaurant
    else
      render json: @restaurant.errors.full_messages, status: 400
    end
  end

  def show
    @restaurant = Restaurant.find_by_id(params[:id])
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :phone)
  end

end
