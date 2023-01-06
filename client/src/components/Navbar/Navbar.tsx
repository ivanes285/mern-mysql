import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-800  flex justify-between px-20 py-4 text-xl items-center flex-wrap ">
     <Link to="/"><h1 className="text-2xl font-bold  ">React MySQL</h1></Link>
      <nav className=" gap-6 flex flex-row flex-wrap">
        <Link className=" hover:border-b border-red-500 " to="/">Home</Link>
        <Link className=" hover:border-b border-red-500 " to="/newtask">NewTask</Link>
      </nav>
    </div>
  );
};

export default Navbar;
