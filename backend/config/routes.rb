# frozen_string_literal: true

# config/routes.rb
Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :events
  # Defines the root path route ("/")
  # root "articles#index"

  get '/api/events/today' => 'events#show'
  get '/api/sports/today' => 'sports#today'
  get '/api/sports' => 'sports#index'
end
