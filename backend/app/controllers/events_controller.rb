# frozen_string_literal: true

require_relative '../services/events_service'

# app/controllers/events_controller.rb
class EventsController < ApplicationController
  def show
    sports_param = params[:sports].split(',')
    sport_aggregates_list = EventsService.sport_aggregates_today(sports_param)
    render json: sport_aggregates_list
  end
end
