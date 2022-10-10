import { baseUrl, repositoriesQuantity } from "./variables.js"
import { user } from "./services/user.js"
import { repositories } from "./services/repositories.js"

document.querySelector("#btn-search").addEventListener("click", () => {
  const username = document.querySelector("#input-search").value
  getUserProfile(username)
})

document.querySelector("#input-search").addEventListener("keyup", (e) => {
  const username = e.target.value
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13

  if (isEnterKeyPressed) {
    getUserProfile(username)
  }
})

function getUserProfile(username) {
  user(username).then((userData) => {
    let userInfo = `
    <div class="info">
      <img src="${userData.avatar_url}" alt="Foto de perfil do usuário"/>
      <div class="data">
        <h1>${userData.name ?? "Não possui nome cadastrado!"}</h1>
        <p>${userData.bio ?? "Não possui bio cadastrada!"}</p>
      </div>
    </div>`

    document.querySelector(".profile-data").innerHTML = userInfo

    getUserRepositories(username)
  })
}

function getUserRepositories(username) {
  repositories(username).then((reposData) => {
    let repositoriesItens = ""

    reposData.forEach((repo) => {
      repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}<a></li>`
    })

    document.querySelector(".profile-data").innerHTML += `
    <div class="repositories section">
      <h2>Repositórios</h2>
      <ul>${repositoriesItens}</ul>
    </div>`
  })
}
