window.onload = () => {

    //Means to identify each table element

    let A = document.querySelectorAll('td')[0];
    let B = document.querySelectorAll('td')[1];
    let C = document.querySelectorAll('td')[2];
    let D = document.querySelectorAll('td')[3];



    //Setting box position defaults
    let isrotatedA = false;
    let isrotatedB = false;
    let isrotatedC = false;
    let isrotatedD = false;

//Event handlers to initiate each rotation and reversion
let rotateA = () => {
  A.style.transform = 'rotate(180deg)';
  A.style.transition= 'transform .5s';
}

let revertA = () =>{
  A.style.transform = 'rotate(0deg)';
  A.style.transition= 'transform .5s';
};


let rotateB = () => {
  B.style.transform = 'rotate(180deg)';
  B.style.transition= 'transform .5s';
};

let revertB = () =>{
  B.style.transform = 'rotate(0deg)';
  B.style.transition= 'transform .5s';
};

let rotateC = () => {
  C.style.transform = 'rotate(180deg)';
  C.style.transition= 'transform .5s';
};

let revertC = () =>{
  C.style.transform = 'rotate(0deg)';
  C.style.transition= 'transform .5s';
};


let rotateD = () => {
  D.style.transform = 'rotate(180deg)';
  D.style.transition= 'transform .5s';
};

let revertD = () =>{
  D.style.transform = 'rotate(0deg)';
  D.style.transition= 'transform .5s';
};

function rotationsA() {
  if(isrotatedA=false) {
    rotateA;
    revertB;
    revertC;
    revertD;
      isrotatedA=true;
    }else(isrotatedA=true) {
    revertA;
    revertB;
    revertC;
    revertD;

  isrotatedA=false;
}
};

function rotationsB() {
  if(isrotatedB=false) {
    rotateA;
    revertB;
    revertC;
    revertD;
      isrotatedA=true;
    }else(isrotatedA=true) {
      revertA;
      revertB;
      revertC;
      revertD;
  isrotatedB=false;
}
};


    function rotationsC() {
        if(isrotatedC=false){
          rotateC;
          revertA;
          revertB;
          revertD;
            isrotatedC=true;
          }if(isrotatedC=true){
            revertA;
            revertB;
            revertC;
            revertD;
        isrotatedC=false;
      }
        };

        fucntion rotationsD() {
          if(isrotatedD=false){
            rotateD;
            revertB;
            revertC;
            revertA;
              isrotatedD=true;
            }if(isrotatedA=true){
              revertA;
              revertB;
              revertC;
              revertD;
          isrotatedD=false;
        }
          };
A.addEventListener('click',rotationsA());
B.addEventListener('click',rotationsB);
C.addEventListener('click',rotationsC);
D.addEventListener('click',rotationsD);
};
