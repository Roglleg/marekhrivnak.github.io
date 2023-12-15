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

document.addEventListener('DOMContentLoaded', function () {
  var aboutSection = document.getElementById('about');

  // Function to change opacity when the about section is in view
  function changeOpacity() {
    var scrollPosition = window.scrollY;
    var aboutSectionPosition = aboutSection.offsetTop;

    // Adjust this value as needed based on your layout
    var offset = 100;

    if (scrollPosition >= aboutSectionPosition - offset) {
      // Change the opacity of your element here
      // For example, assuming you have an element with ID "yourElement"
      document.getElementById('topnav').style.backgroundColor ='rgba(10, 25, 47, 1)';
    } else {
      // Reset the opacity if not in the about section
      document.getElementById('topnav').style.backgroundColor = 'rgba(10, 25, 47, 0.1)';
    }
  }

  // Attach the function to the scroll event
  window.addEventListener('scroll', changeOpacity);

  // Call the function once to set the initial state
  changeOpacity();
});

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 80,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#ffffff"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "polygon": {
              "nb_sides": 5
          },
          "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
          }
      },
      "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
});



