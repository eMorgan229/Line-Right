class UserWaitlist < ApplicationRecord
    belongs_to :user
    belongs_to :waitlist
end
