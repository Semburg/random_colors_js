//HEX
function changeColor(){
    const rndColor = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor="#"+rndColor;
}

// RGB

function changeColor2(){

    const redColor = Math.floor(Math.random()*255)
    const greenColor = Math.floor(Math.random()*255)
    const blueColor = Math.floor(Math.random()*255)
    document.body.style.backgroundColor="rgb("+ redColor+ "," + greenColor + "," + blueColor + ")";
}


// RGBa

function changeColor_RGBA(){

    const redColor = Math.floor(Math.random()*255)
    const greenColor = Math.floor(Math.random()*255)
    const blueColor = Math.floor(Math.random()*255)
    const alphaOpacity = Math.random().toFixed(1);
    document.body.style.backgroundColor="rgb("+ redColor+ "," + greenColor + "," + blueColor + "," + alphaOpacity + ")";
}