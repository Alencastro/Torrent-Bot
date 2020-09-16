let searchBar
let serachBarValue

function getValues() {
    searchBarValue = document.getElementById('searchBarInput').value
    document.getElementById('searchBarInput').value = null
    console.log(searchBarValue)
}

