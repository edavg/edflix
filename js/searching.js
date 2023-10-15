let availableKeywords = [
  { title: "Pulp Fiction", link: "play-pf.html" },
  { title: "Big Fish", link: "play-bf.html" },
  { title: "El Señor de los Anillos: El Retorno del Rey", link: "play-lotr.html" },
  { title: "El Silencio de los Corderos", link: "play-sotl.html" },
  { title: "Akira", link: "play-akira.html" },
  { title: "Bram Stoker Dracula", link: "play-btd.html" },
  { title: "El Bueno, el Malo y el Feo", link: "play-tgtbatu.html" },
  { title: "El Laberinto del Fauno", link: "play-eldf.html" },
  { title: "Lock, Stock & Two Smoking Barrels", link: "play-lock.html" },
  { title: "House of the Dragon", link: "play-hotd.html" },
  { title: "Cyberpunk: Edgerunners", link: "play-cpe.html" },
  { title: "Severance", link: "play-severance.html" },
  { title: "Evangelion", link: "evangelion.html" },
  { title: "Fargo", link: "play-fargo.html" },
  { title: "The Bear", link: "play-thebear.html" },
  { title: "The Office", link: "play-theoffice.html" },
  { title: "Invincible", link: "play-invincible.html" }
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.querySelector("#search-input");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = availableKeywords.filter((keyword) => {
      return keyword.title.toLowerCase().includes(input.toLowerCase());
    }).slice(0,3);
  }
  display(result);
}

function display(result){
  const content = result.map((item) => {
    return `<li><a href="${item.link}">${item.title}</a></li>`;
  });

  resultsBox.innerHTML = `<ul>${content.join('')}</ul>`;
}