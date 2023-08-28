import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";

function createNav() {
  const nav = document.createElement("nav");

  const name = document.createElement("div");
  const links = document.createElement("div");
  name.classList.add("name");
  links.classList.add("links");

  const heading1 = document.createElement("h1");
  heading1.textContent = "MAGNOLIA";
  const heading3 = document.createElement("h3");
  heading3.textContent = "RESTAURANT";

  const home = document.createElement("a");
  home.textContent = "Home";
  home.classList.add("active");
  const menu = document.createElement("a");
  menu.textContent = "Menu";
  const about = document.createElement("a");
  about.textContent = "About";

  name.appendChild(heading1);
  name.appendChild(heading3);
  links.appendChild(home);
  links.appendChild(menu);
  links.appendChild(about);
  nav.appendChild(name);
  nav.appendChild(links);

  home.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActivePage(home);
    loadHome();
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActivePage(menu);
    loadMenu();
  });

  about.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActivePage(about);
  });

  return nav;
}

function setActivePage(tag) {
  const tags = document.querySelectorAll("nav a");

  tags.forEach((tag) => {
    if (tag !== this) {
      tag.classList.remove("active");
    }
  });

  tag.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function initializeWebsite() {
  const body = document.querySelector("body");

  body.appendChild(createNav());
  body.appendChild(createMain());

  setActivePage(document.querySelector("nav a"));
  loadHome();
}

export default initializeWebsite;
