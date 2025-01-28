let $ = document;
let gElems = $.getElementsByClassName("change-logo-color")[0];
let abstractLink = $.querySelector(".abstract-link");
let helpCenterItem = $.getElementsByClassName("items")[0];
let signInBtn = $.getElementById("btn-sign-in");
let learnMoreLinks = $.querySelectorAll(".learn-links");

let footerLinks = $.querySelectorAll(".footer-links");
let searchLabel = $.getElementById("search-label");

abstractLink.addEventListener("mousemove", () => {
  gElems.setAttribute("fill", "gray");
  abstractLink.style.color = "gray";
});
abstractLink.addEventListener("mouseleave", () => {
  gElems.setAttribute("fill", "white");
  abstractLink.style.color = "white";
});

helpCenterItem.addEventListener("mousemove", () => {
  helpCenterItem.style.textDecoration = "underline";
});
helpCenterItem.addEventListener("mouseleave", () => {
  helpCenterItem.style.textDecoration = "none";
});

signInBtn.addEventListener("mousemove", () => {
  signInBtn.style.color = "black";
  signInBtn.style.backgroundColor = "white";
});
signInBtn.addEventListener("mouseleave", () => {
  signInBtn.style.backgroundColor = "#4c5fd5";
  signInBtn.style.color = "white";
});

for (let index = 0; index < 7; index++) {
  learnMoreLinks[index].addEventListener("mousemove", () => {
    learnMoreLinks[index].style.textDecoration = "underline";
  });
  learnMoreLinks[index].addEventListener("mouseleave", () => {
    learnMoreLinks[index].style.textDecoration = "none";
  });
}




