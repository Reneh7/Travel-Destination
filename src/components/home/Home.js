import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

function Home(props){
    return (
    <> 
           <div className="card-container">
              <Tours data={props.tour} />
           </div>
    </>)
}

export default Home;