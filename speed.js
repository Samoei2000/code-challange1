const prompt = require('prompt-sync')();
function calculateDemeritpoints(){
    const speedLimit=70;
    let speed = parseInt(prompt('Enter the speed: '));
    
    let demeritPoints=0;
    //conditions
  if(speed<= speedLimit) {
      console.log("Ok")
  
    } else{
      //calculate demerit points
  demeritPoints=Math.floor((speed-speedLimit)/5)
  console.log(`points: ${demeritPoints}`);
  
  if(demeritPoints> 12){
        console.log("license suspended")
  }
}
}
calculateDemeritpoints();