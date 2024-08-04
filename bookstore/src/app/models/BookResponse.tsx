import { Book } from "./book";

export type BookResponse    = { 
    "error": string;
    "total": string;
    "page": string;
    "books": Book[];    
}                    