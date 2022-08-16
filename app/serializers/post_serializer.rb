class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :review, :genre

  has_many :comments
end
