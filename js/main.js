const menuBurgerBt = document.querySelector(".menu-btn");
const menuList = document.querySelector(".header__nav");
const wrapper = document.querySelector("body");

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const blockId = anchor.getAttribute("href");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    menuList.classList.remove("active");
    wrapper.classList.remove("scroll");
    menuBurgerBt.classList.remove("active");
  });
}

menuList;
menuBurgerBt.addEventListener("click", () => {
  menuList.classList.toggle("active");
  menuBurgerBt.classList.toggle("active");
  wrapper.classList.toggle("scroll");
});
