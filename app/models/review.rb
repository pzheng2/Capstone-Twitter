class Review < ActiveRecord::Base
  validates :author_id, :restaurant_id, :title, :rating, presence: true
  validates :rating, :inclusion => 1..5

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  belongs_to :restaurant
  has_many :tags

  def date
    Date.strptime(created_at.to_s)
  end

  def numUsefulTags
    tags.where(category: "useful").count
  end

  def numFunnyTags
    tags.where(category: "funny").count
  end

  def numCoolTags
    tags.where(category: "cool").count
  end

end
