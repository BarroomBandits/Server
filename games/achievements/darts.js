var dartsAchievements = [];

var rank = 0;
var win = false;
var score = 0;
var p2Score = 0;
var gamesSinceLoss = 0;
var gamesPlayed = 0;
var gamesWon = 0;
var gamesLost = 0;

function bagONuts(score, p2Score){
  if(score >= p2Score + 10){
    dartsAchievements.push("bag_o_nuts");
  }
}

function perfectFinish(score, p2Score){
  if(score === p2Score + 21){
    dartsAchievements.push("perfect_finish");
  }
}

function robinHood(score, p2Score){
  if(score === p2Score){
    dartsAchievements.push("robin_hood");
  }
}

function treble(gamesSinceLoss){
  if(gamesSinceLoss === 3){
    dartsAchievements.push("treble");
  }
}

function diddleForTheMiddle(gamesPlayed){
  if(gamesPlayed === 1){
    dartsAchievements.push("diddle_for_the_middle");
  }
}

function madHouse(gamesWon, gamesLost){
  if(gamesWon >= 5 && gamesLost === 0){
    dartsAchievements.push("mad_house");
  }
}

function dartitis(gamesSinceLoss){
  if(gamesSinceLoss === 3){
    dartsAchievements.push("dartitis");
  }
}

function granny(gamesSinceLoss){
  if(gamesSinceLoss === 5){
    dartsAchievements.push("granny");
  }
}

function offTheIsland(gamesSinceLoss){
  if(gamesSinceLoss === 7){
    dartsAchievements.push("off_the_island");
  }
}

function whiteHorse(gamesWon){
  if(gamesWon === 10){
    dartsAchievements.push("white_horse");
  }
}

function killer(gamesWon){
  if(gamesWon === 15){
    dartsAchievements.push("killer");
  }
}

function woody(score, p2Score){
  if(p2Score === score + 21){
    dartsAchievements.push("woody");
  }
}

function destinyBull(rank){
  if(rank === 1){
    dartsAchievements.push("destiny_bull");
  }
}

function bones(rank){
  if(rank === 2){
    dartsAchievements.push("bones");
  }
}

function highTon(rank){
  if(rank === 3){
    dartsAchievements.push("high_ton");
  }
}
