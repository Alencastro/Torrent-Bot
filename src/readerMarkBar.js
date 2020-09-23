const bodyContent = document.querySelector('body')
let topBar = document.createElement("div")

topBar.style.height = "4px"
topBar.style.width = "0px"
topBar.style.backgroundColor = "rgb(21, 151, 55)"
topBar.style.position = "fixed"
topBar.style.top = "0"
topBar.style.left = "0"
topBar.style.zIndex = "9999"
topBar.style.transition = "1s"

document.body.append(topBar)

document.addEventListener("scroll", () => {
    const pageHeigth = bodyContent.offsetHeight
    const pagePositionY = window.pageYOffset

    const updatedtopBar = pagePositionY * 100 / (pageHeigth-870) 

    topBar.style.width = updatedtopBar + "%"
})

