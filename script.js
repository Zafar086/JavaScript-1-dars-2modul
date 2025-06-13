let kun = document.getElementById("kun");

let tun = document.getElementById("tun");

kun.addEventListener("click", () => {
  document.body.classList.add("kun");
  document.body.classList.remove("tun");
});

tun.addEventListener("click", () => {
  document.body.classList.add("tun");
  document.body.classList.remove("kun");
});
