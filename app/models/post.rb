class Post < ApplicationRecord
  belongs_to :user
  has_many :favorites
  has_many :comments

  validates :genre, inclusion: { in: ["Movie", "Anime", "Manga", "Comic"] }
end
