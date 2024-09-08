const navLogo = document.querySelector("#nav_logo");
const navLogoRect = navLogo.getBoundingClientRect();
const headerLogo = document.querySelector("#header_board_logo");

function positionYElement(element,posY){
  element.style.transform = `translateY(${posY}px)`;
}

function checkElementPosition(element){
  const elementRect = element.getBoundingClientRect();
  return elementRect.top;
}

let initialHeaderLogoPosition,
    initialHeight,
    targetHeight,
    scrollDistance,
    heightDifference

function setup(){
  const startAnimationBox = document.querySelector("#start_animation_box");
  const headerLogoTargetArea = startAnimationBox.getBoundingClientRect();
  headerLogo.style.width = `${headerLogoTargetArea.width}px`;
  const headerLogoTargetAreaMaxWidth = (2 * headerLogoTargetArea.width) / 3;
  headerLogo.style.width = `${headerLogoTargetArea.width}px`;
  headerLogo.style.maxWidth = `${headerLogoTargetAreaMaxWidth}px`;
  initialHeaderLogoPosition = headerLogoTargetArea.top + headerLogoTargetArea.height - headerLogo.offsetHeight + window.scrollY;
  const headerLogoRect = headerLogo.getBoundingClientRect();

  positionYElement(navLogo, 0);
  positionYElement(headerLogo,initialHeaderLogoPosition);

  initialHeight = headerLogo.offsetHeight;  
  targetHeight = navLogoRect.height;  

  scrollDistance = Math.round(headerLogoTargetArea.bottom - headerLogoRect.height - navLogoRect.top + window.scrollY);
  heightDifference = initialHeight - targetHeight;
  const headerLogoHeight = 174 / 826 * headerLogoTargetAreaMaxWidth;
  headerLogo.style.height = `${headerLogoHeight}px`;

}

setup();


window.addEventListener("resize",()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setup()
});


window.addEventListener("scroll",()=>{
  const scrollY = window.scrollY;

  positionYElement(navLogo,-(scrollY*0.25));


  const targetPosition = 16;
  if(scrollY<=scrollDistance){
    positionYElement(headerLogo,initialHeaderLogoPosition - scrollY);
  } else if(targetPosition < checkElementPosition(headerLogo) && scrollY > scrollDistance ){
    positionYElement(headerLogo,targetPosition);
  }
 

  if (scrollY <= scrollDistance) {
    const newHeight = initialHeight - (scrollY / scrollDistance) * heightDifference;
    headerLogo.style.height = `${newHeight}px`;
  } else {
    headerLogo.style.height = `${targetHeight}px`;
  }
})