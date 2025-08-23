import { useState, useEffect } from "react";

function useFetch(url, options={}, autoRefreshInterval=null){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const fetchData = async(fetchUrl)=>{
  // If no URL provided or it's an event object, use the original URL
  const targetUrl = (!fetchUrl || typeof fetchUrl === 'object' ) ? url : fetchUrl;
  
  setLoading(true);
  setError(null);
  try{
    console.log("🚀 Fetching from URL:", targetUrl);
    const response = await fetch(targetUrl, options);
    
    console.log("📡 Response details:", {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      headers: {
        contentType: response.headers.get("content-type"),
        contentLength: response.headers.get("content-length")
      }
    });
    
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
    }

    // Check if response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("❌ Non-JSON response:", {
        contentType,
        textStart: text.substring(0, 200)
      });
      throw new Error(`Expected JSON but got ${contentType}. Response starts with: ${text.substring(0, 100)}...`);
    }

    const result = await response.json();
    console.log("✅ Successful API response:", result);
    setData(result);
  }catch(error){
    console.error("❌ Fetch error details:", {
      url: targetUrl,
      error: error.message,
      stack: error.stack
    });
    
    // User-friendly error messages
    if (error.message.includes("Failed to fetch")) {
      setError("Network error - Check your internet connection");
    } else if (error.message.includes("JSON") || error.message.includes("Unexpected token")) {
      setError("Server returned invalid data format (HTML instead of JSON)");
    } else {
      setError(error.message);
    }
  }finally{
    setLoading(false);
  }
};

useEffect(()=>{
  if(url){
    fetchData();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  if(autoRefreshInterval){
    const interval = setInterval(()=>{
      fetchData();
    }, autoRefreshInterval);
    return ()=>clearInterval(interval);
  }
}, [url]);

return {data, loading, error,refetch: fetchData};
}

export default useFetch;

