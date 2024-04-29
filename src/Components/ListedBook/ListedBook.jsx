import { useEffect, useState } from "react";
import Book from "../Book/Book";


const ListedBook = () => {
    const [BookList, setBooks] = useState([]);
    useEffect( () =>{
        fetch('BookList.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])

    return (
        <div className="mt-10">
            <h2 className="text-5xl font-semibold text-center mb-10">Books</h2>
            <div className="">             
              <div  className="grid grid-cols-3 gap-6">
                 {
                    BookList.map(book => <Book key={book.bookId} book={book}></Book>)
                 }         
                                  
              </div>               
            </div>            
        </div>
    );
};

export default ListedBook;