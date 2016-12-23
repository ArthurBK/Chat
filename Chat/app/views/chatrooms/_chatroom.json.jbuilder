json.extract! chatroom, :id, :user_id, :name, :created_at, :updated_at
json.url chatroom_url(chatroom, format: :json)