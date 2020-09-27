const bodyContent = document.querySelector('body')
let readerMarker = document.createElement("div")

readerMarker.style.height = "4px"
readerMarker.style.width = "0px"
readerMarker.style.backgroundColor = "rgb(68, 202, 103)"
readerMarker.style.position = "fixed"
readerMarker.style.top = "0"
readerMarker.style.left = "0"
readerMarker.style.zIndex = "9999"
readerMarker.style.transition = "1s"

document.body.append(readerMarker)

document.addEventListener("scroll", () => {
    const pageHeigth = bodyContent.offsetHeight
    const pagePositionY = window.pageYOffset

    const updatedtopBar = pagePositionY * 100 / (pageHeigth-870) 

    readerMarker.style.width = updatedtopBar + "%"
})

