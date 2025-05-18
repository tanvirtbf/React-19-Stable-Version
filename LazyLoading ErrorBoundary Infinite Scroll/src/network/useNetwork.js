import axios from "axios";
import { useState } from "react";

function useNetWork() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function get(url) {
    setLoading(false);
    setError("");
    setData(null);
    axios.get(url).then((res) => {
      const data = [
          {
            id: 1,
            name: "iPhone 14",
            amount: 10,
          },
          {
            id: 2,
            name: "iPhone 14 Pro",
            amount: 5,
          },
          {
            id: 3,
            name: "iPhone 14 Pro Max",
            amount: 2,
          },
          {
            id: 4,
            name: "iPhone 14 Plus",
            amount: 8,
          },
          {
            id: 5,
            name: "iPhone SE",
            amount: 15,
          },
        ]
      setData(data)
    }).catch((err) => {
        console.log(err);
        setError(err);
    }).finally(() => {
        setLoading(false);
    })
  }
  return { get, data, loading, error };
}

export default useNetWork;
