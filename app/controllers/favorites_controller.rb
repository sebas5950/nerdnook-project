class FavoritesController < ApplicationController


    def index
        render json: Favorite.all.order(created_at: :desc), status: :ok
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite
    end

    def destroy
        fav = Favorite.find(params[:id])
        fav.destroy
        head :no_content
    end

    private


    def favorite_params
        params.permit(:like, :user_id, :post_id)
    end

end
