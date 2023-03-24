const turnOn = document.getElementById("btn-turnOn");
const turOff = document.getElementById("btn-turnOff");
const lamp = document.getElementById("photo");

function isLightBulbBroken() {
  return lamp.src.indexOf("broken") > -1;
}

function lightBulbOn() {
  if (!isLightBulbBroken()) {
    lamp.src = "./img/turn-on-lamp.png";
  }
}

function lightBulbOff() {
  if (!isLightBulbBroken()) {
    lamp.src = "./img/turn-of-lamp.png";
  }
}

function brokeLightBulb() {
  lamp.src = "./img/lamp-broken.png";
}

turnOn.addEventListener("click", lightBulbOn);
turOff.addEventListener("click", lightBulbOff);
lamp.addEventListener("dblclick", brokeLightBulb);
lamp.addEventListener("mouseover", lightBulbOn);
lamp.addEventListener("mouseleave", lightBulbOff);
