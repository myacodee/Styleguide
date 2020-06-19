const pickerColors = [ "#456B8C", "#00BCFF", "#08D2E7", "#2ADEAE", "#C6C86A", "#FFC308", "#FE8D70", "#FF638B", "#F31D96",  "#CE3BE9", "#7581FF",  "#8B56F4"]


const target1 = document.querySelector(".main-color__pick-box1");
const target2 = document.querySelector(".main-color__pick-box2");

const btn1 = document.querySelector(".main-color__primary-btn");
const btn2 = document.querySelector(".main-color__secondary-btn");

const water1 = document.querySelector(".main-color__water1");
const water2 = document.querySelector(".main-color__water2");

const dropdown = document.querySelector(".dropdown__btn");
const options = document.querySelector(".dropdown__options");
const arrow = document.querySelector(".dropdown__arrow");
const button = document.querySelector(".dropdown__btn");

/*  PICKER COLORS VISIBLE */
function showPicker(eClick, target) {
eClick.addEventListener("click", function(e) {
  target.classList.contains("visible") ? target.classList.toggle("hidden") &&
 target.classList.remove("visible") : target.classList.toggle("visible") &&
  target.classList.remove("hidden");
});
}

showPicker(btn1, target1);
showPicker(btn2, target2);
showPicker(btn1, water1);
showPicker(btn2, water2);
showPicker(dropdown, options);
showPicker(dropdown, arrow);
showPicker(dropdown, button);

/*  CREATE TEMPLATE - 12 COLORS  */
function logArrayElements(element) {
  let template = "<div class=\"main-color__picker\" style=\"background:" + element + "\" id=\"" + element + "\"></div>";
  target1.insertAdjacentHTML("beforeend", template);
  target2.insertAdjacentHTML("beforeend", template);
}
pickerColors.forEach(logArrayElements);


/*  CHANGE COLOR OF ELEMENTS  */
const idPrimary = document.getElementById("primary");
const idSecondary = document.getElementById("secondary");

function changeColors(target, variable, id, icon) {
target.childNodes.forEach(function(check){
  check.addEventListener("click", function(e) {
    //set the property color to all primary elements
    let root = document.documentElement;
    root.style.setProperty(variable, this.id);
    // hide the picker box
    target.classList.toggle("hidden");
    // change the water drop
    icon.classList.toggle("visible");
    // change the text under the color
    id.innerHTML= this.id;
  });
});
}

changeColors(target1, '--primary', idPrimary, water1);
changeColors(target2, '--secondary', idSecondary, water2);