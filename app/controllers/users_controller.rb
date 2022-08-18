class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :index]

    def show
        render json: current_user, status: :ok
    end

    def index
        render json: current_user, serializer: UserWithFavoriteSerializer
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
