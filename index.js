const sideBar = document.querySelector('.left.desactive')
const closeBtn = document.querySelector('.close')
const openBtn = document.querySelector('.open')

openBtn.addEventListener('click',() => {
    sideBar.className = 'left active'
})
closeBtn.addEventListener('click',() => {
    sideBar.className = 'left desactive'
})