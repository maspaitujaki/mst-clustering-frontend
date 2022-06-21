import { Link, useParams } from "react-router-dom"
import Layout from "./Layout"
import "./LogDetail.css"
import notFoundImg from "../images/404.png"
import React from "react"
import axios from "axios"
import url from "../url"
const LogDetail = () => {
    const params = useParams()
    const id = params.id
    const [log, setLog] = React.useState<any>({})
    const [img, setImg] = React.useState("");

    const getImg = (id: string | undefined) => {
        axios
            .get(url+"/clustering/img/"+id,{
                responseType : "arraybuffer"
            })
            .then(res => {
                const imageBlob = new Blob([res.data])
                const imageObjectURL = URL.createObjectURL(imageBlob);
                console.log(imageObjectURL)
                setImg(imageObjectURL);
            })
            .catch(err => {
                console.log(err)
            })
    }

    React.useEffect(
        () => {
            axios
                .get(
                    url+"/clustering/"+id,
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                )
                .then(res => {
                    console.log(res.data);
                    setLog(res.data)
                    getImg(id)
                })
                .catch(err => {
                    setImg(notFoundImg)
                });
        },[id]);
    
    return (
        <Layout>
            <div className="flex justify-center">
                <div className="border-2 rounded-md py-2 px-3">
                    <img className="max-h-96" src={img} alt="test"/>
                    <p className='font-medium text-lg text-teal-800'>File: <span>{log.nama_file_asli}</span></p>
                    <p className='font-medium text-lg text-teal-800'>Number of clusters: <span>{log.n_cluster}</span></p>
                    <Link className="text-blue-500 hover:text-blue-600 hover:underline" to="/log">← Back</Link>
                </div>
            </div>
        </Layout>
    )
}
export default LogDetail