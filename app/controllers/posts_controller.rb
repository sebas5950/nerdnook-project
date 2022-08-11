class PostsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index]

    def index
        render json: Post.all.order(created_at: :desc), status: :ok
    end

end
