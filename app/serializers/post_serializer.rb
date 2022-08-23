class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :review, :genre, :author_id

  has_many :comments
end
