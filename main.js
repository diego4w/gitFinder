const text = document.getElementById('txt')
const res = document.getElementById('res')
const btn = document.getElementById('btn')

function search(){
    const texto = text.value
    apiGit(texto)
    apiGitRepo(texto)
    text.value = ''
}

function apiGit(texto){
    fetch(`https://api.github.com/users/${texto}`)
    .then((res) => res.json())
    .then(data => {
        res.innerHTML = `<div class="ppp">
        <div class="profile">
        <img src="${data.avatar_url}" alt="avatar">
        <h1>${data.login}</h1>
        <div class="bio">
            <p>${data.bio}</p>
        </div>
        <strong class="follow">${data.followers} followers | ${data.following} following</strong>
        <div class="options">
            <a href="#respositories" class="buttonR">repositories</a>
        </div>
    </div>
    </div>`
    })
}

function apiGitRepo(texto){
    fetch(`https://api.github.com/users/${texto}/repos`)
        .then((res) => res.json())
        .then(dat => {
            dat.forEach(({name, description}) => {
                res.innerHTML += `<div class="styleres">
                <div id="respositories" class="respositories">
                <h1>${name}</h1>
                <p>${description}</p>
            </div>
            </div>`
            });
            console.log(dat);
        })
}
btn.onclick = search