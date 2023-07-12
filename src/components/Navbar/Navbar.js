import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tours/:id">City Details</Link>
    </nav>
  );
}

export default Navbar;
