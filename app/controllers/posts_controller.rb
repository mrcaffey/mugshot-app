class PostsController < ApplicationController
  has_many :comments
  
  def index
    render json: Post.all
  end

  def show
    render json: Post.find(params[:id])

  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def destroy
    Post.find(params[:id]).destroy 
  end
end
