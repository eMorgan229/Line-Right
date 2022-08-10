class CreateWaitlists < ActiveRecord::Migration[6.1]
  def change
    create_table :waitlists do |t|
      t.string :show_name
      t.string :theatre_name
      t.string :image
      t.integer :line_count
      t.integer :wait_time
      t.decimal :theatre_latitude
      t.decimal :theatre_longitude

      t.timestamps
    end
  end
end
