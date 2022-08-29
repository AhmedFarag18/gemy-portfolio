let heartIcons = document.querySelectorAll(".portfolio-item-heart");

heartIcons.forEach(her => {
  her.addEventListener("click", () => {
    let value = +her.lastElementChild.textContent;
    let firstChild = her.firstElementChild;

    if (firstChild.classList.contains("far")) {
      firstChild.classList.remove("far");
      firstChild.className = "fas fa-heart";
      her.lastElementChild.innerHTML = ++value;
    } else {
      firstChild.classList.remove("fas");
      firstChild.className = "far fa-heart";
      her.lastElementChild.innerHTML = --value;
    }
  });
});