class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :review, :genre
  has_one :user
end
