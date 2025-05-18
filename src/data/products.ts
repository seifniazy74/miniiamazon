
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  details?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    description: "Premium wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
    details: "Experience immersive sound with our premium wireless headphones. Features include active noise cancellation, 30-hour battery life, comfortable over-ear design, and Bluetooth 5.0 connectivity. Perfect for music lovers and professionals alike."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    description: "Fitness tracking smart watch with heart rate monitor",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Electronics",
    details: "Track your fitness goals with our advanced smart watch. Features include heart rate monitoring, step counting, sleep tracking, and water resistance up to 50 meters. Compatible with iOS and Android devices."
  },
  {
    id: 3,
    name: "Leather Wallet",
    price: 49.99,
    description: "Genuine leather wallet with RFID protection",
    image: "https://images.unsplash.com/photo-1517254797898-04edd251bece",
    category: "Accessories",
    details: "Keep your cards and cash safe with our genuine leather wallet. Features RFID protection, multiple card slots, and a sleek design that fits comfortably in your pocket."
  },
  {
    id: 4,
    name: "Sunrise Alarm Clock",
    price: 79.99,
    description: "Wake up naturally with gradually increasing light",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",
    category: "Home",
    details: "Wake up refreshed with our sunrise alarm clock. The light gradually increases 30 minutes before your alarm time, simulating a natural sunrise. Features include multiple nature sounds, FM radio, and adjustable brightness."
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug",
    price: 19.99,
    description: "Handcrafted ceramic mug with elegant design",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    category: "Home",
    details: "Enjoy your morning coffee or tea in our handcrafted ceramic mug. Each mug is uniquely designed by local artisans and holds 12 oz of your favorite beverage. Microwave and dishwasher safe."
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 89.99,
    description: "Waterproof portable speaker with 360° sound",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    category: "Electronics",
    details: "Take your music anywhere with our portable Bluetooth speaker. Features include waterproof design (IPX7 rated), 360° sound, 20-hour battery life, and the ability to pair multiple speakers for surround sound."
  },
  {
    id: 7,
    name: "Yoga Mat",
    price: 39.99,
    description: "Non-slip eco-friendly yoga mat",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    category: "Fitness",
    details: "Perfect your poses on our eco-friendly yoga mat. Features include a non-slip surface, optimal cushioning, and easy-clean material. Made from sustainable, biodegradable materials."
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 29.99,
    description: "Insulated bottle that keeps drinks cold for 24 hours",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    category: "Accessories",
    details: "Stay hydrated with our stainless steel water bottle. Double-wall vacuum insulation keeps drinks cold for up to 24 hours or hot for up to 12 hours. Leak-proof design and available in multiple colors."
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getCategories = (): string[] => {
  return Array.from(new Set(products.map(product => product.category)));
};
