Rails.application.routes.draw do
  get 'customers/index'

  devise_for :users
  root 'dashboard#index'
  resources :customers, only:[ :index ]

  get "angular_test", to: "angular_test#index"
end
