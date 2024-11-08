"use server";
import data from "../../data/db_books.json";

export async function getBooksAction() {
  try {
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getBookByIdAction({ id }: { id: string }) {
  const book = data.find((b) => b._id.$oid === id);
  return book;
}
