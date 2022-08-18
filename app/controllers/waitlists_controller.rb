class WaitlistsController < ApplicationController
#GET /my-waitlists
def show
    # myWaitlists = Waitlist.where(user_id: session[:user_id])
    #     render myWaitlists

    #with the user
waitlists = Theatre.joins(:waitlists).where(waitlists: {user_id: 10, time_out: nil})
    render json: waitlists.order("wait_time ASC")
end

#GET /shortest_wait_time
def shortest_wait_time
    waitlists = Theatre.joins(:waitlists).where(waitlists: {user_id: 10, time_out: nil})
    render json: waitlists.order("wait_time ASC").first

end

#PATCH /remove-from-line/:id
def remove_from_line
    p "I was updated"
    waitlist = Waitlist.find_by(id: params[:id])
        if waitlist
            waitlist.update(time_out: DateTime.now)
            render json: waitlist
        else
            render json: { error: "Waitlist not found"}, status: :not_found
        end
end

#POST /my-waitlists
def create
    waitlist = Waitlist.create!(waitlist_params)

    if waitlist.save!
        render json: waitlist, status: :created
    else
        render json: waitlist.errors, status: :unprocessable_entity
    end
end
#GET "/waitlists" for now, but will be: the url params :theatre_id is being weird /waitlists/:theatre_id
# ** for now it's hard coded to reutrn the number 1 
def update_line_count
    waitlist = Waitlist.where(time_out: nil).group("theatre_id").count
    # Waitlist.find(params[:theatre_id])
    render json: waitlist
end

private
def waitlist_params
    params.permit(:user_id, :theatre_id, :time_out)
end

end
