# frozen_string_literal: true

require_relative '../translators/events_translator'

# app/services/events_service.rb
class EventsService
  def self.sport_aggregates_today(sport_key_list)
    today = DateTime.now.utc.midnight + 4*60*60
    event_list = Event.where(:sport_key.in => sport_key_list,
                             :commence_time.gte => today,
                             :commence_time.lte => today.tomorrow)
                      .sort({ commence_time: 'asc' })
    EventsTranslator.group_by_sport(event_list)
  end

  def self.batch_upsert_odds(raw_event_list)
    raw_event_list.each do |raw_event|
      db_event_exists = Event.where(:event_id => raw_event['id']).exists?
      commence_time = DateTime.iso8601(raw_event['commence_time'])
      if db_event_exists
        db_event = Event.where(:event_id => raw_event['id'])
        db_event.update(:bookmakers => raw_event['bookmakers'])
      else
        Event.create(:event_id => raw_event['id'],
                     :home_team => raw_event['home_team'],
                     :away_team => raw_event['away_team'],
                     :sport_key => raw_event['sport_key'],
                     :sport_title => raw_event['sport_title'],
                     :commence_time => commence_time,
                     :bookmakers => raw_event['bookmakers'])
      end
    end
  end

  def self.batch_upsert_scores(raw_event_list)
    raw_event_list.each do |raw_event|
      if raw_event['scores'] != nil
        e = Event.where(:event_id => raw_event['id'])
        e.update(:scores => raw_event['scores'],
                 :completed => raw_event['completed'])
      end
    end
  end
end
