const langSelection = document.querySelector("#lang-selection");
const langItems = langSelection.querySelectorAll("li");
const chevron = document.querySelector("#lang-dropdown")
let isLangMenuClose = true;


function rotateChevron(direction){
  if(direction==="left"){
    chevron.style.transform="rotate(180deg)";
    return;
  }
  chevron.style.transform="rotate(90deg)";
}

function toggleLangMenu(){
  isLangMenuClose = !isLangMenuClose;
}

langItems.forEach(langItem => {
  langItem.addEventListener("click",(e) => {
    toggleLangMenu();
    rotateChevron(isLangMenuClose ? "left" : "right");
    // const lang=langItem.getAttribute("data-lang");
  })
})