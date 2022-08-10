# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_10_013804) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "user_waitlists", force: :cascade do |t|
    t.integer "user_id"
    t.integer "waitlist_id"
    t.datetime "time_in"
    t.datetime "time_out"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.string "phone_number"
    t.decimal "user_latitude"
    t.decimal "user_longitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "waitlists", force: :cascade do |t|
    t.string "show_name"
    t.string "theatre_name"
    t.string "image"
    t.integer "line_count"
    t.integer "wait_time"
    t.decimal "theatre_latitude"
    t.decimal "theatre_longitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
