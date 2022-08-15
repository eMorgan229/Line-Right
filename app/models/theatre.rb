class Theatre < ApplicationRecord
    has_many :waitlists
    has_many :users, through: :waitlists
end
