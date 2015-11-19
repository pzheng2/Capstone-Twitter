class Api::ReviewsController < ApplicationController

  def create
    current_user_id = current_user.id
    @review = Review.new(author_id: current_user_id, review_params)
    if !@review.save
      flash.now[:errors] = @review.errors.full_messages
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
    params.permit(:review).require(:title, :description, :rating)
  end

end
