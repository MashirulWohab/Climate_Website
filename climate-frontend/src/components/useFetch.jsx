import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);      // Store the fetched data
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null);     // Track errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        const result = await response.json();
        setData(result); // Set the data once it's fetched
      } catch (err) {
        setError(err.message); // Capture any errors
      } finally {
        setLoading(false); // Always stop loading once fetch is complete
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
