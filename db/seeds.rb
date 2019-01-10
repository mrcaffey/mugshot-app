require 'faker'

10.times do 
  u = User.create(
    name: Faker::Name.first_name,  
    email: Faker::Internet.email,
    password: "password"
  )


20.times do 
  Post.create(
  author: u.id,
  body: Faker::Movies::HitchhikersGuideToTheGalaxy.marvin_quote
  )


40.times do 
  Comment.create(
  author: u.id,
  body: Faker::Movies::StarWars.quote
  )

end
end
end
