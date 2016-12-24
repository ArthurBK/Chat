class ChatroomChannel < ApplicationCable::Channel
  def subscribed
  # byebug
	stream_from "chatroom_#{params[:chatroom]}_channel"
  	end

  	 def receive(data)
  	 	# byebug
    ActionCable.server.broadcast("chatroom_channel", data)
  end
end
