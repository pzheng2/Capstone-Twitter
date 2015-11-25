class AddUserIdToTags < ActiveRecord::Migration
  def change
    add_column :useful_tags, :user_id, :integer
    add_column :funny_tags, :user_id, :integer
    add_column :cool_tags, :user_id, :integer
  end
end
