import React from 'react'
import { Book } from '../models/book';


  function BookCard({ title, subtitle, isbn13, price, image, url }: Book) {
    return (
      <div className="border rounded p-4 flex flex-col items-center">
        <img src={image} alt={title} className="w-32 h-48 mb-4" />
        <h2 className="text-lg font-bold">{title}</h2>
        <h3 className="text-md">{subtitle}</h3>
        <p>{isbn13}</p>
        <p>{price}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500">More Info</a>
      </div>
    );
  }
  
  export default BookCard;