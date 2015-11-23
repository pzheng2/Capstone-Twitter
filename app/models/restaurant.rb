class Restaurant < ActiveRecord::Base
  geocoded_by :address
  before_validation :geocode, :if => lambda{ |restaurant| restaurant.address_changed? }

  validates :name, :address, :phone, :longitude, :latitude, presence: true
  validates :address, uniqueness: true
  validates :phone, numericality: true,
            length: { minimum: 10, maximum: 11 }

  has_many :reviews

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.in_bounds(bounds)
    Restaurant.where("(? > latitude) AND (latitude > ?) AND (? > longitude) AND (longitude > ?)",
    bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f,
    bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f)
  end

end
