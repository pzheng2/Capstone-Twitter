class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many(
    :reviews,
    class_name: "Review",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many :tags

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def num_reviews
    reviews.count
  end

  def num_reviews_rating
    ratings = { 1 => [], 2=> [], 3 => [], 4 => [], 5 => [] }
    ratings.keys.each do |rating|
      ratings[rating] = reviews.where("rating = ?", rating).count
    end

    ratings
  end
  def num_tags

    tags.count
  end

  def num_tags_category
    categories = { "useful" => [], "funny" => [], "cool" => [] }
    categories.keys.each do |category|
      categories[category] = tags.where("category = ?", category).count
    end

    categories
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
