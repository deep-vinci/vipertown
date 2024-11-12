const contributorsDiv = document.querySelector(".contributors");

const fetchedData = [
    {
      "login": "deep-vinci",
      "id": 170743483,
      "node_id": "U_kgDOCi1Wuw",
      "avatar_url": "https://avatars.githubusercontent.com/u/170743483?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/deep-vinci",
      "html_url": "https://github.com/deep-vinci",
      "followers_url": "https://api.github.com/users/deep-vinci/followers",
      "following_url": "https://api.github.com/users/deep-vinci/following{/other_user}",
      "gists_url": "https://api.github.com/users/deep-vinci/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/deep-vinci/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/deep-vinci/subscriptions",
      "organizations_url": "https://api.github.com/users/deep-vinci/orgs",
      "repos_url": "https://api.github.com/users/deep-vinci/repos",
      "events_url": "https://api.github.com/users/deep-vinci/events{/privacy}",
      "received_events_url": "https://api.github.com/users/deep-vinci/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false,
      "contributions": 32
    },
    {
      "login": "HarshitFusion",
      "id": 187978988,
      "node_id": "U_kgDOCzRU7A",
      "avatar_url": "https://avatars.githubusercontent.com/u/187978988?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/HarshitFusion",
      "html_url": "https://github.com/HarshitFusion",
      "followers_url": "https://api.github.com/users/HarshitFusion/followers",
      "following_url": "https://api.github.com/users/HarshitFusion/following{/other_user}",
      "gists_url": "https://api.github.com/users/HarshitFusion/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/HarshitFusion/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/HarshitFusion/subscriptions",
      "organizations_url": "https://api.github.com/users/HarshitFusion/orgs",
      "repos_url": "https://api.github.com/users/HarshitFusion/repos",
      "events_url": "https://api.github.com/users/HarshitFusion/events{/privacy}",
      "received_events_url": "https://api.github.com/users/HarshitFusion/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false,
      "contributions": 1
    }
  ]

const getContributors = () => {
    // fetch("https://api.github.com/repos/deep-vinci/vipertown/contributors")
    // .then(data => data.json())
    // .then(data => 
    //     console.log(data)
    // )
    fetchedData.forEach(elem => {
        // contributorsDiv.textContent += `${elem.login.toLowerCase()} `
    })
}

getContributors()