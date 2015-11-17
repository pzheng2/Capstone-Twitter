class Restaurant < ActiveRecord::Base
  validates :name, :address, :phone, presence: true
  validates :phone, numericality: true,
            length: { minimum: 10, maximum: 11 }

  attr_reader :address

  geocoded_by :address
  after_validation :geocode

  def self.in_bounds(bounds)
    debugger
    Restaurant.where("(? > latitude) AND (latitude > ?) AND (? > longitude) AND (longitude > ?)",
    bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f,
    bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f)
  end

end
