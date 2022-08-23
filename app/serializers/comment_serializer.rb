class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :post_id, :commentor

  def commentor
    object.commentor.username
  end
end
