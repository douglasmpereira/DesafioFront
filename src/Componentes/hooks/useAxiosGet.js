import { useState, useEffect } from "react"
import api from "../service/api"


const useAxiosGet = (endpoint) => {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await api.get(endpoint)
            setTasks(data)
        }
        fetchData();
    }, [endpoint])

    return { tasks }
}

export default useAxiosGet;