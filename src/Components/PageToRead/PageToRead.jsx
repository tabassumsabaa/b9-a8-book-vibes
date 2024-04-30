import { useState } from "react";


const PageToRead = () => {
    const [readList, setReadList] = useState([]);
    useEffect( () =>{
        fetch('BookList.json')
        .then(res => res.json())
        .then(data => setReadList(data));
    }, [])
    return (
        <div>
      <h1>Pages to Read</h1>
      <div className="flex flex-col items-center mt-5">
        {readList.map((book, index) => (
          <div className="bar bg-[#007bff] mb-10" key={index} style={{ '--height': `${book.totalPages}px` }}>
            <span className="bar-label font-bold -top-5">{book.bookName}</span>
            <span className="bar-pages -bottom-5">{book.totalPages} pages</span>
          </div>
        ))}
      </div>
    </div>
    );
};

export default PageToRead;