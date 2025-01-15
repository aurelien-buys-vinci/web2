import {useNavigate } from "react-router-dom";


const NavBar = () => {
    const navigate = useNavigate();
    return (
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/books")}>library</button>
      </nav>
    );
  };

export default NavBar;