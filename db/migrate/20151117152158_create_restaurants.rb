class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :address, null: false
      t.integer :phone, null: false

      t.timestamps
    end
  end
end
