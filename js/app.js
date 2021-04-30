window.onload = () => {

    //Means to identify each table element
    var all = document.querySelectorAll('td');
    var A = all[0];
    var B = all[1];
    var C = all[2];
    var D = all[3];



    //Setting box position defaults
    var isrotatedA = false;
    var isrotatedB = false;
    var isrotatedC = false;
    var isrotatedD = false;

    //Event handlers to initiate each rotation and reversion
    A.addEventListener('click', (RotationA));
    B.addEventListener('click', (RotationA));
    C.addEventListener('click', (RotationA));
    D.addEventListener('click', (RotationA));

    function RotationA(){
      if(isrotatedA=false){
        A.classList.add("rotate");
        isrotatedA=true;
        B.classList.add("revert");
        isrotatedB=false;
        C.classList.add("revert");
        isrotatedC=false;
        D.classList.add("revert");
        isrotatedD=false;
      }if(isrotatedA=true){
        A.classList.add("revert");
        isrotatedA=false;
        B.classList.add("revert");
        isrotatedB=false;
        C.classList.add("revert");
        isrotatedC=false;
        D.classList.add("revert");
        isrotatedD=false;
      };
  }
}
