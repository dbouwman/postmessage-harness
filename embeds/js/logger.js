
function appendToLog (msg) {
  console.log(msg);
  const li = document.createElement('li');
  li.textContent = msg;
  document.querySelector('#logger').appendChild(li);
}

  