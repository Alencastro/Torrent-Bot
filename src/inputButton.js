let serachBarValue

function getValues() {
    searchBarValue = document.getElementById('searchBarInput').value
    document.getElementById('searchBarInput').value = null
    console.log(searchBarValue)
}
window.addEventListener('keydown', (event) => {
    if (event.key == 'Enter'){
        searchBarValue = document.getElementById('searchBarInput').value
        document.getElementById('searchBarInput').value = null
        console.log(searchBarValue)
    }
});
