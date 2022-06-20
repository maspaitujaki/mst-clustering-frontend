import LogCard from "../components/LogCard";
import Layout from "./Layout";
import React from "react";
import axios from "axios";
import url from "../url";

const Log = () => {
    const [logs, setLogs] = React.useState<any[]>([]);

    React.useEffect(() => {
        axios.get(url+"/clustering",
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            console.log(res.data);
            setLogs(res.data);
        })
        .catch(err => {});
        
    }, []);

    return (
        <Layout>
            <div className="grid grid-cols-4 gap-4">
                {
                    logs.map(log => {
                        return <LogCard key={log.id} log={log} />
                    })
                }
            </div>
        </Layout>
    )
}

export default Log;