const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 4500,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    description: "Comfortable over-ear wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 6800,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60",
    description: "Lightweight running shoes with breathable mesh design."
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 8200,
    category: "Home",
    image: "https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?w=500&auto=format&fit=crop&q=60",
    description: "12-cup programmable coffee maker with auto shut-off."
  },
  {
    id: 4,
    name: "Backpack",
    price: 3200,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
    description: "Durable water-resistant backpack with laptop compartment."
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 15500,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=500&auto=format&fit=crop&q=60",
    description: "Fitness tracking smart watch with heart rate monitor."
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 3800,
    category: "Electronics",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Portable waterproof speaker with rich bass and 12-hour battery."
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 2900,
    category: "Electronics",
        image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
    description: "High-precision gaming mouse with customizable RGB lighting."
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 7200,
    category: "Electronics",
        image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1lY2hhbmljYWwlMjBLZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Tactile mechanical keyboard with backlit keys."
  },
  {
    id: 9,
    name: "Leather Wallet",
    price: 1800,
    category: "Accessories",
        image: "https://media.istockphoto.com/id/1096963640/photo/person-removing-loyalty-card-from-wallet.webp?a=1&b=1&s=612x612&w=0&k=20&c=nDtuB0R5tcjhLHanaP7fM3tz3-vRjmGN7WUbj8xCrS4=",
    description: "Genuine leather bifold wallet with card slots."
  },
  {
    id: 10,
    name: "Sunglasses",
    price: 2200,
    category: "Accessories",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
    description: "UV-protection polarized sunglasses with classic frame."
  },
  {
    id: 11,
    name: "Formal Shirt",
    price: 2600,
    category: "Clothing",
    image: "https://loremflickr.com/500/500/formal,shirt",
    description: "Slim-fit cotton formal shirt, wrinkle-resistant."
  },
  {
    id: 12,
    name: "Denim Jacket",
    price: 5400,
    category: "Clothing",
    image: "https://loremflickr.com/500/500/denim,jacket",
    description: "Classic denim jacket with a relaxed fit."
  },
  {
    id: 13,
    name: "Casual Sneakers",
    price: 5200,
    category: "Footwear",
    image: "https://loremflickr.com/500/500/casual,sneakers",
    description: "Everyday sneakers with cushioned insoles."
  },
  {
    id: 14,
    name: "Leather Boots",
    price: 9500,
    category: "Footwear",
    image: "https://loremflickr.com/500/500/leather,boots",
    description: "Handcrafted leather boots built to last."
  },
  {
    id: 15,
    name: "Desk Lamp",
    price: 2100,
    category: "Home",
    image: "https://loremflickr.com/500/500/desk,lamp",
    description: "Adjustable LED desk lamp with touch control."
  },
  {
    id: 16,
    name: "Air Fryer",
    price: 12500,
    category: "Home",
    image: "https://loremflickr.com/500/500/air,fryer",
    description: "Compact air fryer for healthier, oil-free cooking."
  },
  {
    id: 17,
    name: "Throw Pillow Set",
    price: 1900,
    category: "Home",
    image: "https://loremflickr.com/500/500/throw,pillow",
    description: "Set of 2 decorative throw pillows for your sofa."
  },
  {
    id: 18,
    name: "Ceramic Mug Set",
    price: 1500,
    category: "Home",
    image: "https://loremflickr.com/500/500/ceramic,mug",
    description: "Set of 4 ceramic mugs, dishwasher safe."
  },
  {
    id: 19,
    name: "Yoga Mat",
    price: 2400,
    category: "Sports",
    image: "https://loremflickr.com/500/500/yoga,mat",
    description: "Non-slip yoga mat with carrying strap."
  },
  {
    id: 20,
    name: "Dumbbell Set",
    price: 6600,
    category: "Sports",
    image: "https://loremflickr.com/500/500/dumbbell,set",
    description: "Adjustable dumbbell set for home workouts."
  },
  {
    id: 21,
    name: "Water Bottle",
    price: 1300,
    category: "Sports",
    image: "https://loremflickr.com/500/500/water,bottle",
    description: "Insulated stainless steel water bottle, keeps drinks cold 24h."
  },
  {
    id: 22,
    name: "Sports Cap",
    price: 1100,
    category: "Accessories",
    image: "https://loremflickr.com/500/500/sports,cap",
    description: "Breathable sports cap with adjustable strap."
  },
  {
    id: 23,
    name: "Laptop Stand",
    price: 2800,
    category: "Electronics",
    image: "https://loremflickr.com/500/500/laptop,stand",
    description: "Ergonomic aluminum laptop stand, adjustable height."
  },
  {
    id: 24,
    name: "Wireless Mouse",
    price: 1700,
    category: "Electronics",
    image: "https://loremflickr.com/500/500/wireless,mouse",
    description: "Silent-click wireless mouse with long battery life."
  },
  {
    id: 25,
    name: "Travel Duffel Bag",
    price: 4300,
    category: "Accessories",
    image: "https://loremflickr.com/500/500/travel,duffel,bag",
    description: "Spacious duffel bag ideal for weekend trips."
  }
]

export default products