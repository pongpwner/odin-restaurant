//homepage module
(function () {
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
  let navMenu = document.createElement("li");
  navMenu.textContent = "Menu";
  //append header nodes
  pageContent.appendChild(pageContainer);
  pageContainer.appendChild(header);

  navList.appendChild(navHome);
  navList.appendChild(navMenu);
  navbar.appendChild(navList);
  header.appendChild(logo);
  header.appendChild(navbar);
  //content
  let content = document.createElement("div");
  content.classList.add("content");
  pageContainer.appendChild(content);
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

  content.appendChild(p1);
  content.appendChild(p2);
  content.appendChild(p3);
  content.appendChild(p4);
  content.appendChild(p5);
})();
