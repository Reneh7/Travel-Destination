import "./Header.css"
import { Link } from "react-router-dom";
function Header()
{
    return (
    <>
     <header className="header">
       <h1>
        <Link to="/">Home</Link>
        Tours</h1>
     </header>
    </>)
}
export default Header;
