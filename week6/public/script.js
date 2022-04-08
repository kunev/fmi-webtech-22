document.addEventListener("DOMContentLoaded", function() {
});

function remove() {
  var listItem = document.querySelector('li:last-child');
  listItem.parentElement.removeChild(listItem);
}
