export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: { 'X-API-KEY': import.meta.env.VITE_REACT_APP_API_TOKEN },
    });

    if (!response.ok)
      throw new Error(`Не удалось получить ${url}. Статус: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
};
