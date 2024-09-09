const langButton = document.querySelector("#lang-button");
const langButtonParent = langButton.parentElement;
const langSelection = document.querySelector("#lang-selection");
const langItems = langSelection.querySelectorAll("li");
const dropdownIcon = document.querySelector("#lang-dropdown-icon")
let isLangMenuClose = true;


function rotateChevron(direction){
  if(direction==="bottom"){
    dropdownIcon.style.transform="rotate(180deg)";
    return;
  }
  dropdownIcon.style.transform="rotate(0deg)";
}

function toggleLangMenu(){
  isLangMenuClose = !isLangMenuClose;
  langButtonParent.classList.toggle("active");
}

langButton.addEventListener("click",()=>{
  toggleLangMenu();
  rotateChevron(isLangMenuClose? "bottom" : "top");
}) 

langItems.forEach(langItem => {
  langItem.addEventListener("click",function(e) {
    console.log(this.getAttribute("data-lang"))
  })
})

