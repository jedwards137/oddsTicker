# frozen_string_literal: true

require_relative './sports_service'
require_relative './data_service'
require_relative './events_service'

# /services/jobs_service.rb
class JobsService
  def self.odds_servicing
    sport_list = SportsService.active
    first_uri = 'https://api.the-odds-api.com/v4/sports/'
    second_uri = '/odds/?apiKey=0da268f822ff873174a41e556e2c9c4e&regions=us&markets=h2h'
    raw_event_list = DataService.multi_sport_data(sport_list, first_uri, second_uri)
    EventsService.batch_upsert_odds(raw_event_list)
  end

  def self.score_servicing
    sport_list = SportsService.live
    first_uri = 'https://api.the-odds-api.com/v4/sports/'
    second_uri = '/scores/?apiKey=0da268f822ff873174a41e556e2c9c4e&daysFrom=2'
    raw_event_list = DataService.multi_sport_data(sport_list, first_uri, second_uri)
    EventsService.batch_upsert_scores(raw_event_list)
  end
end
