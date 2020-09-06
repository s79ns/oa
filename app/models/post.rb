class Post < ApplicationRecord
  validates :name, presence: true
  validates :text, presence: true
  belongs_to :user
  has_many :likes, dependent: :destroy
end