class PostsController < ApplicationController
    before_action :find_posts, only: [:update, :show, :destroy]
    skip_before_action :authenticate_user, only: [:index, :show]


    def index
        render json: Post.all.order(created_at: :desc), status: :ok
    end

    def show
        render json: @post
    end

    def create
        post = Post.create!(strong_params)
        render json: post, status: :created
    end

    def destroy
        @post.destroy
        head :no_content
    end
    
    def update
        @post.update!(strong_params)
        render json: @post
    end

    private

    def find_posts
        @post = Post.find(params[:id])
    end

    def strong_params
        params.permit(:title, :genre, :image, :review, :author_id)
    end

end
