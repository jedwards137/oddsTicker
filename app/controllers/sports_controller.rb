# frozen_string_literal: true

require_relative '../services/events_service'

# app/controllers/sports_controller.rb
class SportsController < ApplicationController
  def today
    sport_list = EventsService.active_sports_today
    render json: sport_list
  end
end
