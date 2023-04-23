import { useState, useEffect } from "react";

export function useFetch(url, datos) {
  const [data, setData] = useState(url, datos);

  useEffect(() => {
    fetch(url, datos)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return { data };
}
