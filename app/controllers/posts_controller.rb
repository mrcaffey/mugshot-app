class PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])

  end

  def create
    post = Post.new(post_params)
    if vehicle.save
      render json: vehicle
    else
      render json: vehicle.errors, status: 422
    end
  end

  def destroy
    @post.destroy
  end
end
