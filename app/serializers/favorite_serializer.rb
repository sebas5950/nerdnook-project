class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :like, :user_id, :post_id, :favorited_posts

  def favorited_posts
    object.post
  end
end
