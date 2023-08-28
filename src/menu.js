import "./style.css";

function createMenu() {
  const menu = document.createElement("section");
  menu.classList.add("menu");

  const img = createDiv("img", "image");
  img.appendChild(createHeader("Our Menu"));

  const recommend = createDiv("recommend", "recommend");
  recommend.appendChild(createParagraph("pull up a chair"));
  recommend.appendChild(createHeader("Main Courses"));

  const chefMenu = createDiv("chefMenu", "chef-menu");

  const div1 = createDiv("div1", "items");
  const item1 = createDiv("item1", "item");
  const item2 = createDiv("item2", "item");
  const item3 = createDiv("item3", "item");
  const item4 = createDiv("item4", "item");

  const div2 = createDiv("div2", "items");
  const item5 = createDiv("item5", "item");
  const item6 = createDiv("item6", "item");
  const item7 = createDiv("item7", "item");
  const item8 = createDiv("item8", "item");

  item1.appendChild(createParagraph("Lamb Salad with Fregola"));
  item1.appendChild(createParagraph("$52.5"));
  item2.appendChild(
    createParagraph("Pappardelle with Sea Urchin & Cauliflower")
  );
  item2.appendChild(createParagraph("$56.5"));
  item3.appendChild(createParagraph("Scallop Sashimi with Meyer Lemon Confit"));
  item3.appendChild(createParagraph("49.5"));
  item4.appendChild(createParagraph("eatloaf with Black Pepper"));
  item4.appendChild(createParagraph("$34.5"));
  item5.appendChild(createParagraph("Crab with Curry Sauce"));
  item5.appendChild(createParagraph("$46.5"));
  item6.appendChild(
    createParagraph("Braised Leeks with Mozzarella & Fried Egg")
  );
  item6.appendChild(createParagraph("$24.5"));
  item7.appendChild(createParagraph("Apple Chicken with White Sauce BBQ"));
  item7.appendChild(createParagraph("54.5"));
  item8.appendChild(createParagraph("Prawn Sausage with Cassoulet"));
  item8.appendChild(createParagraph("$49.5"));

  div1.appendChild(item1);
  div1.appendChild(item2);
  div1.appendChild(item3);
  div1.appendChild(item4);
  div2.appendChild(item5);
  div2.appendChild(item6);
  div2.appendChild(item7);
  div2.appendChild(item8);
  chefMenu.appendChild(div1);
  chefMenu.appendChild(div2);
  menu.appendChild(img);
  menu.appendChild(recommend);
  menu.appendChild(chefMenu);

  return menu;
}

function createHeader(text) {
  const header = document.createElement("h1");
  header.textContent = text;
  return header;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function createDiv(name, text) {
  name = document.createElement("div");
  name.classList.add(text);
  return name;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
