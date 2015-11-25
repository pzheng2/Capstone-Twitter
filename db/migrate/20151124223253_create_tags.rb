class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :user_id, null: false
      t.boolean :useful, default: false
      t.boolean :funny, default: false
      t.boolean :cool, default: false

      t.timestamps
    end

    drop_table :useful_tags
    drop_table :funny_tags
    drop_table :cool_tags
  end
end
