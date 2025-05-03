const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
var element = document.getElementById('showResults');
element.style.display = 'none';
//todo: add event listener to searchInput

const dialog = document.getElementById("bookDialog");
function showDialog() {
    dialog.showModal();
}
function closeDialog() {
    dialog.close();

}


