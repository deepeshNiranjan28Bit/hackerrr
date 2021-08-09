const API_BASE_URL = "https://hn.algolia.com/api/v1";

export async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then((r) =>
    r.json()
  );
  return response;
}
