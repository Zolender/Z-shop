import { useState, useEffect } from "react";

const useFetch = <T>(url: string, options?: RequestInit) => {
    const [data, setData] = useState<T| null>(null)
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(()=>{

        const controller = new AbortController()
        const fetchData = async()=>{
            setIsLoading(true)
            try{
                const response = await fetch(url, {...options, signal: controller.signal})
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const json = await response.json();
                setData(json)
            }catch(err){
                if(err instanceof Error && err.name !== "AbortError")setError(err)
            }finally{
                setIsLoading(false)
            }

            fetchData()
            return ()=>controller.abort()
        }

    }, [url])


    return {data, isLoading, error};
}

export default useFetch;