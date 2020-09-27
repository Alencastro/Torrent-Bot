let body = document.querySelector('body')
let searchBarH1 = document.querySelector('#searchBarH1')
let searchBarInput = document.querySelector('#searchBarInput')
let searchBarButton = document.querySelector('#searchBarButton')
let imgFilm = document.querySelector('.imgFilm')
let bodyScrollBackground = document.styleSheets[0].cssRules[4]
let filmBoxScrollThum = document.styleSheets[0].cssRules[21]

const green = () =>{
    body.style.backgroundColor = "rgb(21, 151, 55)"
    body.style.transition = "3s"

    searchBarH1.style.color = "white"
    searchBarH1.style.transition = "3s"

    searchBarInput.style.backgroundColor = "rgb(68, 202, 103)"
    searchBarInput.style.transition = "3s"

    searchBarButton.style.backgroundColor = "white"
    searchBarButton.style.transition = "3s"

    searchBarButton.style.color = "rgb(0, 91, 24)"
    searchBarButton.style.transition = "3s"


    bodyScrollBackground.style.backgroundColor = 'rgb(11, 141, 45)'

    filmBoxScrollThum.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'

    readerMarker.style.backgroundColor = 'white'
}

const black = () => {
    body.style.backgroundColor = "black"
    body.style.transition = "3s"

    searchBarH1.style.color = "white"
    searchBarH1.style.transition = "3s"

    searchBarInput.style.backgroundColor = "rgb(150, 150, 150)"
    searchBarInput.style.transition = "3s"

    searchBarButton.style.backgroundColor = "rgb(150, 150, 150)"
    searchBarButton.style.transition = "3s"

    searchBarButton.style.color = "white"
    searchBarButton.style.transition = "3s"


    bodyScrollBackground.style.backgroundColor = 'rgb(20, 20, 20)'

    filmBoxScrollThum.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'

    readerMarker.style.backgroundColor = 'white'
} 

const white = () => {
    body.style.backgroundColor = "white"
    body.style.transition = "3s"

    searchBarH1.style.color = "rgb(68, 202, 103)"
    searchBarH1.style.transition = "3s"

    searchBarInput.style.backgroundColor = "rgb(68, 202, 103)"
    searchBarInput.style.transition = "3s"

    searchBarButton.style.backgroundColor = " rgb(0, 91, 24)"
    searchBarButton.style.transition = "3s"

    searchBarButton.style.color = "white"
    searchBarButton.style.transition = "3s"

    
    bodyScrollBackground.style.backgroundColor = 'rgb(210, 210, 210)'

    filmBoxScrollThum.style.backgroundColor = 'rgba(68, 202, 103, 0.5)'

    readerMarker.style.backgroundColor = 'rgb(68, 202, 103)'
}