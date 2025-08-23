import { useState, useEffect } from "react";

function useFetch(url){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const fetchData = async(fetchUrl= url )=>{
  setLoading(true);
  setError(null);
  try{
    const response = await fetch(fetchUrl);
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    setData(result);
  }catch(error){
    setError(error.message);
  }finally{
    setLoading(false);
  }
};

useEffect(()=>{
  if(url){
    fetchData();
  }
}, [url]);

return {data, loading, error,refetch: fetchData};
}

export default useFetch;

