const colorThem = {
    elements: [
        document.querySelector('body'), document.querySelector('#searchBarInput'), document.querySelector('#searchBarButton'), document.querySelector('.imgFilm'), document.styleSheets[0].cssRules[4].cssText, document.querySelector('#searchBarH1') 
    ],

    backgrounds :{
        white: ['white', 'rgb(68, 202, 103)', 'rgb(0, 91, 24)', 'rgb(210, 210, 210)', 'rgb(21, 151, 55)',],
        green : ['rgb(21, 151, 55)',  'rgb(68, 202, 103)', 'white', 'rgb(11, 141, 45)', 'white', ],
        black: ['black', 'rgb(150, 150, 150)', 'rgb(150, 150, 150)', 'rgb(20, 20, 20)', 'white',]
    },

    h1Color: {
        white: 'rgb(0, 91, 24)',
        green: 'white',
        black: 'white'
    }
}

function green() {
    for (let c = 0; c < colorThem.elements.length; c++) {
        c < 6 ? colorThem.elements[c].style.backgroundColor = colorThem.backgrounds.green[c] : null
        colorThem.elements[c].style.transition = '5s'
        colorThem.elements[5].style.color = colorThem.h1Color.green 
        colorThem.elements[5].style.transition = '5s' 
        document.querySelector('#searchBarButton').style.color = 'rgb(21, 151, 55)'
    }
}

function black() {
    for (let c = 0; c < colorThem.elements.length; c++) {
        c < 6 ? colorThem.elements[c].style.backgroundColor = colorThem.backgrounds.black[c] : null
        colorThem.elements[c].style.transition = '5s'
        colorThem.elements[5].style.color = colorThem.h1Color.black 
        colorThem.elements[5].style.transition = '5s' 
        document.querySelector('#searchBarButton').style.color = 'white'

    }
}

function white() {
    for (let c = 0; c < colorThem.elements.length; c++) {
        c < 6 ? colorThem.elements[c].style.backgroundColor = colorThem.backgrounds.white[c] : null 
        colorThem.elements[c].style.transition = '5s'
        colorThem.elements[5].style.color = colorThem.h1Color.white 
        colorThem.elements[5].style.transition = '5s' 
        document.querySelector('#searchBarButton').style.color = 'white'
    }
}