let exit = document.getElementById("exitOfHeader");
let f = function () {
  menubarIcon.classList.toggle("show");
};
let menubarIcon = document.getElementById("iconmenu");
menubarIcon.onclick = f;
exit.onclick = f;
