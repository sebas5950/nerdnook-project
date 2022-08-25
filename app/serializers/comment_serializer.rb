class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :post_id, :commentor, :avatar

  def commentor
    object.commentor.username
  end
  def avatar
    object.commentor.avatar
  end
end
