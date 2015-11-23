class AddAttachmentToRestaurants < ActiveRecord::Migration
  def change
    add_attachment :restaurants, :image
  end
end
