# frozen_string_literal: true

# app/models/event.rb
class Event
  include Mongoid::Document

  field :event_id, type: String
  field :sport_key, type: String
  field :sport_title, type: String
  field :completed, type: Boolean
  field :commence_time, type: DateTime
  field :home_team, type: String
  field :away_team, type: String
  field :bookmakers, type: Array
  field :scores, type: Array
end
