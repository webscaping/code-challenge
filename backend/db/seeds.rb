# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
departments = Department.create([
    {
        name: 'Clothing',
    },
    {
        name: 'Toys & Games',
    },
    {
        name: 'Produce',
    },
    {
        name: 'Grocery',
    },
    {
        name: 'Dairy'
    },
    {
        name: 'Tools',
    },
    {
        name: 'Outdoors',
    },
    {
        name: 'Seasonal',
    },
])

products = Product.create([
    {
        name: 'Nike T-shirt',
        price: 29.99,
        department: departments[0],
    },
    {
        name: 'Adidas Jogging Pants',
        price: 35.99,
        department: departments[0],
    },
    {
        name: 'Air Jordans',
        price: 259.99,
        department: departments[0],
    },
    {
        name: 'LOL Doll',
        price: 16.99,
        department: departments[1],
    },
    {
        name: 'Calico Critter',
        price: 8.49,
        department: departments[1],
    },
    {
        name: 'Barbie Dreamhouse',
        price: 169.99,
        department: departments[1],
    },
    {
        name: 'Carrots 1kg',
        price: 4.59,
        department: departments[2],
    },
    {
        name: 'Romaine Lettuce',
        price: 2.99,
        department: departments[2],
    },
    {
        name: 'Apples',
        price: 6.99,
        department: departments[2],
    },
    {
        name: 'Lucky Charms Cereal',
        price: 4.99,
        department: departments[3],
    },
    {
        name: 'Oreo Cookies',
        price: 7.99,
        department: departments[3],
    },
    {
        name: 'Water 24 pack',
        price: 1.99,
        department: departments[3],
    },
    {
        name: 'Milk',
        price: 2.49,
        department: departments[4], 
    },
    {
        name: 'Cheese',
        price: 8.99,
        department: departments[4],
    },
    {
        name: 'Yogurt',
        price: 5.99,
        department: departments[4],
    },
    {
        name: 'Drill',
        price: 109.99,
        department: departments[5],
    },
    {
        name: 'Hammer',
        price: 15.99,
        department: departments[5],
    },
    {
        name: 'Skill Saw',
        price: 149.99,
        department: departments[5],
    },
    {
        name: 'Fishing Rod',
        price: 49.99,
        department: departments[6],
    },
    {
        name: 'Mountain Bike',
        price: 249.99,
        department: departments[6],
    },
    {
        name: 'Tent',
        price: 399.99,
        department: departments[6],
    },
    {
        name: 'Lawn Mower',
        price: 499.99,
        department: departments[7],
    },
    {
        name: 'Weed Whacker',
        price: 199.99,
        department: departments[7],
    },
    {
        name: 'Fertilizer',
        price: 2.49,
        department: departments[7],
    }

])

promotions = Promotion.create([
    {
        code: '25OFF',
        active: true,
        discount: 0.25,
    },
    {
        code: 'CLEARANCE',
        active: true,
        discount: 0.7,
    },
    {
        code: 'SUMMER',
        active: true,
        discount: 0.5,
    },
    {
        code: 'WINTER',
        active: false,
        discount: 0.4,
    },
    {
        code: 'BCK2SCHL',
        active: true,
        discount: 0.35,
    },
])

product_promotions = ProductPromotion.create([
    {
        product: products[0],
        promotion: promotions[0],
    },
    {
        product: products[0],
        promotion: promotions[2],
    },
    {
        product: products[0],
        promotion:promotions[3],
    },
    {
        product: products[1],
        promotion: promotions[0],
    },
    {
        product: products[1],
        promotion: promotions[1],
    },
    {
        product: products[2],
        promotion:promotions[3],
    },
    {
        product: products[2],
        promotion: promotions[0],
    },
    {
        product: products[2],
        promotion: promotions[1],
    },
    {
        product: products[3],
        promotion:promotions[3],
    },
    {
        product: products[4],
        promotion:promotions[0],
    },
    {
        product: products[4],
        promotion:promotions[4],
    },
    {
        product: products[5],
        promotion:promotions[1],
    },
    {
        product: products[6],
        promotion:promotions[0],
    },
    {
        product: products[7],
        promotion:promotions[4],
    },
    {
        product: products[8],
        promotion:promotions[1],
    },
])