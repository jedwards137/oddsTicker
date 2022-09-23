# frozen_string_literal: true

# app/translators/events_translator.rb
class EventsTranslator
  def self.group_by_sport(event_list)
    sport_aggregates_list = {}
    event_list.each do |event_entity|
      sport_key = event_entity[:sport_key]
      sport_found = sport_aggregates_list.key?(sport_key)
      unless sport_found
        sport_aggregates_list[sport_key] = {
          sport_title: event_entity[:sport_title],
          events: []
        }
      end
      sport_aggregates_list[sport_key][:events].push(event_entity)
    end
    sport_aggregates_list
  end
end
