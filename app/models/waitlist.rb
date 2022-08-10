class Waitlist < ApplicationRecord
    has_many :user_waitlists
    has_many :users, through: :user_waitlists
end
