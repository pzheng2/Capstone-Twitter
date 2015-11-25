class Tag < ActiveRecord::Base
  validates :user_id, :review_id, :category, presence: true
  validates :category, :inclusion => ["useful", "funny", "cool"]

  belongs_to :review
  belongs_to :user

end
