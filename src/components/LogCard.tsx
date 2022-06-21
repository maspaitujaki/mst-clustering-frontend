import { Link } from "react-router-dom";

const LogCard = (props:{log:any}) => {
    function padTo2Digits(num:number) {
        return num.toString().padStart(2, '0');
      }
      
      function formatDate(date:Date) {
        return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/');
      }
    return (
        <Link to={"/log/" + props.log.id} className="border-2 rounded-md p-2 bg-teal-200 border-teal-300 hover:bg-teal-300 hover:border-teal-400">
            <div className="flex flex-col font-semibold text-teal-900">
                <p>ID : <span>{props.log.id}</span></p>
                <p>Date : <span>{formatDate(new Date(props.log.tanggal))}</span></p>
                <p>File : <span>{props.log.nama_file_asli}</span></p>
                <p>N Cluster : <span>{props.log.n_cluster}</span></p>
            </div>
        </Link>
    )
}

export default LogCard;