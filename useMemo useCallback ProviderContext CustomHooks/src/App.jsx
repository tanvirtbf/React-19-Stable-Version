import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import "./App.css";

const API_URL = "https://dummyjson.com/products";

function App() {
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

  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>{error}</h1>
  }

  if(data.length===0){
    return <h1>Data Not Found!</h1>
  }

  return <div>{data.map((item) => <p>{item.title}</p>)}</div>;
}

export default App;
