var i = 0;
var txt = `What is Lorem Ipsum? 
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard dummy
text ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived not only
five centuries, but also the leap into electronic typesetting, remaining
essentially unchanged. It was popularised in the 1960s with the release of
Letraset sheets containing Lorem Ipsum passages, and more recently with
desktop publishing software like Aldus PageMaker including versions of
Lorem Ipsum.`;
var speed = 85;
const {
  nameHero,
  typeHeroEquipment,
  typeHeroGenre,
  typeIncident,
  typeLocation,
  typeTale,
} = localStorage;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("textContain").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
