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
import { useNetworkCall } from "./hooks/useNetworkCall";

const API_URL = "https://dummyjson.com/products";


function App() {
  const {data, loading, error} = useNetworkCall(API_URL)

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (data.length === 0) {
    return <h1>Data Not Found!</h1>;
  }

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;
