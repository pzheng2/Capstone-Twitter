class Restaurant < ActiveRecord::Base
  include PgSearch

  multisearchable :against => [:name, :address]
  # ,:if => in_bounds

  pg_search_scope :category_search, :associated_against => {
    :restaurant_tags => :category
  }

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

  def self.tabs_in_bounds(bounds, category)
    Restaurant.joins(:restaurant_tags).where(
      "(? > latitude) AND (latitude > ?) AND (? > longitude) AND (longitude > ?) AND (category = ?)",
      bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f,
      bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f,
      category
    )
  end

  def categories
    tags = restaurant_tags.map do |tag|
      tag.category
    end

    tags
  end

  def rating
    unless reviews.empty?
      ratings = reviews.map {|review| review.rating}
      rating = (ratings.reduce(:+).to_f/ratings.length)
      rating_half_rounded = ((rating * 2).round) / 2.0
    else
      return 0
    end
    rating_half_rounded
  end

end
