document.querySelector("#btn-search").addEventListener("click", () => {
  const username = document.querySelector("#input-search").value
  getUserProfile(username)
})

async function user(username) {
  const response = await fetch(`https://api.github.com/users/${username}`)
  return await response.json()
}

function getUserProfile(username) {
  user(username).then((userData) => {
    let userInfo = `
    <img src="${userData.avatar_url}" alt="Foto de perfil do usuário"/>
    <div class="data">
      <h1>${userData.name ?? "Não possui nome cadastrado!"}</h1>
      <p>${userData.bio ?? "Não possui bio cadastrada!"}</p>
    </div>`

    document.querySelector(".profile-data").innerHTML = userInfo
  })
}
