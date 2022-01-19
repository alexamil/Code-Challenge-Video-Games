class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
  }

}

// Write function below
function balloonAttack(p1, p2){
let bLeftPl1 = p1.balloonCount-(p2.hitsPerMinute*10);
console.log(bLeftPl1);
let bLeftPl2 = p2.balloonCount-(p1.hitsPerMinute*10);
console.log(bLeftPl2);

if(bLeftPl1 > bLeftPl2){
 return p1.name ;
} else if (bLeftPl1 < bLeftPl2){
  return p2.name;
}else if (bLeftPl1 === bLeftPl2){
  return 'Tie';
}
}

const pl1 = new Player('p1', 5);
pl1.status();
const pl2 = new Player('p2', 2);
pl2.status();

console.log(balloonAttack(pl1, pl2));
