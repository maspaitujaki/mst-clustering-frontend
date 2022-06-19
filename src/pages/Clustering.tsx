import Layout from "./Layout";
import mario from '../images/mario.png';

const Clustering = () => {
    return (
        <Layout>
        <div className='flex border-2 p-2 rounded-md divide-x'>
          <div className=''>
            <form className='flex flex-col' action="">
              <label className='m-2 font-medium text-lg text-teal-800' htmlFor="dataFile">Insert CSV File</label>
              <input className='m-2' type="file" name="dataFile" accept=".csv" id="" />
              <div>  
                <label className='m-2 font-medium text-lg text-teal-800' htmlFor="countCluster">Number of cluster:</label>
                <input className='m-2 border border-black rounded w-12' type="number" name="clusterCount" id="" min={1}/>
              </div>
              <button className='border-teal-500 bg-teal-400 text-white font-semibold m-2 rounded-md border hover:bg-teal-500 hover:border-teal-600 active:mx-3'>Submit</button>
            </form>
          </div>
          <div className='w-full'>
            <img src={mario} alt="" />
          </div>
        </div>
      </Layout>
    )
}

export default Clustering;