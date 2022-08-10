class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :like
  has_one :user
  has_one :post
end
