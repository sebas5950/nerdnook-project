class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    before_action :authenticate_user
    include ActionController::Cookies

    def current_user
        # Memorization
       @current_user ||= User.find_by_id(session[:user_id]) 
    end


      private 

      def record_invalid(inv)
        render json: { errors: inv.record.errors.full_messages }, status: :unprocessable_entity
      end

      def record_not_found(inv)
        render json: {error: "#{inv.model} not found"}
      end

      #checks to see if someone is logged in
      def authenticate_user 
        render json: { errors: { User: 'Not Authorized' } }, status: :unauthorized unless current_user
      end

end
