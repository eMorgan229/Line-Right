class UserWaitlistsController < ApplicationController
#GET /my-waitlists
def show
    myWaitlists = UserWaitlist.where(user_id: session[:user_id])
        render myWaitlists

    #with the user
    # user = User.find_by(id: session[:user_id])
    #     render json: user, serializer: UserWaitlistsSerializer
end



#POST /my-waitlists
def create
    user_waitlist = UserWaitlist.create!(user_waitlist_params)

    if user_waitlist.save!
        render json: user_waitlist, status: :created
    else
        render json: user_waitlist.errors, status: :unprocessable_entity
    end
end

private
def user_waitlist_params
    params.permit(:user_id, :waitlist_id)
end

end
