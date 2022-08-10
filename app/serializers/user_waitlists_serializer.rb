class UserWaitlistsSerializer < ActiveModel::Serializer
  attributes :name
  has_many :user_waitlists
end
