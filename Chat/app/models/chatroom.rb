class Chatroom < ApplicationRecord
  belongs_to :user
  has_many :posts
  validates :name, length: {
    maximum: 1,
    too_long: "Please choose a name that is only 1 word."
  }
end
