/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const runFetch = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, { mode: "cors" });
        const json = await res.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    runFetch();
  }, []);

  console.log(data)
  return { data, error, isLoading };
};

export default UseFetch;
