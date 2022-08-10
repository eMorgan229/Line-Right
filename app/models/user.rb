class User < ApplicationRecord
    has_many :user_waitlists
    has_many :waitlists, through: :user_waitlists
     has_secure_password
end
