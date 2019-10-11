import { useState, useEffect } from 'react';

export default function useJsonFetch(url) {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(url, {
         //   method: 'GET',
         //   header: '*'
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then(d => {
                    setItems(d)
                })
            }
        })
        .catch(err => console.log(err))
    }, [url])

    return [items];
}
