class CreateFunnyTags < ActiveRecord::Migration
  def change
    create_table :funny_tags do |t|
      t.integer :review_id

      t.timestamps
    end
  end
end
