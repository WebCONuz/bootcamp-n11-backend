const database = [
  {
    name: "Marshall Bruce Mathers (eminem)",
    url: "./images/eminem.jpg",
  },
  {
    name: "Park Jae-Sang (psy)",
    url: "./images/psy.jpg",
  },
  {
    name: "Selena Gomes",
    url: "./images/selena.jpg",
  },
  {
    name: "Isabel Mebarak Ripoll (shakira)",
    url: "./images/shakira.jpg",
  },
];

async function getData() {
  const container = document.querySelector(".container");

  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  const result = data.slice(0, 50);

  result.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = element.url;

    const h2 = document.createElement("h2");
    h2.textContent = element.title;

    card.appendChild(img);
    card.appendChild(h2);

    container.append(card);
  });
}

function openModal() {
  const modal = document.querySelector(".modal");
  modal.style.cssText = "opacity: 1; visibility: visible;";
}
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.cssText = "opacity: 0; visibility: hidden;";
}
