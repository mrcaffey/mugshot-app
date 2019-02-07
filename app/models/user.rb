# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :posts
  has_many :comments
  mount_uploader :avatar, AvatarUploader
  u = User.new
  u.avatar = params[:file]
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
