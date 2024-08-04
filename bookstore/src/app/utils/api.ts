import axios from "axios";
import { BookResponse } from "../models/BookResponse";

export const fetchBooks = async (query:string) => {
    try {
        const response = await axios.get(`https://api.itbook.store/1.0/search/${query}`);
         
    return response.data as BookResponse;   
     
    }  catch (error) {
        console.error(error);
    }
  
};



