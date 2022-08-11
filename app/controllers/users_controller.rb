class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create]

    def show
        # user = User.find_by(id: session[:user_id])
        render json: current_user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id # rembering who user is
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
        
    end

    def update
       current_user.update!(user_params)
       render json: current_user
    end

    private

  

def user_params
    params.permit(:username, :bio, :password, :avatar)
end

end
