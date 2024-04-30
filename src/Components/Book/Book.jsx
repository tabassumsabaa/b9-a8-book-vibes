import { CiStar } from "react-icons/ci";
import BookDetails from "../BookDetails/BookDetails";


const Book = ({book,  readList}) => {
    const {bookId, image, tags, bookName, author, category, rating} = book;
    return (
        <div>
           <div onClick={<BookDetails></BookDetails>} className="card  shadow-xl mb-10">
               <figure className="p-4 bg-slate-100">
                    <img src={image} alt="Shoes" className="rounded-xl" />
               </figure>
               <div className="card-body">
                   <h4 className="card-title gap-2 justify-between">{tags}</h4>
                   <h2 className="text-3xl text-gray-900 font-bold">{bookName}</h2>
                   <h3 className="text-2xl text-slate-600 mb-6 border-dotted">By: {author} </h3>
                   <hr />
                   <div className="card-actions flex justify-between items-center">
                        <h2 className=" text-slate-600">{category}</h2>
                        <div className=" flex justify-end items-center gap-2">
                            <h2>{rating}</h2>
                            <CiStar></CiStar>
                        </div>
                   </div>
               </div>
           </div>
           
        </div>
    );
};

export default Book;