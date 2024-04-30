import { Link } from "react-router-dom";
// import ListedBook from "../ListedBook/ListedBook";

const Bannar = () => {
 
    return (
        <div>
          <div className="">
            <div className="hero bg-base-200 rounded-xl mt-10">
              <div className="hero-content flex-col lg:flex-row-reverse">
                 <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                 <div className="">
                    <h1 className="text-5xl font-bold w-3/4 mb-6">Books to Cheer Up Your Bookself</h1>                    
                    <div>                      
                      <Link to={`/listed`}>
                          <button className="btn btn-success">View The List</button>
                      </Link>
                    </div>
                 </div>
               </div>
             </div>
            </div>
        </div>
    );
};

export default Bannar;