# frozen_string_literal: true

require_relative '../translators/events_translator'

# app/services/events_service.rb
class EventsService
  def self.sports_aggregates_today(sport_list)
    today = DateTime.now.utc.midnight
    event_list = Event.where(:sportKey.in => sport_list,
                             :commenceTime.gte => today,
                             :commenceTime.lte => today.tomorrow)
                      .sort({ commenceTime: 'asc' })
    EventsTranslator.group_by_sport(event_list)
  end

  def self.active_sports_today
    # today = DateTime.now.utc.midnight
    event_list = Event.all
    event_list = event_list.uniq { |event| event[:sportKey] }
    event_list.map do |event|
      {
        sport_key: event[:sportKey],
        sport_title: event[:sportTitle]
      }
    end
  end
end
