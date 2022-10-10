import { baseUrl, repositoriesQuantity } from "../variables"

async function getRepositories(username) {
  const response = await fetch(
    `${baseUrl}/${username}/repos?per_page=${repositoriesQuantity}`
  )
  return await response.json()
}

export { getRepositories }
