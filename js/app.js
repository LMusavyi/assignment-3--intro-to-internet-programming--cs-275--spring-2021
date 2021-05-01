window.onload = () => {
  //Means to identify each table element

  let boxA = document.querySelectorAll("td")[0];
  let boxB = document.querySelectorAll("td")[1];
  let boxC = document.querySelectorAll("td")[2];
  let boxD = document.querySelectorAll("td")[3];

  //Setting box position defaults
  let isrotatedA = false;
  let isrotatedB = false;
  let isrotatedC = false;
  let isrotatedD = false;

  //Event handlers to initiate each rotation and reversion

  let rotationA = () => {
    if (!isrotatedA) {
      boxA.style.transition = `transform .5s`;
      boxA.style.transform = `rotate(180deg)`;
      boxB.style.transition = `transform .5s`;
      boxB.style.transform = `rotate(0deg)`;
      boxC.style.transition = `transform .5s`;
      boxC.style.transform = `rotate(0deg)`;
      boxD.style.transition = `transform .5s`;
      boxD.style.transform = `rotate(0deg)`;
      isrotatedA = true;
    } else {
      boxA.style.transition = `transform .5s`;
      boxA.style.transform = `rotate(0deg)`;
      boxB.style.transition = `transform .5s`;
      boxB.style.transform = `rotate(0deg)`;
      boxC.style.transition = `transform .5s`;
      boxC.style.transform = `rotate(0deg)`;
      boxD.style.transition = `transform .5s`;
      boxD.style.transform = `rotate(0deg)`;
      isrotatedA = false;
    }
  };

  let rotationB = () => {
    if (!isrotatedB) {
      boxB.style.transition = `transform .5s`;
      boxB.style.transform = `rotate(180deg)`;
      boxC.style.transition = `transform .5s`;
      boxC.style.transform = `rotate(0deg)`;
      boxD.style.transition = `transform .5s`;
      boxD.style.transform = `rotate(0deg)`;
      boxA.style.transition = `transform .5s`;
      boxA.style.transform = `rotate(0deg)`;
      isrotatedB = true;
    } else {
      boxB.style.transition = `transform .5s`;
      boxB.style.transform = `rotate(0deg)`;
      boxA.style.transition = `transform .5s`;
      boxA.style.transform = `rotate(0deg)`;
      boxC.style.transition = `transform .5s`;
      boxC.style.transform = `rotate(0deg)`;
      boxD.style.transition = `transform .5s`;
      boxD.style.transform = `rotate(0deg)`;
      isrotatedB = false;
    }
  };

  let rotationC = () => {
    if (!isrotatedC) {
      boxC.style.transition = `transform .5s`;
      boxC.style.transform = `rotate(180deg)`;
      boxA.style.transition = `transform .5s`;
      boxA.style.transform = `rotate(0deg)`;
      boxD.style.transition = `transform .5s`;
      boxD.style.transform = `rotate(0deg)`;
      boxB.style.transition = `transform .5s`;
      boxB.style.transform = `rotate(0deg)`;
      isrotatedC = true;
    } else {
      boxC.style.transition = `transform .5s`;
      boxC.style.transform = `rotate(0deg)`;
      boxB.style.transition = `transform .5s`;
      boxB.style.transform = `rotate(0deg)`;
      boxA.style.transition = `transform .5s`;
      boxA.style.transform = `rotate(0deg)`;
      boxD.style.transition = `transform .5s`;
      boxD.style.transform = `rotate(0deg)`;
      isrotatedC = false;
    }
  };

  let rotationD = () => {
    if (!isrotatedD) {
      boxD.style.transition = `transform .5s`;
      boxD.style.transform = `rotate(180deg)`;
      boxB.style.transition = `transform .5s`;
      boxB.style.transform = `rotate(0deg)`;
      boxC.style.transition = `transform .5s`;
      boxC.style.transform = `rotate(0deg)`;
      boxA.style.transition = `transform .5s`;
      boxA.style.transform = `rotate(0deg)`;
      isrotatedD = true;
    } else {
      boxD.style.transition = `transform .5s`;
      boxD.style.transform = `rotate(0deg)`;
      boxB.style.transition = `transform .5s`;
      boxB.style.transform = `rotate(0deg)`;
      boxC.style.transition = `transform .5s`;
      boxC.style.transform = `rotate(0deg)`;
      boxA.style.transition = `transform .5s`;
      boxA.style.transform = `rotate(0deg)`;
      isrotatedD = false;
    }
  };

  boxA.addEventListener("click", rotationA);
  boxB.addEventListener("click", rotationB);
  boxC.addEventListener("click", rotationC);
  boxD.addEventListener("click", rotationD);
};
