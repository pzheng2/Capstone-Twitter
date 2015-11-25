class AddCategoriesToRestaurants < ActiveRecord::Migration
  def change

    add_column :restaurants, :bar, :boolean, default: false
    add_column :restaurants, :american, :boolean, default: false
    add_column :restaurants, :italian, :boolean, default: false
    add_column :restaurants, :asian, :boolean, default: false
    add_column :restaurants, :spanish, :boolean, default: false
    
  end
end
