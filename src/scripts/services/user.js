import { baseUrl } from "../variables.js"

async function getUser(username) {
  const response = await fetch(`${baseUrl}/${username}`)
  return await response.json()
}

export { getUser }
