class CreateUsefulTag < ActiveRecord::Migration
  def change
    create_table :useful_tags do |t|
      t.integer :review_id

      t.timestamps
    end
  end
end
