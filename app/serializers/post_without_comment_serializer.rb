class PostWithoutCommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :review, :genre

  has_many :favorites
end
