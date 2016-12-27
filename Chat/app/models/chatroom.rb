class Chatroom < ApplicationRecord
  belongs_to :user
  has_many :posts
  validates :name, format: { with: /\A[a-zA-Z0-9]+\Z/ }
end
