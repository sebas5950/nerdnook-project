class User < ApplicationRecord
    has_many :authored_posts, class_name: "Post", foreign_key: :author_id, dependent: :delete_all

    has_many :comments, dependent: :delete_all
    has_many :commented_posts, through: :comments, source: :post

    has_many :favorites, dependent: :delete_all
    has_many :favorited_posts, through: :favorites, source: :post

    validates :username, uniqueness: true, presence: true
    validates :password, length: { in: 6..20 }

    has_secure_password
end


    # gives password=
    # password_confirmation=
    # authenticate