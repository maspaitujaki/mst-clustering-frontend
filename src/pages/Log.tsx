import LogCard from "../components/LogCard";
import Layout from "./Layout";

const Log = () => {
    return (
        <Layout>
            <div className="grid grid-cols-4 gap-4">
                <LogCard/>
                <LogCard/>
                <LogCard/>
                <LogCard/>
                <LogCard/>
                <LogCard/>
            </div>
        </Layout>
    )
}

export default Log;