Rails.application.routes.draw do
  get 'comments/index'
  get 'comments/show'
  get 'comments/new'
  get 'comments/destroy'
  get 'posts/index'
  get 'posts/show'
  get 'posts/new'
  get 'posts/destroy'
  resources :users, only: [:index, :update]
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :posts
  end

  #Do not place any routes below this one
  if Rails.env.production?
    get '*other', to: 'static#index'
  end
end
