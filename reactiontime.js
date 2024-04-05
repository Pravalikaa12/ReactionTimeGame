const shape = document.querySelector(".shape");
const time = document.querySelector("span");

var start=Date.now();
const calculateTime = (e) => {
    const stopTime = Date.now();
    // console.log(stopTime - start);
    const totalTime=(stopTime - start)/1000;
    time.textContent=totalTime;
    shape.style.left = `${generateRandomCoordinate(200)}px`;
    shape.style.top  = `${generateRandomCoordinate(400)}px`;

    shape.style.borderRadius=`${generateRandomCoordinate(50)}%`;

    shape.style.width = `${generateRandomCoordinate(200) + 50}px`;
    shape.style.height = `${generateRandomCoordinate(200) + 50}px`;

    shape.style.backgroundColor = getRandomColor();


    start=Date.now();
};

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const generateRandomCoordinate=(range)=>{
    return Math.round(Math.random()*range);
};
shape.addEventListener("click",calculateTime);