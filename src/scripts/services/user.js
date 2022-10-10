import { baseUrl } from "../variables"

async function getUser(username) {
  const response = await fetch(`${baseUrl}/${username}`)
  return await response.json()
}

export { getUser }
