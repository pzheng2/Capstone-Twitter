class Restaurant < ActiveRecord::Base
  geocoded_by :address
  before_validation :geocode, :if => lambda{ |restaurant| restaurant.address_changed? }

  validates :name, :address, :phone, :longitude, :latitude, presence: true
  validates :address, uniqueness: true

  validates :phone, phone: { possible: true, allow_blank: true }

  has_attached_file :image, default_url: "no_image.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :reviews

  has_many :restaurant_tags

  def self.in_bounds(bounds)
    Restaurant.where(
      "(? > latitude) AND (latitude > ?) AND (? > longitude) AND (longitude > ?)",
      bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f,
      bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f
    )
  end

  # def categories
  #   categories = []
  #   categories.push("Bar") if bar
  #   categories.push("American") if american
  #   categories.push("Italian") if italian
  #   categories.push("Asian") if asian
  #   categories.push("Spanish") if spanish
  #
  #   categories
  # end

end
