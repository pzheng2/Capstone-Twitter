class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    if !@review.save
      render json: @review.errors.full_messages, status: 400
      return
    end

    render json: @review
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: review
  end

  private

  def review_params
    params.require(:review).permit(:author_id, :restaurant_id, :title, :description, :rating)
  end

end
