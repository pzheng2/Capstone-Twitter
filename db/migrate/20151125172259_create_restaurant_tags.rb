class CreateRestaurantTags < ActiveRecord::Migration
  def change
    create_table :restaurant_tags do |t|
      t.integer :restaurant_id, null: false
      t.string :category
    end
    remove_column :restaurants, :bar
    remove_column :restaurants, :american
    remove_column :restaurants, :italian
    remove_column :restaurants, :asian
    remove_column :restaurants, :spanish
  end

end
