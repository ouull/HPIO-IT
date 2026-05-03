import { useEffect } from "react";


const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export async function getData(endpoint: string, setData: any) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${"http://localhost:8000"}/${endpoint}`);
                const data = await response.json()
                setData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    }, []);


}



