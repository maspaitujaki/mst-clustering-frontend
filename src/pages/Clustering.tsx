import Layout from "./Layout";
import mario from '../images/mario.png';
import React, { SyntheticEvent } from "react";
import url from "../url";
import axios from "axios";

const Clustering = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [img, setImg] = React.useState(mario);

  const handleSubmit = (e: SyntheticEvent) =>{
    e.preventDefault();
    const form  = document.getElementById("formClustering");
    const formData = new FormData(form as HTMLFormElement);
    console.log(url + "/clustering");
    axios.post(url + "/clustering", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      responseType: 'arraybuffer'
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      const imageBlob = new Blob([res.data])
      const imageObjectURL = URL.createObjectURL(imageBlob);
      console.log(imageObjectURL)
      setImg(imageObjectURL);
      setErrorMessage("")
    })
    .catch(err => {
      if (err.response.status === 500){
        setErrorMessage("Server Error");
      } else if(err.response.status === 400){
        setErrorMessage("Bad Input");
      }
    });
  }
  
    return (
        <Layout>
        <div className='flex border-2 p-2 rounded-md divide-x'>
          <div className=''>
            <form id="formClustering" className='flex flex-col' encType="multipart/form-data">
              <label className='m-2 font-medium text-lg text-teal-800' htmlFor="dataFile">Insert CSV File</label>
              <input className='m-2' type="file" name="dataFile" accept=".csv" id="" />
              <div>  
                <label className='m-2 font-medium text-lg text-teal-800' htmlFor="countCluster">Number of cluster:</label>
                <input className='m-2 border border-black rounded w-12' type="number" name="clusterCount" id="" min={1}/>
              </div>
              <button onClick={handleSubmit} className='border-teal-500 bg-teal-400 text-white font-semibold m-2 rounded-md border hover:bg-teal-500 hover:border-teal-600 active:mx-3'>Submit</button>
              <p id="errorMessage" className="text-red-500 m-2 font-semibold">{errorMessage}</p>
            </form>
          </div>
          <div className='w-full'>
            <img src={img} alt="" />
          </div>
        </div>
      </Layout>
    )
}

export default Clustering;