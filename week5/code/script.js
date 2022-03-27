function remove() {
  var listItem = document.querySelector('li:last-child');
  listItem.parentElement.removeChild(listItem);
}

document.addEventListener("DOMContentLoaded", function () {
  let removeButton = document.getElementById('btn-remove');
  removeButton.addEventListener("click", remove);
});
