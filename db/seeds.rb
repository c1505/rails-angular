# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(email: email@email.com, password: 'password')
5.times do
  User.create(email: Faker::Internet.email, password: 'password')
end
5.times do
  title = Faker::App.name
  description = Faker::Hipster.paragraph(3)
  ticket = Ticket.create(title: title, description: description, status: "completed", category: "bug")
  ticket.user_id = 1
  ticket.save
end

5.times do
  title = Faker::App.name
  description = Faker::Hipster.paragraph(3)
  ticket = Ticket.create(title: title, description: description, status: "in-progress", category: "bug")
  ticket.user_id = 2
  ticket.save
end

5.times do
  comment = Comment.create(body: Faker::Hipster.paragraph(1), ticket_id: 1, user_id: 1 )
end
