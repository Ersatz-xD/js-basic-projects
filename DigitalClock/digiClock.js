const clock = document.getElementById("clock");

setInterval(() => {
  let time = new Date();
  clock.innerHTML = time.toLocaleTimeString();

  // Analog Clock
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = ((seconds / 60) * 360) + 90;
  const minuteDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  const hourDeg = ((hours % 12) / 12 * 360) + ((minutes/60)*30) + 90;

  document.querySelector(".second-hand").style.transform = `rotate(${secondDeg}deg)`;
  document.querySelector(".min-hand").style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector(".hour-hand").style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
