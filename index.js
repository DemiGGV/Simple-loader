const jsLoader = document.querySelector(".js-loader");
jsLoader.classList.toggle("loader");

// Toggle class 'loader' to switch visibility
async function fu() {
  console.log("Little lamb!");
  jsLoader.classList.toggle("loader");
}
const timerId = setInterval(fu, 3000);
