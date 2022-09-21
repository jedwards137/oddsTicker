# frozen_string_literal: true

# config/routes.rb
Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :events
  # Defines the root path route ("/")
  # root "articles#index"

  get '/events/today' => 'events#show'
  get '/sports/today' => 'sports#today'
end
