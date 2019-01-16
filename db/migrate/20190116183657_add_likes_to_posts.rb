class AddLikesToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :likes, :bigint
    add_column :posts, :dislikes, :bigint
  end
end
