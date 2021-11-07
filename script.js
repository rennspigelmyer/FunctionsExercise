// 1
const spookyGhost = function(){
    console.log("Boo!!!");
} 
spookyGhost();
console.log("======");

// 2 
function candy(goal){
    console.log(goal);
    console.log(goal);
    console.log(goal);
    console.log(goal);
}
candy('Get Candy');
console.log("======");

// 3 
function werewolf(a, b){
    if (a === `Full` && b === `Moon`){
        console.log(`ARH-WHOOO!`);
        // return (`ARH-WOOO!`);
    }   
}
// werewolf(Full, Moon);
//console.log("");
werewolf(`Full`, `Moon`);
console.log("======");

// 4 
function halloween(){
    return `October 31st`;
    //console.log(`October 31st`);
}
//console.log(halloween);
console.log(halloween());
console.log("======");

// 5 
function isEnoughCandy(pieces){
    if (pieces >= 31) {
        return true
    }
    else if (pieces < 31) {
        return false
    }
}
console.log(isEnoughCandy(29));
console.log("======");

// 6 Had to get answer from completed assignment. 
function candyCounter(nums){
    let total = 0;
    for(i = 0; i < nums.length; i++){
      total += nums[i];
    }
    return total;
  
    // Using a For Of Loop
    // let total = 0;
    // for(number of nums){
    //   total += number;
    // }
    // return total;
  }
  console.log(candyCounter([1, 2, 3])); // 6
  console.log(candyCounter([1, 3])); // 4
  
  console.log("=========");

// 7 
const hauntedMansion = function(){
    console.log(`Welcome foolish mortals, to the Haunted Mansion!`);
}
hauntedMansion();
console.log("======");

// 8
ghostbusters = () => `Who You Gonna Call?`;
  console.log(ghostbusters());

// 9
// no

// 10
// yes

// 11a
 const costumes = [
     `Ghost`,
     `Princess`,
     `Pirate`
 ];

 // 11b Had to get answer from completed assignment
 const upperCostumes = costumes.map(i => i.toUpperCase());

// Using a Declaration Function
// const upperCostumes = costumes.map(function(i){
//   return i.toUpperCase();
// });
console.log(upperCostumes); // [ 'GHOST', 'PRINCESS', 'PIRATE' ]
console.log("==========");


