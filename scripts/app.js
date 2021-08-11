const backgroundBtn = document.getElementById("backgroundBtn");

const getRandomColor = () => {

}

// function that takes a color and changes html body background
const changeBackground = () => {
  const randomColor = getRandomColor();

  document.body.backgroundColor = randomColor;
};

// events
backgroundBtn.addEventListener("click", changeBackground);