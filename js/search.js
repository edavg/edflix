let availableKeywords = [
  { title: "Pulp Fiction", link: "pages/play-pf.html" },
  { title: "Big Fish", link: "pages/play-bf.html" },
  { title: "El Señor de los Anillos: El Retorno del Rey", link: "pages/play-lotr.html" },
  { title: "El Silencio de los Corderos", link: "pages/play-sotl.html" },
  { title: "Akira", link: "pages/play-akira.html" },
  { title: "Bram Stoker Dracula", link: "pages/play-btd.html" },
  { title: "El Bueno, el Malo y el Feo", link: "pages/play-tgtbatu.html" },
  { title: "El Laberinto del Fauno", link: "pages/play-eldf.html" },
  { title: "Lock, Stock & Two Smoking Barrels", link: "pages/play-lock.html" },
  { title: "House of the Dragon", link: "pages/play-hotd.html" },
  { title: "Cyberpunk: Edgerunners", link: "pages/play-cpe.html" },
  { title: "Severance", link: "pages/play-severance.html" },
  { title: "Evangelion", link: "pages/evangelion.html" },
  { title: "Fargo", link: "pages/play-fargo.html" },
  { title: "The Bear", link: "pages/play-thebear.html" },
  { title: "The Office", link: "pages/play-theoffice.html" },
  { title: "Invincible", link: "pages/play-invincible.html" }
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