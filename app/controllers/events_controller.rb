# frozen_string_literal: true

# app/controllers/events_controller.rb
class EventsController < ApplicationController
  def index
    request_params = params[:sports].split(',')
    puts request_params.to_s
    @events = Event.where(eventId: "2e7a01ec932b78b4b49203dad1246f5e")

    render json: @events
  end
end
