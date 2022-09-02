/* ================== show and hide dropdoen menu ================== */
let heartIcons = document.querySelectorAll(".portfolio-item-heart");
let body = document.querySelector("body");
let themeBtn = document.querySelector(".theme");
let popup = document.querySelector(".settings-popup");
let closeBtn = document.querySelector(".close-btn");
let Bg1 = document.querySelector(".bg-1");
let Bg2 = document.querySelector(".bg-2");
let Bg3 = document.querySelector(".bg-3");
let activeBg = document.querySelectorAll(".choose-bg > div");
let colorPalette = document.querySelectorAll(".choose-color span");
let dropdown = document.querySelector('.navbar-links');
let toggleBtn = document.querySelector('.toggle');
let navbar = document.querySelector(".navbar");

/*============  Change Navbar Background ===================*/
window.onscroll = () => {
  if (window.pageYOffset >= 200) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
};
// toggle dropdown Navbar
toggleBtn.addEventListener("click", () => {
  dropdown.classList.toggle("dropdown");
});


/*==================  portfolio love icons  =======================*/
heartIcons.forEach(her => {
  her.addEventListener("click", () => {
    let value = +her.lastElementChild.textContent;
    let firstChild = her.firstElementChild;

    if (firstChild.attributes.name.value == "heart") {
      firstChild.attributes.name.value = "heart-outline";
      her.lastElementChild.innerHTML = --value;
    } else {
      firstChild.attributes.name.value = "heart";
      her.lastElementChild.innerHTML = ++value;
    }
  });
});

/*==================  start toggle themes  =======================*/

// show and hide settings popup
function openThemePopup() {
  popup.classList.add("show");
}
function closeThemePopup(e) {
  if (e.target.classList.contains("settings-popup")) {
    popup.classList.remove("show");
  }
}
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});
themeBtn.addEventListener("click", openThemePopup);
popup.addEventListener("click", closeThemePopup);


/*=========  Change Main color =========================*/
let colorValue1 = "--main-color:hsl(252, 75%, 60%);";
let colorValue2 = "--main-color:hsl(37, 75%, 60%);";
let colorValue3 = "--main-color:hsl(345, 94%, 49%);";
let colorValue4 = "--main-color:hsl(152, 57%, 49%);";
let colorValue5 = "--main-color:hsl(302, 72%, 38%);";

let color1 = document.querySelector(".color-1");
let color2 = document.querySelector(".color-2");
let color3 = document.querySelector(".color-3");
let color4 = document.querySelector(".color-4");
let color5 = document.querySelector(".color-5");

let storageColor = localStorage.getItem("gemy-color");


function removeColorActive() {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
}

function getMainColor(selectedColor, colorValue) {
  body.style.cssText = colorValue;
  removeColorActive();
  selectedColor.classList.add("active");
  localStorage.setItem("gemy-color", colorValue);
}

//=========== check color from localstorage
if (storageColor === colorValue1) {
  getMainColor(color1, colorValue1);
} else if (storageColor === colorValue2) {
  getMainColor(color2, colorValue2);
} else if (storageColor === colorValue3) {
  getMainColor(color3, colorValue3);
} else if (storageColor === colorValue4) {
  getMainColor(color4, colorValue4);
} else if (storageColor === colorValue5) {
  getMainColor(color5, colorValue5);
}

colorPalette.forEach(color => {
  color.addEventListener("click", () => {
    if (color.classList.contains("color-1")) {
      getMainColor(color, colorValue1);
    }
    else if (color.classList.contains("color-2")) {
      getMainColor(color, colorValue2);
    }
    else if (color.classList.contains("color-3")) {
      getMainColor(color, colorValue3);
    }
    else if (color.classList.contains("color-4")) {
      getMainColor(color, colorValue4);
    }
    else if (color.classList.contains("color-5")) {
      getMainColor(color, colorValue5);
    }
  });
});

/* =============== Change Theme Mode  ==================*/
let darkMode = localStorage.getItem('gemy-theme');

if (darkMode === 'dark') {
  enableDarkMode();
} else if (darkMode === 'light') {
  disableDarkMode();
} else if (darkMode === 'dim') {
  deviceThemeMode();
}

function removeThemeSelector() {
  activeBg.forEach(active => {
    active.classList.remove("active");
  });
}
function enableDarkMode() {
  localStorage.setItem('gemy-theme', 'dark');
  body.classList.add("dark");
  removeThemeSelector();
  Bg3.classList.add("active");
}
function disableDarkMode() {
  localStorage.setItem('gemy-theme', 'light');
  body.classList.remove("dark");
  removeThemeSelector();
  Bg1.classList.add("active");
}

function deviceThemeMode() {
  localStorage.setItem('gemy-theme', 'dim');
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  removeThemeSelector();
  Bg2.classList.add("active");
}

Bg1.addEventListener("click", () => disableDarkMode());
Bg2.addEventListener("click", () => deviceThemeMode());
Bg3.addEventListener("click", () => enableDarkMode());






