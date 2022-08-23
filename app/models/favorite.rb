class Favorite < ApplicationRecord

  belongs_to :favoritor, class_name: "User", foreign_key: :user_id
  belongs_to :post

  validates :post_id, uniqueness: { scope: :user_id }
end
