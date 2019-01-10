require 'faker'

10.times do 
  u = User.create(
    name: Faker::Name.first_name,  
    email: Faker::Internet.email,
    password: "password"
  )
end

  20.times do
    Post.create(
      author: Faker::Movies::StarWars.character,
      body: Faker::Movies::HitchhikersGuideToTheGalaxy.marvin_quote
    )
  end
    
  40.times do
    Comment.create(
      author: Faker::Movies::StarWars.character,
      body: Faker::Movies::StarWars.quote
    )
  end
