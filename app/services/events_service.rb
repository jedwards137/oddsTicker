# frozen_string_literal: true

# app/services/events_service.rb
class EventsService
  def self.get_events_for_sports(sport_list)
    events = []
    sport_list.each do |sport_key|
      events_for_sport = get_events_for_sport(sport_key)
      puts events_for_sport
    end
  end

  private

  def get_events_for_sport(sport_key)
    events_for_sport = Event.find({ sportKey: sport_key })
    puts events_for_sport
  end
end
