import {useState, useEffect} from 'react'
import supabase from '@/config/supabase';

export default function useFetchWrite(name, method) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const callApi = async (form, id) => {
        setLoading(true)
        if(method == 'POST'){
            const { data, error } = await supabase.from(name).insert(form);
            if (error) {
                console.log(error)
                setError(error)
                setLoading(false)
            }
            if (data) {
                setData(data);
                setLoading(false)
            }
        }
        if(method == 'PUT'){
            const { data, error } = await supabase.from(name).update(form).eq('id', id);
            if (error) {
                console.log(error);
                setError(error)
                setLoading(false)
            }
            if (data) {
                console.log(data)
                setData(data);
                setLoading(false)
            }
        }
        // setLoading(false)
    }

    useEffect(() => {
        callApi()
    }, [])
    return { callApi, data, error, loading }
}
