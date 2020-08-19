Rails.application.routes.draw do
  devise_for :users
  get 'toppages/index'
  root "toppages#index"
  resources :posts, only: [:index, :new, :create, :destroy]
end