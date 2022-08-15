class CreateWaitlists < ActiveRecord::Migration[6.1]
  def change
    create_table :waitlists do |t|
      t.integer :user_id
      t.integer :theatre_id
      t.datetime :time_out

      t.timestamps
    end
  end
end
