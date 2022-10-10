const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  username: "",
  repositories: [],

  setInfo(githubUser) {
    this.avatarUrl = githubUser.avatar_url
    this.name = githubUser.name
    this.bio = githubUser.bio
    this.username = githubUser.login
  },

  setRepositories(repositories) {
    this.repositories = repositories
  },
}

export { user }
