# frozen_string_literal: true

require_relative './external_api_service'
require_relative '../translators/events_translator'

# app/services/data_service.rb
class DataService
  def self.multi_sport_data(sport_list, first_uri, second_uri)
    raw_event_list = []
    sport_list.each do |sport_key|
      complete_uri = first_uri + sport_key + second_uri
      raw_data = ExternalApiService.get(complete_uri)
      raw_event_list += raw_data
    end
    raw_event_list
  end
end
