class Api::TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render json: { status: "success" }
    else
      render json: @tag.errors.full_messages, status: 400
    end

  end

  def destroy
    @tag = Tag.find_by_id(params[:id])

    if @tag.destroy
      render json: { status: "success" }
    else
      render json: @tag.errors.full_messages, status: 400
    end

  end

  private
  def tag_params
    params.require(:tag).permit(:user_id, :review_id, :category)
  end

end
