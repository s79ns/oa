Rails.application.routes.draw do
  devise_for :users
  get 'toppages/index'
  root "toppages#index"
  post '/toppages/guest_sign_in', to: 'toppages#new_guest'
  resources :posts do
    resources :posts, only: [:index, :new, :create, :destroy, :edit, :update]
    collection do
      get 'search'
    end
  end
end