import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import db from '../../data/db.json'

function Home(){
    return (
    <> 
           <Header/>
            <div className="card-container">
             {db.map((element) => (
              <Tours name={element.name} image={element.image} />
             ))}
            </div>
           <Footer/>
    </>)
}

export default Home;