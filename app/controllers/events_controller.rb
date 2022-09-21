# frozen_string_literal: true

require_relative '../services/events_service'

# app/controllers/events_controller.rb
class EventsController < ApplicationController
  def index
    sports_param = params[:sports].split(',')
    puts sports_param.to_s
    EventsService.get_events_for_sports(sports_param)

    render json: @events
  end
end
