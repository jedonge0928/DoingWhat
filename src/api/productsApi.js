export async function productsApi() {
  const response = await fetch("/data.json", {
    credentials: "include",
  });
  const result = await response.json();
  return result;
}
