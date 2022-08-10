class UserWaitlistsController < ApplicationController

#GET /my-waitlists
def show
    user = User.find_by(id: session[:user_id])
        render json: user, serializer: UserWaitlistsSerializer
end

end
