import "./style.css";

function createHome() {
  const home = document.createElement("section");
  home.classList.add("home");

  const paragraph1 = createParagraph("delightful experiences");
  const paragraph2 = createParagraph("Order online or visit us!");
  const heading1 = document.createElement("h1");
  heading1.textContent = 'Welcome to "Magnolia Restaurant"';

  home.appendChild(paragraph1);
  home.appendChild(heading1);
  home.appendChild(paragraph2);

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
