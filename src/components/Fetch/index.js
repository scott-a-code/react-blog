import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
            .then(resp => {
                if (!resp.ok) {
                    throw Error('could not fetch data from resource')
                }
                return resp.json();
            })
            .then(data => {
                setError(null);
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else {
                setError(err.message)
                setIsPending(false);
            }})
            return () => abortCont.abort();
    }, [url])

return {data, isPending, error}

}

export default useFetch;