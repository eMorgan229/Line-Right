class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :name
      t.string :phone_number
      t.decimal :user_latitude
      t.decimal :user_longitude

      t.timestamps
    end
  end
end
