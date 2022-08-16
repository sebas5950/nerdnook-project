class PostWithoutCommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :review, :genre

end
