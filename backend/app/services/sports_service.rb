# frozen_string_literal: true

require_relative './external_api_service'

# app/services/sports_Service.rb
class SportsService
  def self.commence_today
    today = DateTime.now.utc.midnight + 4*60*60
    event_list = Event.where(:commence_time.gte => today,
                             :commence_time.lte => today.tomorrow)
    event_list = event_list.uniq { |event| event[:sportKey] }
    event_list.map do |event|
      {
        sport_key: event[:sport_key],
        sport_title: event[:sport_title]
      }
    end
  end

  def self.active
    supported_sport_list = %w[baseball_mlb americanfootball_nfl americanfootball_ncaaf]
    uri = 'https://api.the-odds-api.com/v4/sports?apiKey=0da268f822ff873174a41e556e2c9c4e'
    raw_active_sport_list = ExternalApiService.get(uri)
    raw_active_sport_list.select(&->(sport) { supported_sport_list.include? sport['key'] }).pluck('key')
  end

  def self.live
    now = DateTime.now.utc
    Event.where(:commence_time.lte => now,
                :completed => false).distinct('sport_key')
  end
end
