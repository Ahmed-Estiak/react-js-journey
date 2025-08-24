import { useState, useEffect, useCallback } from "react";

export function useApi(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

    
  }, [url, options]);
  useEffect(() => {
    if (url) fetchData();
  }, [url, fetchData]);

  return { data, loading, error, refetch:  fetchData };
}
