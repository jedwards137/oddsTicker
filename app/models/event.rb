# frozen_string_literal: true

# app/models/event.rb
class Event
  include Mongoid::Document

  field :_id, type: String
  field :eventId, type: String
  field :sportKey, type: String
  field :completed, type: Boolean
  field :commenceTime, type: String
  field :homeTeam, type: String
  field :awayTeam, type: String
end
