const products = [
  {
    mageUrl: "https://via.placeholder.com/150", 
    name: "Producto1", 
    price: "100", 
    categoryName: "Electronics"
  },
  {
    imageUrl: "https://via.placeholder.com/150", 
    name: "Producto2", 
    price: "102", 
    categoryName: "Books"
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    name: "Producto3", 
    price: "103", 
    categoryName: "Home"
  },
  {
    imageUrl: "https://via.placeholder.com/150", 
    name: "Producto4", 
    price: "104", 
    categoryName: "Home"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  products,
  authors
};
