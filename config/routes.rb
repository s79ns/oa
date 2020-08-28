Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'registrations'
    passwords: 'registrations'
  }
  get 'toppages/index'
  root "toppages#index"
  resources :posts do
    resources :posts, only: [:index, :new, :create, :destroy, :edit, :update]
    collection do
      get 'search'
    end
  end
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users#new_guest'
  end
end