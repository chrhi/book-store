import { connectToDB } from "./lib/mongoose";
import Book from "./lib/simplae-modals/books";
import Vendor from "./lib/simplae-modals/vendors";

const vendors = [
  {
    name: "Matti Virtanen",
    email: "matti@bookstore.com",
    shopName: "bookhouse",
    color: "#FF5733",
  },
  {
    name: "Liisa Korhonen",
    email: "liisa@books.com",
    shopName: "bookstore",
    color: "#33FF57",
  },
  {
    name: "Pekka Mäkinen",
    email: "pekka@books.com",
    shopName: "classibooks",
    color: "#3357FF",
  },
  {
    name: "Anna Järvinen",
    email: "anna@books.com",
    shopName: "bookcorner",
    color: "#FF33E9",
  },
  {
    name: "Juha Nieminen",
    email: "juha@books.com",
    shopName: "bookmarket",
    color: "#33FFF6",
  },
];

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 19.99,
    year: 1925,
    publisher: "Scribner",
    condition: "Uusi",
    binding: "Sidottu",
    pages: 180,
    isbn: "978-0-7432-7356-5",
    category: "Fiction",
    edition: 1,
    inStock: true,
    description: "A story of American dream and decay",
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 15.99,
    year: 1949,
    publisher: "Penguin",
    condition: "Uusi",
    binding: "Nidottu",
    pages: 328,
    isbn: "978-0-4515-2493-5",
    category: "Fiction",
    edition: 1,
    inStock: true,
    description: "A dystopian social science fiction novel",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 12.99,
    year: 1813,
    publisher: "Penguin",
    condition: "Hyvä",
    binding: "Nidottu",
    pages: 432,
    isbn: "978-0-1414-3951-8",
    category: "Romance",
    edition: 1,
    inStock: true,
    description: "A romantic novel of manners",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 14.99,
    year: 1960,
    publisher: "Harper",
    condition: "Uusi",
    binding: "Sidottu",
    pages: 281,
    isbn: "978-0-4464-3141-6",
    category: "Fiction",
    edition: 1,
    inStock: true,
    description: "A story of racial injustice and childhood innocence",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 22.99,
    year: 1937,
    publisher: "Harper",
    condition: "Uusi",
    binding: "Sidottu",
    pages: 310,
    isbn: "978-0-2611-0330-2",
    category: "Fantasy",
    edition: 1,
    inStock: true,
    description: "A fantasy novel about Bilbo's quest",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    price: 24.99,
    year: 1965,
    publisher: "Ace",
    condition: "Uusi",
    binding: "Sidottu",
    pages: 412,
    isbn: "978-0-4414-7281-8",
    category: "SciFi",
    edition: 1,
    inStock: true,
    description: "A science fiction masterpiece",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 13.99,
    year: 1951,
    publisher: "Little",
    condition: "Hyvä",
    binding: "Nidottu",
    pages: 234,
    isbn: "978-0-3167-6948-8",
    category: "Fiction",
    edition: 1,
    inStock: true,
    description: "A coming-of-age novel",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 16.99,
    year: 1988,
    publisher: "Harper",
    condition: "Uusi",
    binding: "Nidottu",
    pages: 197,
    isbn: "978-0-0617-2295-4",
    category: "Fiction",
    edition: 1,
    inStock: true,
    description: "A philosophical novel about following dreams",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    price: 18.99,
    year: 2003,
    publisher: "Doubleday",
    condition: "Uusi",
    binding: "Sidottu",
    pages: 454,
    isbn: "978-0-3855-0420-1",
    category: "Mystery",
    edition: 1,
    inStock: true,
    description: "A mystery thriller novel",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    price: 17.99,
    year: 2006,
    publisher: "Knopf",
    condition: "Uusi",
    binding: "Sidottu",
    pages: 287,
    isbn: "978-0-3074-5517-5",
    category: "Fiction",
    edition: 1,
    inStock: true,
    description: "A post-apocalyptic tale of survival",
  },
];

export async function seedDatabase() {
  try {
    await connectToDB();

    // Clear existing data
    await Book.deleteMany({});
    await Vendor.deleteMany({});

    await Vendor.create(vendors);
    console.log("✅ Vendors seeded successfully");

    await Book.create(books);
    console.log("✅ Books seeded successfully");

    return { success: true, message: "Database seeded successfully" };
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    return { success: false, message: error };
  }
}
