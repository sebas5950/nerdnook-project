Rails.application.routes.draw do
  resources :favorites, only: [ :create, :destroy ]
  resources :comments, only: [:create, :update, :destroy]
  resources :posts
  
  resources :users, only: [ :create, :show, :update ]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
