const menu = document.querySelector(".hamburgurMenu", [0]);
const line1 = document.querySelector(".line1", [0]);
const line2 = document.querySelector(".line2", [0]);
const line3 = document.querySelector(".line3", [0]);
const overMenu = document.querySelector(".overMenu", [0]);
console.log(overMenu);
menu.addEventListener("click", () => {
    if (menu.classList.contains("isOpened")) {
        line2.classList.remove("active");
        line1.classList.remove("changeLine1");
        line3.classList.remove("changeLine2");
        menu.classList.remove("isOpened");
        overMenu.style.opacity = "0";
    } else {
        line2.classList.add("active");
        line1.classList.add("changeLine1");
        line3.classList.add("changeLine2");
        menu.classList.add("isOpened");
        overMenu.style.opacity = "1";
    }
});