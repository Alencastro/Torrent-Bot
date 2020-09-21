let body = document.querySelector('body')
let searchBarH1 = document.querySelector('#searchBarH1')
let searchBarInput = document.querySelector('#searchBarInput')
let searchBarButton = document.querySelector('#searchBarButton')
let imgFilm = document.querySelector('.imgFilm')
let scrollBackground = document.styleSheets[0].cssRules[4]
    

const greenOnclick = () =>{
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

    scrollBackground.style.transition = "3s"
    scrollBackground.style.backgroundColor = 'rgb(11, 141, 45)'
}

const blackOnclick = () => {
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
   
    scrollBackground.style.transition = "3s"
    scrollBackground.style.backgroundColor = 'rgb(20, 20, 20)'
} 

const whiteOnclick = () => {
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

    scrollBackground.style.transition = "3s"
    scrollBackground.style.backgroundColor = 'rgb(210, 210, 210)'

}

