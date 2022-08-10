class WaitlistsController < ApplicationController

#GET /waitlists
def index
    render json: Waitlist.all, status: :ok
end
end
