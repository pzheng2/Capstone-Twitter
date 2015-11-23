class ChangePhoneType < ActiveRecord::Migration
  def up
    change_column :restaurants, :phone, :string
  end

  def down
    change_column :restaurants, :phone, :int
  end
end
