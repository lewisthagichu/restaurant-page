import "./style.css";
import foodIcon from "./img/about-bottom.png";

function createAbout() {
  const about = document.createElement("section");
  about.classList.add("about");

  const img = createDiv("img", "image");
  img.appendChild(createHeader("About"));

  const mealPhoto = createDiv("mealPhoto", "meal-photo");
  const aboutBottomPhoto = new Image();
  aboutBottomPhoto.src = foodIcon;
  mealPhoto.appendChild(aboutBottomPhoto);

  const story = createDiv("story", "story");
  story.appendChild(createParagraph("honest, flavorfulfood, and"));
  story.appendChild(createHeader("A Few Words About Our Restaurant"));
  story.appendChild(
    createParagraph(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint impedit eius voluptatibus omnis temporibus laborum eveniet, voluptas, commodi expedita accusamus accusantium illo dolore deserunt natus quae quod atque eos beatae nulla quam, tempora deleniti. Cum incidunt in numquam ullam quaerat nulla odit. Laboriosam deserunt aut, iste debitis necessitatibus aspernatur sint! Consequatur, ea. Quas ut, officiis exercitationem rerum incidunt eaque modi qui ducimus doloribus eveniet earum blanditiis! Et nam voluptas debitis magnam architecto incidunt iure officia impedit eius quidem, ratione natus minus perferendis exercitationem tempora at reiciendis beatae cum commodi deleniti voluptatum? Veritatis non qui rem enim, quia debitis provident at!"
    )
  );

  about.appendChild(img);
  about.appendChild(mealPhoto);
  about.appendChild(story);

  return about;
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

function loadAbout() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createAbout());
}

export default loadAbout;
