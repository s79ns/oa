class AddUserIdToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :user_id, :references, null: false, foreign_key: true
  end
end
