import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const details = useLoaderData();
    const {bookId} = useParams();   

    const [DetailsBook, setDetailsBooks] = useState([]);
      useEffect(() =>{
        fetch('BookList.json')
        .then(res => res.json())
        .then(data => setDetailsBooks(data));
    }, [])
    console.log(DetailsBook, details, bookId);
    return (
        <div>
            <h2>book details here</h2>
        </div>
    );
};

export default BookDetails;