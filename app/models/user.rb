class User < ApplicationRecord
    has_many :waitlists
    has_many :theatres, through: :waitlists
     has_secure_password
end
