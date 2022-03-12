document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".remove-me-button").forEach(removeMeButton => {
    removeMeButton.addEventListener("click", function (e) {
      e.target.parentNode.remove()
    });
  })
});

function remove() {
  try {
    var listItem = document.querySelector('li:last-child');
    listItem.parentElement.removeChild(listItem);
  } catch (error) {
    alert("There is no element available for removal!");
  }
}

function add() {

  // Gets the last child in the list
  try {
    var listItem = document.querySelector('li:last-child');

    // Makes new item from the last one with the next char
    var newItem = document.createElement('li');
    //alert(listItem.textContent.charCodeAt(0));
    if(listItem.textContent.charCodeAt(0)=='z'.charCodeAt(0)){
      var newItemChar = 'A'.charCodeAt(0);
    } else if(listItem.textContent.charCodeAt(0)=='Z'.charCodeAt(0)) {
      var newItemChar = '0'.charCodeAt(0);
    } else if(listItem.textContent.charCodeAt(0)=='9'.charCodeAt(0)){
      var newItemChar = 'a'.charCodeAt(0);
    } else {
      var newItemChar = listItem.textContent.charCodeAt(0) + 1;
    }
    var newItemTextContent = String.fromCharCode(newItemChar);
    newItem.appendChild(document.createTextNode(newItemTextContent));

    // Adds the child item we created to the list
    listItem.parentElement.appendChild(newItem);

  } catch (error) {
    var listItem = document.querySelector('ol');
    var newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode("a"));
    listItem.appendChild(newItem);
  }

  // Makes a button next to the new item with a onclick event for removeMe
  var removeMeButton = document.createElement("button");
  removeMeButton.addEventListener("click", function (e) {
    e.target.parentNode.remove()
  });
  removeMeButton.appendChild(document.createTextNode("-"));
  newItem.appendChild(removeMeButton);
}
