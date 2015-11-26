Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session,          only: [:create, :destroy, :show]
    resources :tabs,            only: :index
    resources :tags,            only: [:create, :destroy]
    resources :users,           only: [:new, :create, :index, :show]
    resources :search,          only: :index
    resources :reviews,         only: [:create, :destroy]
    resources :restaurants,     only: [:index, :create, :new, :show]
    resources :restaurant_tags, only: :create
  end

  resources :users,   only: [:new, :create]
  resource  :session, only: [:new, :create, :destroy]
end
