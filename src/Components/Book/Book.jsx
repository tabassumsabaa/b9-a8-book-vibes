
const Book = ({book}) => {
    const {image, tags, bookName, author, category, rating} = book;
    return (
        <div>
           <div className="card w-96  shadow-xl">
               <figure className="p-10 bg-slate-100">
                    <img src={image} alt="Shoes" className="rounded-xl" />
               </figure>
               <div className="card-body">
                   <h4 className="card-title gap-2 justify-evenly">{tags}</h4>
                   <h2 className="text-3xl text-gray-900">{bookName}</h2>
                   <h3 className="text-2xl text-slate-600 mb-6 border-dotted">By: {author} </h3>
                   <div className="card-actions flex justify-around">
                        <h2 className="text-2xl text-slate-600">{category}</h2>
                        <div className="">
                            <h2 >{rating}</h2>

                        </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Book;