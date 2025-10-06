const restaurants = [
  {
    "image": "images1",
    "name": "Rajmahal Indian Cuisine",
    "rating": 4.5,
    "food_type": "North Indian, Mughlai",
    "price_for_two": 1200,
    "location": "Sector 18, Noida",
    "distance_from_customer_house": "3.5 km",
    "offers": [
      "20% off on all starters",
      "Free dessert on bill over ₹1500"
    ],
    "alcohol": true,
    "restaurant_open_time": "12:00 PM",
    "restaurant_close_time": "11:30 PM"
  },
  {
    "image": "images2",
    "name": "Wok Express",
    "rating": 4.2,
    "food_type": "Chinese, Pan-Asian",
    "price_for_two": 800,
    "location": "DLF Cyber Hub, Gurgaon",
    "distance_from_customer_house": "10.2 km",
    "offers": [
      "Buy 1 Get 1 on Noodles"
    ],
    "alcohol": false,
    "restaurant_open_time": "11:00 AM",
    "restaurant_close_time": "10:00 PM"
  },
  {
    "image": "images3",
    "name": "The Pizza Place",
    "rating": 4.0,
    "food_type": "Italian, Pizza",
    "price_for_two": 950,
    "location": "Kalkaji, New Delhi",
    "distance_from_customer_house": "6.7 km",
    "offers": [
      "Flat ₹150 off on app orders"
    ],
    "alcohol": true,
    "restaurant_open_time": "1:00 PM",
    "restaurant_close_time": "12:30 AM"
  },
  {
    "image": "images4",
    "name": "Saravana Bhavan",
    "rating": 4.7,
    "food_type": "South Indian, Pure Veg",
    "price_for_two": 600,
    "location": "Janpath, New Delhi",
    "distance_from_customer_house": "12.0 km",
    "offers": [
      "No special offers currently"
    ],
    "alcohol": false,
    "restaurant_open_time": "8:00 AM",
    "restaurant_close_time": "10:30 PM"
  },
  {
    "image": "images5",
    "name": "Burger Zone",
    "rating": 3.9,
    "food_type": "Fast Food, Burgers",
    "price_for_two": 500,
    "location": "Lajpat Nagar, New Delhi",
    "distance_from_customer_house": "4.1 km",
    "offers": [
      "Combo meals starting at ₹299"
    ],
    "alcohol": false,
    "restaurant_open_time": "11:30 AM",
    "restaurant_close_time": "11:00 PM"
  },
  {
    "image": "images6",
    "name": "The Coffee Corner",
    "rating": 4.1,
    "food_type": "Cafe, Beverages, Snacks",
    "price_for_two": 400,
    "location": "Hauz Khas Village, New Delhi",
    "distance_from_customer_house": "8.5 km",
    "offers": [
      "Student ID 10% discount"
    ],
    "alcohol": false,
    "restaurant_open_time": "9:00 AM",
    "restaurant_close_time": "10:00 PM"
  },
  {
    "image": "images7",
    "name": "The Kebab House",
    "rating": 4.4,
    "food_type": "Awadhi, Biryani",
    "price_for_two": 1500,
    "location": "Karol Bagh, New Delhi",
    "distance_from_customer_house": "9.3 km",
    "offers": [
      "Complimentary Raita with every Biryani"
    ],
    "alcohol": true,
    "restaurant_open_time": "6:00 PM",
    "restaurant_close_time": "1:00 AM"
  },
  {
    "image": "images8",
    "name": "Mexican Grill Co.",
    "rating": 3.8,
    "food_type": "Mexican, Tex-Mex",
    "price_for_two": 1100,
    "location": "Greater Kailash 1, New Delhi",
    "distance_from_customer_house": "5.8 km",
    "offers": [
      "Taco Tuesday: 50% off on all Tacos"
    ],
    "alcohol": true,
    "restaurant_open_time": "12:30 PM",
    "restaurant_close_time": "11:45 PM"
  },
  {
    "image": "images9",
    "name": "Sushi Love",
    "rating": 4.6,
    "food_type": "Japanese, Sushi",
    "price_for_two": 2000,
    "location": "Vasant Kunj, New Delhi",
    "distance_from_customer_house": "15.0 km",
    "offers": [
      "Chef's Special Tasting Menu"
    ],
    "alcohol": true,
    "restaurant_open_time": "1:30 PM",
    "restaurant_close_time": "11:00 PM"
  },
  {
    "image": "images10",
    "name": "Punjabi Dhaba",
    "rating": 4.3,
    "food_type": "Punjabi, Desi",
    "price_for_two": 700,
    "location": "Dwarka, New Delhi",
    "distance_from_customer_house": "7.0 km",
    "offers": [
      "Free delivery within 3 km"
    ],
    "alcohol": false,
    "restaurant_open_time": "10:30 AM",
    "restaurant_close_time": "11:30 PM"
  },
{
    "image": "images11",
    "name": "Coastal Bites",
    "rating": 4.1,
    "food_type": "Seafood, Konkani",
    "price_for_two": 1400,
    "location": "Malviya Nagar, New Delhi",
    "distance_from_customer_house": "6.0 km",
    "offers": [
      "Weekend Seafood Platter Discount"
    ],
    "alcohol": true,
    "restaurant_open_time": "1:00 PM",
    "restaurant_close_time": "11:00 PM"
  },
  {
    "image": "images12",
    "name": "Healthy Bowl Co.",
    "rating": 4.8,
    "food_type": "Salads, Health Food",
    "price_for_two": 550,
    "location": "Connaught Place, New Delhi",
    "distance_from_customer_house": "11.5 km",
    "offers": [
      "15% off on all smoothies"
    ],
    "alcohol": false,
    "restaurant_open_time": "9:00 AM",
    "restaurant_close_time": "8:00 PM"
  },
  {
    "image": "images13",
    "name": "The French Loaf",
    "rating": 4.3,
    "food_type": "Bakery, Desserts, Continental",
    "price_for_two": 900,
    "location": "DLF Phase 4, Gurgaon",
    "distance_from_customer_house": "11.0 km",
    "offers": [
      "Buy 2 Pastries Get 1 Free"
    ],
    "alcohol": false,
    "restaurant_open_time": "7:30 AM",
    "restaurant_close_time": "9:30 PM"
  },
  {
    "image": "images14",
    "name": "Kerala Kitchen",
    "rating": 4.5,
    "food_type": "South Indian, Kerala",
    "price_for_two": 850,
    "location": "Mayur Vihar, New Delhi",
    "distance_from_customer_house": "1.5 km",
    "offers": [
      "Complimentary filter coffee with lunch combo"
    ],
    "alcohol": false,
    "restaurant_open_time": "11:00 AM",
    "restaurant_close_time": "10:00 PM"
  },
  {
    "image": "images15",
    "name": "Grill Nation",
    "rating": 3.7,
    "food_type": "Barbecue, American",
    "price_for_two": 1800,
    "location": "Aerocity, New Delhi",
    "distance_from_customer_house": "18.0 km",
    "offers": [
      "Happy Hour: 1+1 on selected drinks"
    ],
    "alcohol": true,
    "restaurant_open_time": "4:00 PM",
    "restaurant_close_time": "1:00 AM"
  },
  {
    "image": "images16",
    "name": "Chatpati Chaat Corner",
    "rating": 4.0,
    "food_type": "Street Food, Chaat",
    "price_for_two": 300,
    "location": "Chandni Chowk, Old Delhi",
    "distance_from_customer_house": "14.5 km",
    "offers": [
      "Family pack discount on Samosas"
    ],
    "alcohol": false,
    "restaurant_open_time": "10:00 AM",
    "restaurant_close_time": "9:30 PM"
  },
  {
    "image": "images17",
    "name": "Ethos Bistro",
    "rating": 4.6,
    "food_type": "Mediterranean, European",
    "price_for_two": 2200,
    "location": "Khan Market, New Delhi",
    "distance_from_customer_house": "8.0 km",
    "offers": [
      "Early bird dinner discount"
    ],
    "alcohol": true,
    "restaurant_open_time": "1:00 PM",
    "restaurant_close_time": "12:00 AM"
  },
  {
    "image": "images18",
    "name": "Momo Mania",
    "rating": 4.2,
    "food_type": "Tibetan, Momos",
    "price_for_two": 450,
    "location": "Munirka, New Delhi",
    "distance_from_customer_house": "7.5 km",
    "offers": [
      "Free Coke with every steamer"
    ],
    "alcohol": false,
    "restaurant_open_time": "12:00 PM",
    "restaurant_close_time": "10:45 PM"
  },
  {
    "image": "images19",
    "name": "Spice Route",
    "rating": 4.7,
    "food_type": "Pan-Asian, Thai, Vietnamese",
    "price_for_two": 2500,
    "location": "The Ashok, New Delhi",
    "distance_from_customer_house": "13.0 km",
    "offers": [
      "Exclusive dessert tasting menu"
    ],
    "alcohol": true,
    "restaurant_open_time": "7:00 PM",
    "restaurant_close_time": "11:30 PM"
  },
  {
    "image": "images20",
    "name": "Pahadi Rasoi",
    "rating": 4.0,
    "food_type": "Himachali, North Indian",
    "price_for_two": 1000,
    "location": "Sector 62, Noida",
    "distance_from_customer_house": "5.0 km",
    "offers": [
      "Seasonal vegetable special"
    ],
    "alcohol": false,
    "restaurant_open_time": "1:00 PM",
    "restaurant_close_time": "10:30 PM"
  },
  {
    "image": "images21",
    "name": "The Melting Pot",
    "rating": 3.9,
    "food_type": "Fondue, European",
    "price_for_two": 1600,
    "location": "South Extension 2, New Delhi",
    "distance_from_customer_house": "7.2 km",
    "offers": [
      "Couples deal on chocolate fondue"
    ],
    "alcohol": true,
    "restaurant_open_time": "5:30 PM",
    "restaurant_close_time": "11:30 PM"
  }
];

