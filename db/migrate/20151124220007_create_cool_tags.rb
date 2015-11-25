class CreateCoolTags < ActiveRecord::Migration
  def change
    create_table :cool_tags do |t|
      t.integer :review_id

      t.timestamps
    end
  end
end
