import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>React MySQL</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/newtask">New Task</Link>
      </nav>
    </div>
  );
};

export default Navbar;
