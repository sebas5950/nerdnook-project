class SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: [:create, :destroy]

  # POST
  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else 
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end

  end

  # DELETE
  def destroy
    session.delete(:user_id) # Logs user out
    head :no_content
  end

end
