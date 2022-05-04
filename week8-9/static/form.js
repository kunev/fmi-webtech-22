function submitForm(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let dataJson = Object.fromEntries(formData.entries())
  let options = {
    method: event.target.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataJson),
  };
  fetch(event.target.action, options).then((response) => {
    let responseJson = response.json();
    if (response.status === 200) {
      document.location.reload();
    } else {
      alert(responseJson);
    }
  });
}

document.addEventListener('DOMContentLoaded',() => {
  document.querySelector('form').addEventListener('submit', submitForm);
});
