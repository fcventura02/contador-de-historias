import {
  HeroEquipment,
  Location,
  Incident,
  HeroGenre,
  Tale,
} from "./prehistorias.js";
var btm = document.getElementById("backPage");
btm.addEventListener("click", () => (window.location.href = "/"));
//text
var i = 0;
let oldImg = null;
const year = new Date().getFullYear();
var txt = `Este {typeTale}.
A história se passa {typeLocation}, 
{locationDescription} Está história fala sobre um jovem Herói 
chamado {name}, {typeHeroGenre}. O equipamento deste herói é 
{HeroEquipment} Na grande era de ouro que ocorreu em ${year}, 
foi previsto uma grande profecia que viria a acontecer.
Chegado o grande dia da profecia, enquanto os moradores olhavam para
os céus e avistaram algo estranho, algo começou a acontecer, algo que 
ninguém imaginaria. {typeIncident}. Foi quando nosso herói tomou em mãos sua
arma e gritou, "Pelo meu povo, eu lutarei e os protegerei.". Com isso foi iniciado uma grande batalha
que nosso herói venceu com bastante custo, e ficaram todos felizes.... Fim`;
var speed = 85;
const {
  nameHero,
  typeHeroEquipment,
  typeHeroGenre,
  typeIncident,
  typeLocation,
  typeTale,
} = localStorage;

if (!nameHero) window.location.href = "/";

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
  if (i === txt.length) {
    const audio = document.getElementById("audio");
    console.log(audio);
    audio.pause();
  }
}

//background
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
slide.innerHTML = String(
  Location[typeLocation].bg.map((img, index) => {
    return `<div class='${
      !index ? "active" : "notActived"
    }' style='background-image:url(${img})'></div>`;
  })
).replaceAll(",", "");

window.setInterval(changeBG, 5000);
window.setTimeout(typeWriter(), 5000);
