//variables
const drums = document.querySelectorAll('.drum');
const drumLength = drums.length;

//change the backgroung-image value from full path to only filename format
function getImageName(nodeElem) {
  let srcValue = window.getComputedStyle(nodeElem, null).getPropertyValue("background-image");
  return srcValue.slice(srcValue.lastIndexOf('/')+1, srcValue.lastIndexOf('.'));
}

//animate for btns
function animateDrums(drumNode) {
  drumNode.classList.add('pressed');
  setTimeout(() => drumNode.classList.remove('pressed'), 400 );
}

//addEventListener onClick
for (let i=0; i<drumLength; i++) {
  drums[i].addEventListener('click', function(){
    new Audio(`sounds/${getImageName(this)}.mp3`).play();
    animateDrums(this);
  });
}

//addEventListener onKeyDown
document.addEventListener('keydown', (event) =>{
  const keyName = event.key;
  for (let i=0; i<drumLength; i++) {
    let drum = drums[i];
    if (keyName === drum.textContent) {
      new Audio(`sounds/${getImageName(drum)}.mp3`).play();
      animateDrums(drum);
    }
  }
});
