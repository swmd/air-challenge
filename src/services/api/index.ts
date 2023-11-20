const apiHost = process.env.REACT_APP_API_URL;
console.log("api host: ", apiHost);

export const get = (endpoint: string) => {
  return fetch(`${apiHost}${endpoint}`);
};

export const post = (endpoint: string, payload: object) => {
  return fetch(endpoint, {
    body: JSON.stringify(payload),
    method: "POST",
  });
};
