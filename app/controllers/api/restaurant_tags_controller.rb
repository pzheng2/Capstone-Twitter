class Api::RestaurantTagsController < ApplicationController

  def create
    @restaurant_tag = RestaurantTag.new(restaurant_tag_params)

    if @restaurant_tag.save
      render json: { status: "success" }
    else
      render json: @restaurant_tag.errors.full_messages, status: 400
    end

  end

  private

  def restaurant_tag_params
    params.require(:restaurant_tag).permit(:restaurant_id, :category)
  end

end
