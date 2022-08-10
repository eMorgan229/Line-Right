class CreateUserWaitlists < ActiveRecord::Migration[6.1]
  def change
    create_table :user_waitlists do |t|
      t.integer :user_id
      t.integer :waitlist_id
      t.datetime :time_in
      t.datetime :time_out

      t.timestamps
    end
  end
end
