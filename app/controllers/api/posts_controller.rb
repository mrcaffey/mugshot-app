class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :destroy]

  def index
    render json: Post.order(created_at: :desc)
  end

  def show
    render json: @post
  end

  def destroy
    @post.destroy
  end

  def update
    if Post.find(params[:id]).update(post_params)
      render json: Post.find(params[:id])
    else
      render json: Post.errors, status: 422
    end
  end

  def create
    post = Post.create(post_params)

    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_post
    @post = current_user.posts.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:body, :likes, :dislikes, :user_id)
  end
end
