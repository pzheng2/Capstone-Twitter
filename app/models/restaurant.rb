class Restaurant < ActiveRecord::Base
  validates :name, :address, :phone, presence: true
  validates :phone, numericality: true, length: { minimum: 10, :maximum: 11 }

end
