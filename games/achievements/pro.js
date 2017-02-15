var proAchievements = [];

var betsMade = 0;
var betsWon = 0;
var teamOneWin = false;
var tie = false;
var winnings = 0;
var losses = 0;

function gettingDown(betsMade){
  if(betsMade === 1){
    proAchievements.push("getting_down");
  }
}

function puppy(betsMade){
  if(betsMade === 5){
    proAchievements.push("puppy");
  }
}

function dog(betsMade){
  if(betsMade === 10){
    proAchievements.push("dog");
  }
}

function wiseguy(betsWon){
  if(betsWon === 1){
    proAchievements.push("wiseguy");
  }
}

function sharp(betsWon){
  if(betsWon === 5){
    proAchievements.push("sharp");
  }
}

function bookie(betsWon){
  if(betsWon === 10){
    proAchievements.push("bookie");
  }
}

function parlay(tie){
  if(tie){
    proAchievements.push("parlay");
  }
}

function nickel(winnings){
  if(winnings >= 50 && winnings < 100){
    proAchievements.push("nickel");
  }
}

function dime(winnings){
  if(winnings >= 100 && winnings < 200){
    proAchievements.push("dime");
  }
}

function grandSalami(winnings){
  if(winnings >= 200){
    proAchievements.push("Grand Salami");
  }
}

function badBeat(losses){
  if(losses >= 20 && losses < 40){
    proAchievements.push("bad_beat");
  }
}

function hedge(losses){
  if(losses >= 40 && losses < 100){
    proAchievements.push("hedge");
  }
}

function shit(losses){
  if(losses >= 100){
    proAchievements.push("shit");
  }
}
