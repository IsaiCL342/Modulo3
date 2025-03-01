document.getElementById("changeBackground").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4FF33", "#FF33A8", "#33FFF5"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});