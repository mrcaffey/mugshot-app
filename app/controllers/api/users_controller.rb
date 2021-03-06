class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]  
  skip_before_action :authenticate_user!, only: [:update, :show, :index]

  def index
    render json: User.all
  end

  def show
    render json: @user
  end

  def update
    if User.find(params[:id]).update(user_params)
      render json: User.find(params[:id])
    else
      render json: User.errors, status: 422
    end
  end

  def create
    post = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors, status: 422
    end
  end

    def destroy
      User.find(params[:id]).destroy
    end

    def update
      if User.find(params[:id]).update(user_params)
        render json: User.find(params[:id])
      else 
        render json: User.errors, status: 422
      end
    end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:avatar, :name, :email, :nickname)
  end
end
