Rails.application.routes.draw do
  get 'games/index'
  root "performance#index"
  get 'toppages/index'
  get 'performance/index'
  get 'likes/create'
  get 'likes/destroy'
  devise_for :users, controllers: {
    registrations: 'registrations',
    passwords: 'passwords'
  }
  resources :posts do
    resources :posts, only: [:index, :new, :create, :destroy, :edit, :update]
    resources :likes, only: [:create, :destroy]
  end
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users#new_guest'
  end
end