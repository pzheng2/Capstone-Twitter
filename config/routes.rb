Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :search,       only: :index
    resource :session,      only: [:create, :destroy, :show]
    resources :users,       only: [:new, :create, :index, :show]
    resources :reviews,     only: [:create, :destroy]
    resources :restaurants, only: [:index, :create, :new, :show]
  end

  resources :users,   only: [:new, :create]
  resource  :session, only: [:new, :create, :destroy]
end
