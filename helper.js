const contributorsDiv = document.querySelector(".contributors");


const getContributors = () => {
    fetch("https://api.github.com/repos/deep-vinci/vipertown/contributors")
    .then(data => data.json())
    .then(data => 
        console.log(data)
    )
}

getContributors()