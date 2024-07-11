export const products = [
  {
    id: 1,
    name: "Dog Food",
    category: "Food",
    description: "High-quality dog food with all essential nutrients.",
  },
  {
    id: 2,
    name: "Cat Food",
    category: "Food",
    description: "Nutritious cat food for healthy and happy cats.",
  },
  {
    id: 3,
    name: "Shampoo for Dogs",
    category: "Grooming",
    description: "Gentle shampoo for dogs to keep their fur clean and shiny.",
  },
  {
    id: 4,
    name: "Cat Brush",
    category: "Grooming",
    description: "Brush for cats to keep their fur detangled and smooth.",
  },
  {
    id: 5,
    name: "Chew Toy for Dogs",
    category: "Toys",
    description: "Durable chew toy for dogs to keep them entertained.",
  },
  {
    id: 6,
    name: "Catnip Toy",
    category: "Toys",
    description: "Fun catnip toy to keep your cat playful and active.",
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === parseInt(id));
}
