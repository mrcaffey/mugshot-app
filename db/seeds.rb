require 'faker'

10.times do 
  u = User.create(
    name: Faker::Name.first_name,  
    email: Faker::Internet.email,
    password: "password"
  )


  20.times do
    Post.create(
      body: Faker::Movies::HitchhikersGuideToTheGalaxy.marvin_quote,
      user_id: u.id
    )
  end
end
    
  40.times do
    Comment.create(
      author: Faker::Movies::StarWars.character,
      body: Faker::Movies::StarWars.quote
    )
  end

