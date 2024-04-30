import Bannar from "../Bannar/Bannar";
import BookDetails from "../BookDetails/BookDetails";
import ListedBook from "../ListedBook/ListedBook";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <ListedBook></ListedBook>
            <BookDetails></BookDetails>
        </div>
    );
};

export default Home;