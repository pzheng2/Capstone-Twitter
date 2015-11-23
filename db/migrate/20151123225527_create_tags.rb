class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.boolean :useful, default: false
      t.boolean :funny, default: false
      t.boolean :cool, default: false

      t.timestamps
    end
  end
end
