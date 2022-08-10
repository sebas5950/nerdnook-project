class ApplicationController < ActionController::API
    before_action :authenticate_user
    include ActionController::Cookies

    def current_user
        # Memorization
       @current_user ||= User.find_by_id(session[:user_id]) 
    end


      private 

      #checks to see if someone is logged in
      def authenticate_user 
        render json: { errors: { User: 'Not Authorized' } }, status: :unauthorized unless current_user
      end

end
