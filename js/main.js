
/*==================  portfolio love icons  =======================*/
let heartIcons = document.querySelectorAll(".portfolio-item-heart");
heartIcons.forEach(her => {
  her.addEventListener("click", () => {
    let value = +her.lastElementChild.textContent;
    let firstChild = her.firstElementChild;

    if (firstChild.attributes.name.value == "heart") {
      firstChild.attributes.name.value = "heart-outline";
      her.lastElementChild.innerHTML = ++value;
    } else {
      firstChild.attributes.name.value = "heart";
      her.lastElementChild.innerHTML = --value;
    }
  });
});

/*==================  start toggle themes  =======================*/
let body = document.querySelector("body");
let themeBtn = document.querySelector(".theme");
let popup = document.querySelector(".settings-popup");
let closeBtn = document.querySelector(".close-btn");
let light = document.querySelector(".bg-1");
let dim = document.querySelector(".bg-2");
let dark = document.querySelector(".bg-3");
let activeBg = document.querySelectorAll(".choose-bg > div");
let colorPalette = document.querySelectorAll(".choose-color span");
// show and hide settings popup


const openThemePopup = () => {
  popup.classList.add("show");
};
const closeThemePopup = (e) => {
  if (e.target.classList.contains("settings-popup")) {
    popup.classList.remove("show");
  }
};
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});
themeBtn.addEventListener("click", openThemePopup);
popup.addEventListener("click", closeThemePopup);


/*=========  Change Main color =========================*/
// let root = document.querySelector(":root");
// let bodydark = document.querySelector(":root");
const removeColorActive = () => {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPalette.forEach(color => {
  color.addEventListener("click", () => {
    if (color.classList.contains("color-1")) {
      body.style.cssText = "--main-color:hsl(252, 75%, 60%);";
      removeColorActive();
      color.classList.add("active");
    }
    else if (color.classList.contains("color-2")) {
      body.style.cssText = "--main-color:hsl(37, 75%, 60%);";
      removeColorActive();
      color.classList.add("active");
    }
    else if (color.classList.contains("color-3")) {
      body.style.cssText = "--main-color:hsl(345, 94%, 49%);";
      removeColorActive();
      color.classList.add("active");
    }
    else if (color.classList.contains("color-4")) {
      body.style.cssText = "--main-color:hsl(152, 57%, 49%);";
      removeColorActive();
      color.classList.add("active");
    }
    else if (color.classList.contains("color-5")) {
      body.style.cssText = "--main-color:hsl(302, 72%, 38%);";
      removeColorActive();
      color.classList.add("active");
    }
  });
});



/*=========  Change Background=========================*/
const removeThemeSelector = () => {
  activeBg.forEach(active => {
    active.classList.remove("active");
  });
};
light.addEventListener("click", () => {
  body.classList.remove("dark");
  removeThemeSelector();
  light.classList.add("active");
});
dim.addEventListener("click", () => {
  body.classList.add("dark");
  removeThemeSelector();
  dim.classList.add("active");
});
dark.addEventListener("click", () => {
  body.classList.add("dark");
  removeThemeSelector();
  dark.classList.add("active");
});
