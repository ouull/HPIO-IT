import { useEffect } from "react";


const BASE_URL: string = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function getData(endpoint: string, setData: any) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/${endpoint}`);
                const data = await response.json()
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
}



