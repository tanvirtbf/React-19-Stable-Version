import { useEffect, useState } from "react";

export const useNetworkCall = (API_URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((d) => {
          setData(d.products);
        })
        .catch((err) => {
          setError("Some Error Found!");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 5000);
  }, []);

  return {data, loading, error}
}
