require 'faker'

10.times do
  u = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    company_name: Faker::Lorem.word,
    admin: Faker::Boolean.boolean,
    email: Faker::Internet.email,
    phone: Faker::PhoneNumber.phone_number,
    password: “password”
  )
end