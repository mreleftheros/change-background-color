const backgroundBtn = document.getElementById("backgroundBtn");

// function that returns a random color from colors array
const getRandomColor = () => {
  const colors = ["red", "green", "blue", "yellow", "magenta", "teal"];
  let len = colors.length;
  let randomIndex = Math.floor(Math.random() * len);

  return colors[randomIndex];
}

// function that takes a color and changes html body background
const changeBackground = () => {
  const randomColor = getRandomColor();

  document.body.style.backgroundColor = randomColor;
};

// events
backgroundBtn.addEventListener("click", changeBackground);