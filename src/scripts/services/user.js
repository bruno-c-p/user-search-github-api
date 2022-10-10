import { baseUrl } from "../variables"

async function user(username) {
  const response = await fetch(`${baseUrl}/${username}`)
  return await response.json()
}

export { user }
