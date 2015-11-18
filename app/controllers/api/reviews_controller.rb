class Api::ReviewsController < Appplication Controller

  def create
    @review = Review.new(review_params)
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
