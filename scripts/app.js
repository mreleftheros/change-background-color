const backgroundBtn = document.getElementById("backgroundBtn");

const changeBackground = color => {
  document.body.backgroundColor = color;
}

// events
backgroundBtn.addEventListener("click", changeBackground);