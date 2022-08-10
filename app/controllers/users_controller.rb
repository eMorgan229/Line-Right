class UsersController < ApplicationController
skip_before_action :authorize

#GET /users
def index
    users = User.all
    render json: users, status: :ok
end

#GET /me
def show
    user = User.find_by(id: session[:user_id])
        render json: user 
end


#POST /signup
def create
    user = User.create!(user_params)
    if user.valid?
        session[:user_id] = user.id
        render json: user, status: :ok
    else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
end

private
    def user_params
        params.permit(:username, :password, :password_confirmation, :name, :phone_number)
    end
end
