class UserWithFavoriteSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :bio
  has_many :favorites
end
