require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const gitHubData = {
    "login": "Luxmi007",
    "id": 94300957,
    "node_id": "U_kgDOBZ7rHQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/94300957?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Luxmi007",
    "html_url": "https://github.com/Luxmi007",
    "followers_url": "https://api.github.com/users/Luxmi007/followers",
    "following_url": "https://api.github.com/users/Luxmi007/following{/other_user}",
    "gists_url": "https://api.github.com/users/Luxmi007/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Luxmi007/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Luxmi007/subscriptions",
    "organizations_url": "https://api.github.com/users/Luxmi007/orgs",
    "repos_url": "https://api.github.com/users/Luxmi007/repos",
    "events_url": "https://api.github.com/users/Luxmi007/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Luxmi007/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Luxmi",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-11-14T13:54:28Z",
    "updated_at": "2024-06-17T18:47:48Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('luxmi');
})

app.get('/login', (req,res) => {
    res.send('<h1> Welcome to the login page<h1/>')
})

app.get('/github',(req, res) => {
    res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})