class Post < ApplicationRecord
  after_create_commit { PostBroadcastJob.perform_later self}
  belongs_to :chatroom
  # belongs_to :user
end
