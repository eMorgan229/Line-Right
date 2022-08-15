class CreateTheatres < ActiveRecord::Migration[6.1]
  def change
    create_table :theatres do |t|
      t.string :show_name
      t.string :theatre_name
      t.decimal :theatre_longitude
      t.decimal :theatre_latitude
      t.string :image
      t.integer :wait_time

      t.timestamps
    end
  end
end
