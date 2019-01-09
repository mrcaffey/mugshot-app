class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    post = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors, status: 422
    end

    def destroy
      User.find(params[:id]).destroy
    end
  end
end
