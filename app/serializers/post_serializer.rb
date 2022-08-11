class PostSerializer < ActiveModel::Serializer
  attributes :author_id, :title, :image, :review, :genre

  has_many :comments
end
