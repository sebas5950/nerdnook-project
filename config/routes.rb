Rails.application.routes.draw do
  resources :favorites
  resources :comments
  resources :posts
  
  resources :users, only: [ :create, :show ]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
