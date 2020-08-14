Rails.application.routes.draw do
  get 'toppages/index'
  root "toppages#index"
end