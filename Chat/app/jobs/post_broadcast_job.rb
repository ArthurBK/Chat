class PostBroadcastJob < ApplicationJob
  queue_as :default

  def perform(post)
    chat_name = Chatroom.find_by_id(post.chatroom_id).name
    # byebug
    username = User.find_by_id(post.user_id).name
    ActionCable.server.broadcast "chatroom_#{chat_name}_channel",
                               content:  post.content,
                               name: username
    # Do something later
  end
end
