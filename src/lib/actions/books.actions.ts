"use server";

import { connectToDB } from "../mongoose";
import { selectBooks } from "./books/queries";

export async function GetAllBooks() {
  console.log("this is the url we are getting from the database");
  console.log(process.env.MONGODB_URL!);
  await connectToDB();
  const allBooks = await selectBooks();

  return allBooks;
}

export const getBookById = async () => {};
