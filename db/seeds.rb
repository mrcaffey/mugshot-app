require 'faker'

10.times do 
  u = User.create(
    name: Faker::Name.first_name,  
    email: Faker::Internet.email,
    password: "password"
  )
end