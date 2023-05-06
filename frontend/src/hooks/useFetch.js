import { useState, useEffect } from "react";

export function useFetch(type, url, datos) {
  const [data, setData] = useState(url, datos);

  useEffect(() => {
    fetch(url, datos)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return { data };
}
