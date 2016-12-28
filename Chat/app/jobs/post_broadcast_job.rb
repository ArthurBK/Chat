class PostBroadcastJob < ApplicationJob
  queue_as :default

  def perform(post)
    # byebug
    chat_name = Chatroom.find_by_id(post.chatroom_id).name
    username = User.find_by_id(post.user_id).name
    ActionCable.server.broadcast "chatroom_#{chat_name}_channel",
                               content:  post.content,
                               name: username,
                               chat_name: chat_name
    # Do something later
  end
end
