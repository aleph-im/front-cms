import { useState, useEffect, useCallback } from "react";

const fetchPromises: Record<string, Promise<string[]>> = {};

const useCachedData = (
  key: string,
  fetchData: () => Promise<any>,
  cacheDurationMinutes: number = 1
) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    setLoading(true);

    const cachedData = localStorage.getItem(key);

    if (cachedData) {
      const { items, expiresAt } = JSON.parse(cachedData);
      const currentTime = Date.now();

      if (Number(currentTime) < Number(expiresAt)) {
        setData(items);
        setLoading(false);
        return;
      }
    }

    if (!fetchPromises[key]) {
      fetchPromises[key] = (async () => {
        try {
          const newData = await fetchData();
          localStorage.setItem(
            key,
            JSON.stringify({
              items: newData,
              timestamp: Date.now() + cacheDurationMinutes * 60000,
            })
          );

          return newData;
        } catch (error) {
          console.error("Failed to fetch data:", error);
          throw error;
        }
      })();
    }

    try {
      const newData = await fetchPromises[key];
      setData(newData);
    } finally {
      delete fetchPromises[key];
      setLoading(false);
    }
  }, [key, fetchData, cacheDurationMinutes]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading };
};

export default useCachedData;
