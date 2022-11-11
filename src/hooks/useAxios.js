import { useEffect, useState } from "react";
import axios from "axios";
const useAxios = (params) => {

    const [isLoading,setIsLoaidng] = useState(false);
    const [response,setResponse] = useState([]);
    const [error,setError] = useState('');

    axios.defaults.baseURL = 'https://api.unsplash.com/';

    const fetchData = async(url) => {
        try{
            console.log(axios.defaults.baseURL + url)
            setIsLoaidng(true);
            const res = await axios(url);
            setResponse(res);
        }
        catch(err){
            setError(err);
        }
        finally{
            setIsLoaidng(false);
        }
    }

    useEffect(()=>{
        fetchData(params)
    },[params])

    return ({
        isLoading,
        response,
        error,
        fetchData
    })

}

// AccessKey : AFvenX_xNx8jN2meQf9V0PJmsAEFkFgIEH2NWUwAF2I
// SecretKey : u_Grimth2o16JLy2BKL3H9DIPu05y_jD_DeU5Z9BcSo
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
export default useAxios;