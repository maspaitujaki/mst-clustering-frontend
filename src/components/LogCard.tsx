import { Link } from "react-router-dom";

const LogCard = () => {
    return (
        <Link to="" className="border-2 rounded-md p-2 bg-teal-200 border-teal-300 hover:bg-teal-300 hover:border-teal-400">
            <div className="flex flex-col font-semibold text-teal-900">
                <p>Date : <span></span></p>
                <p>File : <span></span></p>
                <p>N Cluster : <span></span></p>
            </div>
        </Link>
    )
}

export default LogCard;