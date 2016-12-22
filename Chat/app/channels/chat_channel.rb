class ChatChannel < ApplicationCable::Channel
  def subscribed
  	 	# byebug
	stream_from "chat_channel"
  	end

  	 def receive(data)
  	 	# byebug
    ActionCable.server.broadcast("chat_channel", data)
  end
end
