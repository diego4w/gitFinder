const text = document.getElementById('txt')
const res = document.getElementById('res')
const btn = document.getElementById('btn')

function search(){
    const texto = text.value
    apiGit(texto)
    text.value = ''
}

function apiGit(texto){
    fetch(`https://api.github.com/users/${texto}`)
    .then((res) => res.json())
    .then(data => {
        res.innerHTML = `<div class="profile">
        <img src="${data.avatar_url}" alt="avatar">
        <h1>${data.login}</h1>
        <div class="bio">
            <p>${data.bio}</p>
        </div>
    </div>`
    })
}

btn.onclick = search