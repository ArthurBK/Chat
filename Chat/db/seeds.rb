# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Chatroom.destroy_all
Post.destroy_all
User.destroy_all
user_1 = User.create!(email: "test@test.com", name: "tutur", password: "okokok")
user_2 = User.create!(email: "user2@ok.ok", name: "user_2", password: "lalala")

one = Chatroom.create!(user_id: user_1.id, name: "general")
two = Chatroom.create!(user_id: user_2.id, name: "divers")
Post.create!(content: "hello", chatroom_id: one.id, user_id: user_1.id)
Post.create!(content: "hello world", chatroom_id: one.id, user_id: user_2.id)
Post.create!(content: "what up", chatroom_id: two.id, user_id: user_1.id)
Post.create!(content: "doc", chatroom_id: two.id, user_id: user_2.id)
