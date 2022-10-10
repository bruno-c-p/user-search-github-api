import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.querySelector("#btn-search").addEventListener("click", () => {
  const username = document.querySelector("#input-search").value
  if (validadeEmptyInput(username)) return
  getUserData(username)
})

document.querySelector("#input-search").addEventListener("keyup", (e) => {
  const username = e.target.value
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13

  if (isEnterKeyPressed) {
    if (validadeEmptyInput(username)) return
    getUserData(username)
  }
})

function validadeEmptyInput(username) {
  if (username.length === 0) {
    alert("Preencha o campo com o nome do usuário do Github")
    return true
  }
}

async function getUserData(username) {
  const userResponse = await getUser(username)

  if (userResponse.message === "Not Found") {
    screen.renderNotFound()
    return
  }

  const repositoriesResponse = await getRepositories(username)

  user.setInfo(userResponse)
  user.setRepositories(repositoriesResponse)
  screen.renderUser(user)
}
