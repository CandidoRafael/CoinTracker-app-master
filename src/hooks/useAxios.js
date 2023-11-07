import axios from 'axios';
import { useEffect, useState } from 'react'

const useAxios = (url) => {

   const [data, setData] = useState([]); 
   const [error, setError] = useState(null); 
   const [loaded, setLoaded] = useState(false); 

    useEffect(() => {

        let isMounted = true

        const fetchData = async () => {
            try {
             setLoaded(true)

             const resp = await axios(url)
             if(isMounted) {
                setData(resp.data)
             }

            } catch (error) {
                setError(error)
            }

            if(isMounted) {
              setLoaded(false)
            }
        }

        fetchData()

        return () => { isMounted = false }
    }, [url])

    return { data, error, loaded }
}

export default useAxios