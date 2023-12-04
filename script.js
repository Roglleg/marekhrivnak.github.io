const openHam = document.querySelector("#openHam");
const closeHam = document.querySelector("#closeHam");
const navigationItems = document.querySelectorAll(".navigation-item");
const navigationItemsContainer = document.querySelector("#navigation-items");

const hamburgerEvent = (navigation, close, open) => {
  navigationItemsContainer.style.display = navigation;
  closeHam.style.display = close;
  openHam.style.display = open;
};

const navigationEvent = () => {
  navigationItems.forEach((item) => {
    item.addEventListener("click", () => {
      navigationItemsContainer.style.display = "none";
      closeHam.style.display = "none";
      openHam.style.display = "block";
    });
  });
};

function setRightNavDisplay() {
  const screenWidth = window.innerWidth;
  const rightNav = document.querySelector(".right-nav");
  screenWidth > 800
    ? (rightNav.style.display = "flex")
    : (rightNav.style.display = "none");
}

openHam.addEventListener("click", () =>
  hamburgerEvent("flex", "block", "none")
);
closeHam.addEventListener("click", () =>
  hamburgerEvent("none", "none", "block")
);
navigationEvent();
window.addEventListener("resize", setRightNavDisplay);
