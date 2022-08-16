class Post < ApplicationRecord
  belongs_to :author, class_name: "User"

  has_many :comments, dependent: :delete_all
  has_many :commentors, through: :comments, source: :commentor

  has_many :favorites, dependent: :delete_all
  has_many :favoritors, through: :favorites, source: :favoritor

  validates :genre, inclusion: { in: ["Movie", "Anime", "Manga", "Comic"] }
  validates :title, :image, :review,:genre, :author_id, presence: true

end
