import { BookResponse } from "../models/BookResponse";
import { fetchBooks } from "../utils/api";

export  const searchBooks = async (query:string) => {
  const data =   await fetchBooks('{query}');
        return data as BookResponse;
}