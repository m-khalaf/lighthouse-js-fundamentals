const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
/*const moves = [
  'south',
  'south',
  'south',
  'south',
  'south',
  'north',
  'south'
];*/


const finalPosition = function (moves) {
  //let x = 0;
  //let y = 0;
  let location = [0, 0];
  for (let move of moves) {
    if (move === 'north') {
      location[1] += 1;
    }
    else if (move === 'south') {
      location[1] -= 1;
    }
    else if (move === 'east') {
      location[0] += 1;
    }
    else if (move === 'west') {
      location[0] -= 1;
    }

  }
  //location.push(x);
  //location.push(y);
  return location;
}
console.log(finalPosition(moves));
//console.log(location[0]);
//let result = finalPosition(moves);
//console.log(result);

//console.log (result[1] ===4);