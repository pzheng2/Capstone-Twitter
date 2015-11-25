class AddReviewIdToTags < ActiveRecord::Migration
  def change
    add_column :tags, :review_id, :integer
  end
end
