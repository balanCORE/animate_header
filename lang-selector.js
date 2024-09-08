const langButton = document.querySelector("#lang-button");
const langButtonParent = langButton.parentElement;
const langSelection = document.querySelector("#lang-selection");
const langItems = langSelection.querySelectorAll("li");
const dropdownIcon = document.querySelector("#lang-dropdown-icon")
let isLangMenuClose = true;


function rotateChevron(direction){
  if(direction==="left"){
    dropdownIcon.style.transform="rotate(180deg)";
    return;
  }
  dropdownIcon.style.transform="rotate(90deg)";
}

function toggleLangMenu(){
  isLangMenuClose = !isLangMenuClose;
  langButtonParent.classList.toggle("active");
}

langButton.addEventListener("click",()=>{
  toggleLangMenu();
  const direction = isLangMenuClose? "left" : "right";
  rotateChevron(direction);
})

// langItems.forEach(langItem => {
//   langItem.addEventListener("click",(e) => {
//     toggleLangMenu();
//     rotateChevron(isLangMenuClose ? "left" : "right");
//     // const lang=langItem.getAttribute("data-lang");
//   })
// })

