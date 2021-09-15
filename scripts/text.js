import {
  HeroEquipment,
  Location,
  Incident,
  HeroGenre,
  Tale,
} from "./prehistorias.js";
var i = 0;
let oldImg = null;
var txt = `Este {typeTale}.
A história se passa {typeLocation}, 
{locationDescription} Está história fala sobre um jovem Herói 
chamado {name}, {typeHeroGenre}. O equipamento deste herói é 
{HeroEquipment} {typeIncident}`;
var speed = 85;
const {
  nameHero,
  typeHeroEquipment,
  typeHeroGenre,
  typeIncident,
  typeLocation,
  typeTale,
} = localStorage;

txt = txt
  .replace("{typeTale}", Tale[typeTale])
  .replace("{name}", nameHero)
  .replace("{typeLocation}", Location[typeLocation].name)
  .replace("{locationDescription}", Location[typeLocation].description)
  .replace("{typeHeroGenre}", HeroGenre[typeHeroGenre])
  .replace("{HeroEquipment}", HeroEquipment[typeHeroEquipment])
  .replace("{typeIncident}", Incident[typeIncident]);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("textContain").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function changeBG() {
  var randomBack = Math.floor(Math.random() * Location[typeLocation].bg.length);
  if (oldImg !== null) slide.children[oldImg].className = "notActived";
  slide.children[randomBack].className = "active";
  oldImg = randomBack;
  slide.children[
    randomBack
  ].style.backgroundImage = `url('${Location[typeLocation].bg[randomBack]}')`;
}
const slide = document.getElementById("slide");
slide.innerHTML =  String(Location[typeLocation].bg.map((img, i) => {
  return `<div class='${
    !i ? "active" : "notActived"
  }' style='background-image:url(${img})'></div>`;
})).replaceAll(",","");

window.setInterval(changeBG, 5000);
window.setTimeout(typeWriter(), 5000);
