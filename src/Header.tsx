import { Link } from "react-router-dom";

function Header(){
    return(
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="text-xl tracking-tight">Dimas Faidh Muzaki 13520156</span>
            </div>
            <span className="font-semibold text-white text-xl tracking-tight mx-1">MST-Based Clustering</span>
            <div className="w-full block  items-center w-auto">
                <div className="text-sm flex-grow">
                    <Link to="/" className="block mt-4 inline-block mt-0 text-teal-200 hover:text-white mr-4">
                        New Clustering
                    </Link>
                    <Link to="/log" className="block mt-4 inline-block mt-0 text-teal-200 hover:text-white mr-4">
                        Clustering Log
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;