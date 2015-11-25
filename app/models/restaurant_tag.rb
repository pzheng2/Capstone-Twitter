class RestaurantTag < ActiveRecord::Base
  validates :restaurant_id, presence: true
  validates :category, :inclusion => ["bar", "american", "italian", "asian", "spanish", "mexican"]

  belongs_to :restaurant

end
