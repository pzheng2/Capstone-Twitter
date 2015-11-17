class Restaurant < ActiveRecord::Base
  validates :name, :address, :phone, presence: true
  validates :phone, numericality: true,
            length: { minimum: 10, maximum: 11 }

  def self.in_bounds(bounds)
    Restaurant.where("(? > lat) AND (lat > ?) AND (? > lng) AND (lng > ?)",
    bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f,
    bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f)
  end

end
