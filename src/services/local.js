const LOCALHOST_URL = "http://localhost:8000";

export function saveHistory(query, page) {
  return fetch(`${LOCALHOST_URL}/history`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, page }),
  }).then((res) => res.json());
}
