# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# plants

morty = Plant.create({
    species: "Golden Pothos",
    nickname: "Morty",
    description: "Morty is a medium Golden Pothos with several trailing vines. Morty has produced several baby Pothos via cuttings.",
    pot: "8-Inch Plastic Terra Cotta",
    image_url: "https://i.imgur.com/71xyQdr.jpg"
})

paul = Plant.create({
    species: "Aloe Vera",
    nickname: "Paul",
    description: "Paul is a large Aloe Vera with light green leaves. Paul has produced over 10 baby Aloe Veras via pups.",
    pot: "12-Inch Plastic Terra Cotta",
    image_url: "https://i.imgur.com/h2EfNxV.jpg"
})

adele = Plant.create({
    species: "Haworthia",
    nickname: "Adele",
    description: "Adele is a large Haworthia with long leaves. Adele has produced many baby Haworthia's via pups.",
    pot: "8-Inch Grey, Decorative Ceramic Planter",
    image_url: "https://i.imgur.com/aBq4er2.jpg"
})

melanie = Plant.create({
    species: "Watermelon Peperomia",
    nickname: "Melanie",
    description: "Melanie is a small Watermelon Peperomia with three large leaves and new growth appearing quickly.",
    pot: "4-Inch Yellow Ceramic Planter",
    image_url: "https://i.imgur.com/QW1fbcy.jpg"
})

# plant care

watermorty = Care.create({
    care_type: "Watering",
    notes: "Watered thoroughly. Check dryness in 10 days.",
    date: "2021-03-24",
    plant: morty
})

watermel = Care.create({
    care_type: "Watering",
    notes: "Watered thoroughly. Check dryness in 4 days. Do not overwater!",
    date: "2021-03-28",
    plant: melanie
})

propadele = Care.create({
    care_type: "Propogation",
    notes: "Removed 5 pups from Adele with good root structure. Repotted together in new pot.",
    date: "2021-02-05",
    plant: adele
})

propmorty = Care.create({
    care_type: "Propogation",
    notes: "Took 12 cuttings from Morty's longest vine. Cuttings have been placed in propogation stations for water propogation. Roots should appear in 10-14 days.",
    date: "2021-03-04",
    plant: morty
})

repotmel = Care.create({
    care_type: "Repotting",
    notes: "Repotted Melanie from grower pot to Yellow Ceramic Pot.",
    date: "2021-03-06",
    plant: melanie
})

prunepaul = Care.create({
    care_type: "Pruning",
    notes: "Pruned Paul after the freeze. Removed dead ends and leaves.",
    date: "2021-02-24",
    plant: paul
})


