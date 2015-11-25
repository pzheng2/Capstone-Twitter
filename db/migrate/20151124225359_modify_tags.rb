class ModifyTags < ActiveRecord::Migration
  def change
    remove_column :tags, :useful
    remove_column :tags, :funny
    remove_column :tags, :cool
    add_column :tags, :type, :string
  end
end
