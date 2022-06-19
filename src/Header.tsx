function Header(){
    return(
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">MST-Based Clustering</span>
            </div>
            <span className="text-white text-xl tracking-tight mx-1">Dimas Faidh Muzaki 13520156</span>
            <div className="w-full block  items-center w-auto">
                <div className="text-sm flex-grow">
                    <a href="#responsive-header" className="block mt-4 inline-block mt-0 text-teal-200 hover:text-white mr-4">
                        New Clustering
                    </a>
                    <a href="#responsive-header" className="block mt-4 inline-block mt-0 text-teal-200 hover:text-white mr-4">
                        Clustering Log
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;