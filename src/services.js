export const Postapi = async (url, data, key) => {
  await fetch(`http://18.188.140.50/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem(key, JSON.stringify(data));
      return data;
    })
    .catch((e) => console.log(e));
};
