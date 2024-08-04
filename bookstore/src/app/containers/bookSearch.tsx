   "use strict";
   "use client"; 
    
    import React, { useState } from 'react';
    import { Book } from '../models/book';
    import { useBookSearch } from '../hooks/useBookSearch';
    import BookCard from '../components/BookCard';
    import { BookResponse } from '../models/BookResponse';

    const BookSearch = () => {
        const [query, setQuery] = useState<string>('');
        const [searchResults, setSearchResults] = useState<BookResponse>();
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState('');


        return (
            <div className="container mx-auto p-4">
            <input
              type="text"
              placeholder="Search books by title, author, ISBN or keywords"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border rounded p-2 w-full mb-4"
            />
            {isLoading && <p>Loading...</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {  
              //@ts-ignore
              searchResults.books.map((book) => (
                <BookCard key={book.isbn13} {...book} />
              ))}
            </div>
          </div>
        );
      };
      
        export default BookSearch;
    