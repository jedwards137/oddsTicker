# frozen_string_literal: true

require 'httparty'

# app/services/external_api_service.rb
class ExternalApiService
  def self.get(uri)
    response = HTTParty.get(uri)
    response.parsed_response
  end
end
