// Code your solution in this file!

function distanceFromHqInBlocks(num){
  const blocks = Math.abs(num - 42);
  return blocks;
}

function distanceFromHqInFeet(num) {
  const blocks = distanceFromHqInBlocks(num);
  return blocks * 264;
}

function distanceTravelledInFeet(startNum, endNum) {
  const startNumFeet = distanceFromHqInFeet(startNum);
  const endNumFeet = distanceFromHqInFeet(endNum);
  return endNumFeet - startNumFeet;
}

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let price;

    if (distance <= 400) {
      price = 0;
    }
    else if (distance >= 401 && distance <= 2000) {
      distance -= 400;
      price = distance * 2 / 100;
    }
    else if (distance >= 2000 && distance <= 2500){
      price = 25;
    }
    else {
      price = 'cannot travel that far';
    }
  return price;
  }
