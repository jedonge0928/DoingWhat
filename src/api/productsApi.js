export async function productsApi() {
  const response = await fetch(process.env.PUBLIC_URL + "/data.json", {
    credentials: "include",
  });
  const result = await response.json();
  return result;
}
