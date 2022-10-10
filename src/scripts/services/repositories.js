import { baseUrl, repositoriesQuantity } from "../variables"

async function repositories(username) {
  const response = await fetch(
    `${baseUrl}/${username}/repos?per_page=${repositoriesQuantity}`
  )
  return await response.json()
}

export { repositories }
