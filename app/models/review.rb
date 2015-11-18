class Review < ActiveRecord::Base
  validates :author_id, :restaurant_id, :title, :rating, :date, presence: true
  validates :rating, :inclusion => 1..10

end
