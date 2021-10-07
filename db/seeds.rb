5.times do 
  @worker = Worker.create(
    first_name: Faker::FunnyName.name,
    last_name: Faker::FunnyName.four_word_name,
    phone: Faker::Config.locale,
    email: Faker::Internet.email,
    specialty: Faker::Job.key_skill,
  )
  
    2.times do
     @worker.services.create(
       job_title: Faker::Job.title,
        desc: Faker::Job.field,
        category: Faker::IndustrySegments.industry,
       
      )
  end
end
  
  puts "Data Seeded Dog"
  @workers = Worker.all
  @services = Service.all
  p @workers
  p @comments
