class CommentsController < ApplicationController
  belongs_to :post
  
  def index
    render json: Comment.all
  end

  def show
    render json: Comment.find(params[:id])
  end

  def create
    comment = Comment.new(comment_params)
    if post.save
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def destroy
    Comment.find(params[:id]).destroy
  end
end
