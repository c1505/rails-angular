# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
5.times do
  title = Faker::App.name
  description = Faker::Hipster.paragraph(3)
  Ticket.create(title: title, description: description, status: "completed", category: "bug")
end

5.times do
  title = Faker::App.name
  description = Faker::Hipster.paragraph(3)
  Ticket.create(title: title, description: description, status: "in-progress", category: "bug")
end
