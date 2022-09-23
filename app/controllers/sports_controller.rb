# frozen_string_literal: true

require_relative '../services/jobs_service'

# app/controllers/sports_controller.rb
class SportsController < ApplicationController
  def today
    sport_list = SportsService.commence_today
    render json: sport_list
  end

  def index
    sports = JobsService.odds_servicing
    render json: sports
  end
end
