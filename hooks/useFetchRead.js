import { useState, useEffect, useCallback } from "react";
import supabase from "@/config/supabase";

export default function useFetchRead(name) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const { data, error } = await supabase.from(name).select()
        if (error) {
            setError(error)
            setLoading(false)
        }
        if (data) {
            setData(data);
            setLoading(false)
        }
    }

    useEffect( () => {
        fetchData()
    }, [])
    return {fetchData, data, error, loading}

}
