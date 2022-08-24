class WaitlistsController < ApplicationController

    # @current_user = User.find(session[:user_id])
    # user_id = @current_user.id

#GET /my-waitlists
def show
    # myWaitlists = Waitlist.where(user_id: session[:user_id])
    #     render myWaitlists

    #with the user
waitlists = Theatre.joins(:waitlists).where(waitlists: {user_id: session[:user_id], time_out: nil})
    render json: waitlists.order("wait_time ASC")
end

#GET /place_in_line
def show_place_in_line
    user_id_hard_coded = session[:user_id]

    waitlists = Theatre.joins(:waitlists).where(waitlists: {user_id: user_id_hard_coded, time_out: nil})
    theatre_ids = waitlists.map {|w| w.id }
        # people_in_line = Waitlist.select { |w| theatre_ids.include?(w.theatre_id) }
        results = {}
        theatre_ids.each { |t| 
            people_in_line = Waitlist.where(theatre_id: t).order("created_at ASC").select("user_id")
            
            only_user_ids = people_in_line.map{ |p| p.user_id}
            place_in_line = only_user_ids.find_index(user_id_hard_coded) + 1
            p place_in_line 

            wait_time = Theatre.find_by(id: t).wait_time
            results[t] = { "place_in_line" => place_in_line, "est_wait_time" => place_in_line * wait_time}

        }
    render json: results
end

#GET /full_waitime
def wait_time
    waitlists = Theatre.joins(:waitlists).where(waitlists: {time_out: nil})
    theatre_ids = waitlists.map {|w| w.id}

    full_results = {}

    theatre_ids.each { |t| 
        full_people_in_line = Waitlist.where(theatre_id: t).order("created_at ASC").select("user_id")
        full_results[t] = {"full_est_wait_time" => full_people_in_line.count * 5}
    }
    
    render json: full_results

end


#GET /shortest_wait_time
def shortest_wait_time
    waitlists = Theatre.joins(:waitlists).where(waitlists: {user_id: session[:user_id], time_out: nil})
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
    # Waitlist.find(params[:theatre_id])
    render json: waitlist
end

def get_line_count
    line_count = Waitlist.where(time_out: nil).group("theatre_id").count

    render json: line_count
end

#GET /session-user
def find_user_id
    user = User.find(session[:user_id])
    render json: user
end


private
def waitlist_params
    params.permit(:user_id, :theatre_id, :time_out)
end

end
