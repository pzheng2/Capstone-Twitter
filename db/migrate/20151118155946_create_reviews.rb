class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :restaurant_id, null: false
      t.string :title, null: false
      t.text :description
      t.integer :rating, null: false

      t.timestamps
    end

    add_index :reviews, :author_id
  end
end
