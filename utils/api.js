function getFirebaseURL(path) {
  return `${process.env.FIREBASE_API_URL}${path}`
}

export async function fetchAPI(path) {
  const requestUrl = getFirebaseURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}

export async function getCategories() {
  const categories = await fetchAPI("/categories")
  return categories
}

export async function getCategory(slug) {
  const categories = await fetchAPI(`/categories?slug=${slug}`)
  return categories?.[0]
}

export async function getProducts() {
  const products = await fetchAPI("/products")
  return products
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`)
  return products?.[0]
}
