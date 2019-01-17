class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    render json: User.all
  end

  def show
    render json: @user
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

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit_all_parameters
  end
end
