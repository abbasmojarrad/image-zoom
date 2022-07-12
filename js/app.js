const containerElm = document.querySelector(".container");
const img = document.querySelector("img");

containerElm.onmousemove = (event) => {
  const xPos = event.clientX - event.target.offsetLeft;
  const yPos = event.clientY - event.target.offsetTop;
  img.style.transformOrigin = `${xPos}px ${yPos}px`;
  img.style.transform = "scale(2)";
};

containerElm.onmouseleave = () => {
  img.style.transformOrigin = `center`;
  img.style.transform = "scale(1)";
};
