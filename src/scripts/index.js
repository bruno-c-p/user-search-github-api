import { baseUrl, repositoriesQuantity } from "./variables.js"
import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.querySelector("#btn-search").addEventListener("click", () => {
  const username = document.querySelector("#input-search").value
  getUserData(username)
})

document.querySelector("#input-search").addEventListener("keyup", (e) => {
  const username = e.target.value
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13

  if (isEnterKeyPressed) {
    getUserData(username)
  }
})

async function getUserData(username) {
  const userResponse = await getUser(username)
  const repositoriesResponse = await getRepositories(username)

  user.setInfo(userResponse)
  user.setRepositories(repositoriesResponse)
  screen.renderUser(user)
}
