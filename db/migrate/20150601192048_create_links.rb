class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :long
      t.string :short
      t.timestamps null: false
    end
  end
end
