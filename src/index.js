import "./style.css";
import dish1 from "./assets/adeptus-temptation.png";
import dish2 from "./assets/gsb.jpg";
//homepage module
let HomePage = (function () {
  //page nodes
  let pageContent = document.querySelector("#content");
  let pageContainer = document.createElement("div");
  pageContainer.classList.add("container");
  //header
  let header = document.createElement("header");
  header.classList.add("header");

  let logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "Wanmin Restaurant";

  let navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  let navList = document.createElement("ul");

  let navHome = document.createElement("li");
  navHome.textContent = "Home";
  navHome.classList.add("current");

  let navMenu = document.createElement("li");
  navMenu.addEventListener("click", () =>
    loadNewPage(pageContent, Menu.loadMenuPage)
  );
  navMenu.textContent = "Menu";

  let navContact = document.createElement("li");
  navContact.addEventListener("click", () => console.log("contact"));
  navContact.textContent = "Contact";

  //content
  let content = document.createElement("div");
  content.classList.add("content");

  let p1 = document.createElement("p");
  p1.textContent = "Best Restaurant in Teyvat!";
  let p2 = document.createElement("p");
  p2.textContent = "Home of the Master Chef Xiangling!";
  let p3 = document.createElement("p");
  p3.textContent =
    "We have a large menu that holds many different genres of food. We have many traditional dishes, but also many unique dishes exclusive only to us!";
  let p4 = document.createElement("p");
  p4.textContent =
    "Looking to try something new? Try the daily special! (something new everytime)";
  let p5 = document.createElement("p");
  p5.textContent =
    " Dine in, carry out, or even have your food delivered by the Traveler!";

  return {
    loadHomePage: function () {
      pageContent.appendChild(pageContainer);
      pageContainer.appendChild(header);
      navList.appendChild(navHome);
      navList.appendChild(navMenu);
      navList.appendChild(navContact);
      navbar.appendChild(navList);
      header.appendChild(logo);
      header.appendChild(navbar);
      pageContainer.appendChild(content);
      content.appendChild(p1);
      content.appendChild(p2);
      content.appendChild(p3);
      content.appendChild(p4);
      content.appendChild(p5);
    },
  };
})();

// menu module

let Menu = (function () {
  const MenuItems = [
    { dish: "adeptus temptation", price: 3000, image: dish1 },
    { dish: "golden shrimp balls", price: 2000, image: dish2 },
  ];
  //page nodes
  let pageContent = document.querySelector("#content");
  let pageContainer = document.createElement("div");
  pageContainer.classList.add("container");
  //header
  let header = document.createElement("header");
  header.classList.add("header");

  let logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "Wanmin Restaurant";

  let navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  let navList = document.createElement("ul");

  let navHome = document.createElement("li");
  navHome.textContent = "Home";
  navHome.addEventListener("click", () =>
    loadNewPage(pageContent, HomePage.loadHomePage)
  );
  let navMenu = document.createElement("li");

  navMenu.textContent = "Menu";
  navMenu.classList.add("current");

  let navContact = document.createElement("li");
  navContact.addEventListener("click", () => console.log("contact"));
  navContact.textContent = "Contact";

  //content
  let content = document.createElement("div");
  content.classList.add("content");

  let menu = document.createElement("ul");
  menu.classList.add("menu");

  MenuItems.forEach((dish) => {
    let item = document.createElement("li");
    item.classList.add("menu-dish");

    let image = new Image();
    image.src = dish.image;
    item.textContent = `${dish.dish}: ${dish.price}`;
    item.appendChild(image);
    menu.appendChild(item);
  });

  return {
    loadMenuPage: function () {
      ///append to page
      pageContent.appendChild(pageContainer);
      pageContainer.appendChild(header);
      navList.appendChild(navHome);
      navList.appendChild(navMenu);
      navList.appendChild(navContact);
      navbar.appendChild(navList);
      header.appendChild(logo);
      header.appendChild(navbar);
      pageContainer.appendChild(content);
      //
      content.appendChild(menu);
    },
  };
})();

//global function
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function loadNewPage(nodeToClear, pageLoad) {
  removeAllChildNodes(nodeToClear);

  pageLoad();
  return;
}
//first load
HomePage.loadHomePage();
