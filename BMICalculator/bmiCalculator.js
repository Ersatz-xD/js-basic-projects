const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const h = parseInt(document.querySelector("#height").value);
  const w = parseInt(document.querySelector("#weight").value);
  const res = document.querySelector("#results");

  if (h === "" || h < 0 || isNaN(h)) {
    res.innerHTML = "Give a valid height xD.";
  } else if (w === "" || w < 0 || isNaN(w)) {
    res.innerHTML = "Give a valid weight xD.";
  } else {
   const bmi = (w / ((h * h) / 10000)).toFixed(2);
   res.innerHTML = `<span>${bmi}</span>`
  }
});
