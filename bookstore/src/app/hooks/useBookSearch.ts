    "use client";

import { useState, useEffect } from "react";
import axios from 'axios';
import { searchBooks } from "../services/bookService";
import { Book } from "../models/book";
import { BookResponse } from "../models/BookResponse";

export const useBookSearch = (query: string) => {
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(false);
      const [books, setBooks] = useState<Book[]>([]);
    const [bookResponse, setbookResponse] = useState<BookResponse | null>(null);
      useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const data = await searchBooks(query);
            if (data.error === "0") {
              setbookResponse(data);
              setBooks([...data.books]);
              setLoading(false);
            } else {
              setError(true);
              setLoading(false);
            }
          } catch (error) {
            setError(true);
            setLoading(false);
          }
        };
      
        fetchData();
      }, [query]);
      return { loading, error, books, bookResponse };
        

    }