function getrResturant(restaurants){
    const root = document.querySelector('#root')
restaurants.forEach((resto)=>{
    
  const card = document.createElement('div')
    card.style.width = '320px'
    card.style.backgroundColor = 'white'
    card.style.margin = '20px'
    card.style.borderRadius = '10px'
    card.style.boxShadow = '0 4px 8px'
    card.style.overflow = 'hidden'
    card.style.transition = 'transform 0.3s'

    
    // create Image
    const img = document.createElement('img')
    img.src = `Images/${resto.image}.jpeg`;
    img.style.width = '100%'
    img.style.height = '200px'
    img.style.objectFit = 'cover'

    // card_content
    const card_content = document.createElement('div')
    card_content.style.padding = '15px'

    
    
    // card_header
    const card_header = document.createElement('div')
    card_header.style.display ='flex'
    card_header.style.justifyContent = 'space-between'
    card_header.style.alignItems = 'center'
    card_header.style.marginBottom = '10px'
    // Name resturant
   const h1 =  document.createElement('h1')
    h1.textContent = resto.name
    h1.style.margin = '0px'
    h1.style.fontSize = '18px'
    h1.style.fontWeight = 'bold'
    // rating resturant
    const rate = document.createElement('span')
    rate.textContent = resto.rating;
    rate.style.backgroundColor = '#f4b400'
    rate.style.padding = '5px 10px'
    rate.style.borderRadius = '5px'
    rate.style.fontSize = '14px'
    rate.style.color = '#fff'


    // card_foooter
    const card_footer = document.createElement('div')
    card_footer.style.display ='flex'
    card_footer.style.justifyContent = 'space-between'
    card_footer.style.fontSize = '14px'
    card_footer.style.marginTop = '10px'

    const food = document.createElement('span')
    food.textContent = resto.food_type;
    food.style.backgroundColor = '#f4b400'
    food.style.padding = '5px 10px'
    food.style.borderRadius = '5px'
    food.style.fontSize = '14px'
    food.style.color = '#fff'
    // food.style.display = 'flex'
    

    const amount = document.createElement('span')
    amount.textContent = `₹${resto.price_for_two}`;
    amount.style.backgroundColor = '#f4b400'
    amount.style.padding = '5px 10px'
    amount.style.borderRadius = '5px'
    amount.style.fontSize = '14px'
    amount.style.color = '#fff'
    

    // card_location
    const card_location = document.createElement('div')
    card_location.style.display ='flex'
    card_location.style.justifyContent = 'space-between'
    card_location.style.marginTop = '10px'
    card_location.style.fontSize = '14px'

    const location = document.createElement('span')
    location.textContent = resto.location;
    location.style.backgroundColor = '#f4b400'
    location.style.padding = '5px 10px'
    location.style.borderRadius = '5px'
    location.style.fontSize = '14px'
    location.style.color = '#fff'

    const distance = document.createElement('span')
    distance.textContent = resto.distance_from_customer_house;
    distance.style.backgroundColor = '#f4b400'
    distance.style.padding = '5px 10px'
    distance.style.borderRadius = '5px'
    distance.style.fontSize = '14px'
    distance.style.color = '#fff'


    card_location.appendChild(location)
    card_location.appendChild(distance)
    card_footer.appendChild(food)
    card_footer.appendChild(amount)
    card_header.appendChild(h1)
    card_header.appendChild(rate)

    card_content.appendChild(card_header)
    card_content.appendChild(card_footer)
    card_content.appendChild(card_location)

    
    card.appendChild(img)
    card.appendChild(card_content)
    
    root.appendChild(card)
    root.style.display = 'flex'
    root.style.flexWrap = 'wrap'
    root.style.justifyContent = 'space-around'
})
}

