class UsersController < ApplicationController

#GET /users
def index
    users = User.all
    render json: users
end

#POST /users
def create
    user = User.create(user_params)
    render json: user
end

private
    def user_params
        params.permit(:username, :password, :name, :phone_number)
    end
end
