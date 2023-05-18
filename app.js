const canvas = document.querySelector(".canvas");
const colorText = document.querySelector("h1");
const generator = document.querySelector(".generator");

generator.addEventListener('click', () => {
    const red = randomNum();
    const green = randomNum();
    const blue = randomNum();
    if (red + green + blue > 90) {
        colorText.style.color = "white";
    }
    else {
        colorText.style.color = "black";
    }
    canvas.bgColor = `rgba(${red},${green},${blue})`;
    colorText.innerText = canvas.bgColor;
});

const randomNum = () => {
    return Math.floor(Math.random() * 255);
}