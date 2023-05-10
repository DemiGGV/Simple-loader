const jsLoader = document.querySelector(".js-loader");
jsLoader.classList.toggle("loader");

async function fu() {
  console.log("Little lamb!");
  jsLoader.classList.toggle("loader");
}
const timerId = setTimeout(fu, 3000);
