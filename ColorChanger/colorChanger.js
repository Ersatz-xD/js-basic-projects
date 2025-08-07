const btn = document.querySelectorAll(".btn");
const body = document.querySelector("body");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const bgColor = e.target.id;
    if (bgColor === "grey") {
      body.style.backgroundColor = "#6b7280";
    } else if (bgColor === "white") {
      body.style.backgroundColor = "#f8fafc";
    } else if (bgColor === "blue") {
      body.style.backgroundColor = "#3b82f6";
    } else if (bgColor === "yellow") {
      body.style.backgroundColor = "#facc15";
    }
  });
});
