class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :image
      t.string :review
      t.string :genre
      t.integer :author_id

      t.timestamps
    end
  end
end
