import "./style.css";

export default function createNav() {
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
  home.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActivePage(home);
  });

  const menu = document.createElement("a");
  menu.textContent = "Menu";
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActivePage(menu);
  });

  const about = document.createElement("a");
  about.textContent = "About";
  about.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActivePage(about);
  });

  name.appendChild(heading1);
  name.appendChild(heading3);
  links.appendChild(home);
  links.appendChild(menu);
  links.appendChild(about);
  nav.appendChild(name);
  nav.appendChild(links);

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
