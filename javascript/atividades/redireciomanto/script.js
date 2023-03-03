const buttonA = document.querySelector('#buttonA')
const buttonB = document.querySelector('#buttonB')
const duckURL = "https://duckduckgo.com/"

buttonA.addEventListener('click', ()=>{
    window.location.replace(D=duckURL)
})

buttonB.addEventListener('click', ()=>{
    window.location.assign(D=duckURL)
})
