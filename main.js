document.querySelector("button#first-btn").addEventListener("click", showProjects)
document.querySelector("button#second-btn").addEventListener("click", showSkills)

function showProjects() {
    document.querySelector("div#skills").classList.add("hidden")
    document.querySelector("div#projects").classList.remove("hidden")
    document.querySelector("button#first-btn").classList.add("clicked-btn")
    document.querySelector("button#second-btn").classList.remove("clicked-btn")
    document.querySelector("button#first-btn").classList.remove("active")

}


function showSkills() {
    document.querySelector("div#skills").classList.remove("hidden")
    document.querySelector("div#projects").classList.add("hidden")
    document.querySelector("button#second-btn").classList.add("clicked-btn")
    document.querySelector("button#first-btn").classList.remove("clicked-btn")
    document.querySelector("button#first-btn").classList.remove("active")
}

document.getElementById("moon-btn").addEventListener("click", darkTheme)

document.getElementById("sun-btn").addEventListener("click", lightTheme)


function darkTheme() {
    document.querySelector("body").classList.add("dark-theme")
    document.getElementById("moon-btn").classList.add("icon-hidden")
    document.getElementById("sun-btn").classList.remove("icon-hidden")
}

function lightTheme() {
    document.querySelector("body").classList.remove("dark-theme")
    document.getElementById("sun-btn").classList.add("icon-hidden")
    document.getElementById("moon-btn").classList.remove("icon-hidden")
}





const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile-border`, { delay: 400 })
sr.reveal(`.profile-name`, { delay: 500 })
sr.reveal(`.profile-profession`, { delay: 600 })
sr.reveal(`.profile-info-group`, { interval: 100, delay: 700 })
sr.reveal(`.profile-social`, { delay: 700 })
sr.reveal(`.profile-button`, { delay: 800 })
sr.reveal(`.filters-content`, { delay: 900 })
sr.reveal(`.filters`, { delay: 1000 })








// =================BUTTONS-THEME=====================\\


document.querySelector("button.purple-btn").addEventListener("click", purpleChange)
document.querySelector("button.blue-btn").addEventListener("click", blueChange)
document.querySelector("button.pink-btn").addEventListener("click", pinkChange)
document.querySelector("button.teal-btn").addEventListener("click", tealChange)
document.querySelector("button.orange-btn").addEventListener("click", orangeChange)
document.querySelector("button.color-theme").addEventListener("click", dropList)


function dropList() {
    document.querySelector("ul.list-themes").classList.toggle("unwrap")
}



function purpleChange() {
    document.body.classList.add("purple-theme")
    document.body.classList.remove("pink-theme")
    document.body.classList.remove("blue-theme")
    document.body.classList.remove("teal-theme")
    document.body.classList.remove("orange-theme")
    document.querySelector("ul.list-themes").classList.remove("unwrap")
}
function tealChange() {
    document.body.classList.remove("purple-theme")
    document.body.classList.remove("pink-theme")
    document.body.classList.remove("blue-theme")
    document.body.classList.add("teal-theme")
    document.body.classList.remove("orange-theme")
    document.querySelector("ul.list-themes").classList.remove("unwrap")
}
function blueChange() {
    document.body.classList.remove("purple-theme")
    document.body.classList.remove("pink-theme")
    document.body.classList.add("blue-theme")
    document.body.classList.remove("teal-theme")
    document.body.classList.remove("orange-theme")
    document.querySelector("ul.list-themes").classList.remove("unwrap")
}
function pinkChange() {
    document.body.classList.remove("purple-theme")
    document.body.classList.add("pink-theme")
    document.body.classList.remove("blue-theme")
    document.body.classList.remove("teal-theme")
    document.body.classList.remove("orange-theme")
    document.querySelector("ul.list-themes").classList.remove("unwrap")

}
function orangeChange() {
    document.body.classList.remove("purple-theme")
    document.body.classList.add("orange-theme")
    document.body.classList.remove("blue-theme")
    document.body.classList.remove("teal-theme")
    document.body.classList.remove("pink-theme")
    document.querySelector("ul.list-themes").classList.remove("unwrap")
}







