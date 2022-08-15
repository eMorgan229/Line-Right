class TheatresController < ApplicationController


#GET /theatres
def index
    render json: Theatre.all, status: :ok
end

end
