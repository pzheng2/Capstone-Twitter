Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :restaurants, only: [:index, :create, :new, :show]
    resources :reviews, only: [:create, :destroy]
    resources :users, only: [:new, :create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  resources :users,   only: [:new, :create]
  resource  :session, only: [:new, :create, :destroy]
end
