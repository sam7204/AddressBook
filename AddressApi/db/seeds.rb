20.times do
    AddressBook.create(
        {
            fname: Faker::Name.first_name,
            lanme: Faker::Name.last_name,
            email: Faker::Internet.email,
            phnum: Faker::PhoneNumber.phone_number,
            note:  Faker::University.name,
            DOB: Faker::Date.birthday(min_age: 18, max_age: 65)
        }
    )
end