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
      # errors = @restaurant.errors.messages
      # if @restaurant.errors.messages.keys.include?(:latitude)
      #   errors.delete(:latitude)
      #   errors.delete(:longitude)
      #   errors.delete(:address)
      #   errors[:address] = "is invalid"
      # end
      # full_messages = []
      # errors.keys.each do |key|
      #   full_messages.push(key.to_s + " " + errors[key])
      # end
      render json: @restaurant.errors.full_messages, status: 400
    end
  end

  def full_messages(hash)

  end

  def show
    @restaurant = Restaurant.find_by_id(params[:id])
  end

  private
  def restaurant_params
    params
    .require(:restaurant)
    .permit(:name, :address, :phone, :image)
  end

end