const Alcohol = document.querySelector('#Alcohol')
Alcohol.addEventListener('click',()=>{
   const result =  restaurants.filter((obj)=>  obj.alcohol)
    document.querySelector('#root').replaceChildren() // innerHTML = '' ye bhi kr skte h 

   getrResturant(result)
})
const rating = document.querySelector('#Rating')
rating.addEventListener('click',()=>{
   const result =  restaurants.filter((obj)=>  obj.rating>4.5)
    document.querySelector('#root').replaceChildren()

   getrResturant(result)
})

const offer = document.querySelector('#Offers')
offer.addEventListener('click',()=>{
   const result =  restaurants.filter((obj)=>  obj.offers>'30%')
    document.querySelector('#root').replaceChildren()

   getrResturant(result)
})
const Open = document.querySelector('#Open')
Open.addEventListener('click',()=>{
   const result =  restaurants.filter((obj)=>  obj.restaurant_open_time>'12:00')
    document.querySelector('#root').replaceChildren()

   getrResturant(result)
})
const filter = document.querySelector('#Filter')
filter.addEventListener('click',()=>{
    const filtergroup = document.querySelector('#filergroup')
    filtergroup.classList.toggle('hidden')
})
const buttonclose = document.querySelector('#btn-close')
buttonclose.addEventListener('click',()=>{
const filtergroup = document.querySelector('#filergroup')
    filtergroup.classList.toggle('hidden')
})
const applybtn = document.querySelector('#apply-filter')


getrResturant(restaurants)