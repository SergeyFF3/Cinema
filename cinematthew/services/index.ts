const headers = {
  "X-API-KEY": "PJ4RCBN-Q2VM0MD-QX88NJS-42CQBEJ",
};

export async function getProduct() {
  try {
    const response = await fetch("https://api.kinopoisk.dev/v1.4/movie/500", {
      headers,
    });
    if (!response.ok) {
      console.error("Failed to fetch products", response.statusText);
      return null;
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
