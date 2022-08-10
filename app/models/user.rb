class User < ApplicationRecord
    has_many :posts
    has_many :favorites, through: :posts
    has_many :comments, through: :posts

    validates :username, uniqueness: true, presence: true

    has_secure_password
end


    # gives password=
    # password_confirmation=
    # authenticate