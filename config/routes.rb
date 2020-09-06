Rails.application.routes.draw do
  get 'likes/create'
  get 'likes/destroy'
  devise_for :users, controllers: {
    registrations: 'registrations',
    passwords: 'passwords'
  }
  get 'toppages/index'
  root "toppages#index"
  resources :posts do
    resources :posts, only: [:index, :new, :create, :destroy, :edit, :update]
  end
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users#new_guest'
  end
end