class CommentsController < ApplicationController
    before_action :find_comment, only: [:destroy, :update]
    skip_before_action :authenticate_user, only: [:create, :destroy, :update]

    def create
        com = Comment.create!(comment_params)
        render json: com, status: :created
    end

    def destroy
        # if (current_user == params[:user_id])
             @comment.destroy
        head :no_content
        #  else
        #     render json: {error: "not current user "}
        # end
    end

        def update
            @comment.update!(comment_params)
            render json: @comment
        end
       
    private

    def find_comment
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:comment, :user_id, :post_id)
    end

end
