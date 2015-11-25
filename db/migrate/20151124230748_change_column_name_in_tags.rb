class ChangeColumnNameInTags < ActiveRecord::Migration
  def change
    remove_column :tags, :type
    add_column :tags, :category, :string
  end
end
