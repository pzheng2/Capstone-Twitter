class Review < ActiveRecord::Base
  validates :author_id, :restaurant_id, :title, :rating, presence: true
  validates :rating, :inclusion => 1..10

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  belongs_to :restaurant

end
