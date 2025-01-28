$ = document;
let terialLinks = $.querySelectorAll(".li-links");

var i;
for (i = 0; i < 4; i++) {
  terialLinks[i].addEventListener("mousemove", () => {
  terialLinks[i].style.textDecoration = "underline";
  });
  terialLinks[i].addEventListener("mouseleave", () => {
    terialLinks[i].style.textDecoration = "none";
  });
}