// src/data.js
export const products = [
  {
    id: 1,
    name: "Dog Food",
    image:
      "https://www.purina.co.uk/sites/default/files/2022-12/NUK1915%20Bakers-MHI-Pack-2.85kg%20small%20dog%20chicken_hero.png",
    category: "Food",
    description: "High-quality dog food with all essential nutrients.",
    price: 20,
    animalType: "Dog",
    inStock: true,
    color: "Brown",
  },
  {
    id: 2,
    name: "Cat Food",
    image:
      "https://www.whiskas.co.uk/sites/g/files/fnmzdf5146/files/migrate-product-files/images/fctzcjlcpxhxxqg9v8ux.png",
    category: "Food",
    description: "Nutritious cat food for healthy and happy cats.",
    price: 15,
    animalType: "Cat",
    inStock: true,
    color: "Yellow",
  },
  {
    id: 3,
    name: "Shampoo for Dogs",
    image:
      "https://www.cowellsgc.co.uk/files/images/webshop/zoon-dog-shampoo-range-3082x3082-655c9f3aa9823_l.webp",
    category: "Grooming",
    description: "Gentle shampoo for dogs to keep their fur clean and shiny.",
    price: 8,
    animalType: "Dog",
    inStock: false,
    color: "White",
  },
  {
    id: 4,
    name: "Cat Brush",
    image:
      "https://www.homewareessentials.co.uk/uploads/Product/xlarge/0c20b35d4abd72f041c89cfa221cb34f.jpg",
    category: "Grooming",
    description: "Brush for cats to keep their fur detangled and smooth.",
    price: 5,
    animalType: "Cat",
    inStock: true,
    color: "Black",
  },
  {
    id: 5,
    name: "Chew Toy for Dogs",
    image:
      "https://shop.rspca.org.uk/cdn/shop/products/3520000380200-PT0116_1-508782.jpg?v=1710526146&width=416",
    category: "Toys",
    description: "Durable chew toy for dogs to keep them entertained.",
    price: 10,
    animalType: "Dog",
    inStock: true,
    color: "Red",
  },
  {
    id: 6,
    name: "Catnip Toy",
    image:
      "https://i.insider.com/5b353db544e9882f008b46d3?width=1400&format=jpeg&auto=webp",
    category: "Toys",
    description: "Fun catnip toy to keep your cat playful and active.",
    price: 12,
    animalType: "Cat",
    inStock: false,
    color: "Green",
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === parseInt(id));
}
