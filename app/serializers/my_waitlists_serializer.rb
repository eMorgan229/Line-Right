class MyWaitlistsSerializer < ActiveModel::Serializer
  attributes has_many :user_waitlists
end
