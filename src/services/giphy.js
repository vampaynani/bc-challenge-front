const GIPHY_SEARCH_URL = "https://api.giphy.com/v1/gifs/search";

export function search(query, page = 0, limit = 50) {
  return fetch(
    `${GIPHY_SEARCH_URL}?api_key=${
      process.env.REACT_APP_API_KEY
    }&q=${query}&limit=${limit}&offset=${page * limit}`
  ).then((res) => res.json());
}
