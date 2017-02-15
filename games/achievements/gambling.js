var bettingAchievements = [];
var currentPurse = 0;
var currentWon = 0;
var currentLost = 0;
var overallWon = 0;
var overallLost = 0;
var betsWonPP = 0;
var betsWonDarts = 0;
var betsWonPool = 0;
var betsWonHorse = 0;
var betsWonPro = 0;
var betsLostPP = 0;
var betsLostDarts = 0;
var betsLostPool = 0;
var betsLostHorse = 0;
var betsLostPro = 0;
var betWins = 0;
var betsSinceLoss = 0;
var p2Win = 0;
var p2Loss = 0;
var p2Bank = 0;


function ladyLuck(betsSinceLoss){
  if(betsSinceLoss >= 5 && betsSinceLoss < 10){
    bettingAchievements.push("lady_luck");
  }
}

function midasTouch(betsSinceLoss){
  if(betsSinceLoss >= 10 && betsSinceLoss < 100){
    bettingAchievements.push("midas_touch");
  }
}

function highRoller(currentWon){
  if (overallWon >= 100){
    bettingAchievements.push("high_roller");
  }
}

function flush(betsWonPP, betsWonDarts, betsWonPool, betsWonHorse, betsWonPro){
  if(betsWonPP >= 1 && betsWonDarts >= 1 && betsWonPool >= 1 && betsWonHorse >= 1 && betsWonPro >= 1){
    bettingAchievements.push("flush");
  }
}

function straightFlush(betsWonPP, betsWonDarts, betsWonPool, betsWonHorse, betsWonPro){
  if(betsWonPP >= 3 && betsWonDarts >= 3 && betsWonPool >= 3 && betsWonHorse >= 3 && betsWonPro >= 3){
    bettingAchievements.push("straight_flush");
  }
}

function royalFlush(betsWonPP, betsWonDarts, betsWonPool, betsWonHorse, betsWonPro){
  if(betsWonPP >= 5 && betsWonDarts >= 5 && betsWonPool >= 5 && betsWonHorse >= 5 && betsWonPro >= 5){
    bettingAchievements.push("royal_flush");
  }
}

//Will need to get other player's info across devices
function goldDigger(p2Bank){
  if(p2Bank === 0){
    bettingAchievements.push("gold_digger");
  }
}

function footSoldier(overallWon){
  if(overallWon === 1){
    bettingAchievements.push("footsoldier");
  }
}

function capo(overallWon){
  if(overallWon >= 5 && overallWon < 10){
    bettingAchievements.push("capo");
  }
}

function underBoss(overallWon){
  if(overallWon >= 20 && overallWon < 100){
    bettingAchievements.push("underboss");
  }
}

function godfather(overallWon){
  if(overallWon >= 100){
    bettingAchievements.push("godfather");
  }
}

function weekendWarrior(currentWon){
  if(currentWon >= 20 && currentWon < 50){
    bettingAchievements.push("weekend_warrior");
  }
}

function loungeLizard(currentWon){
  if(currentWon >= 50 && currentWon < 200){
    bettingAchievements.push("lounge_lizard");
  }
}

function whale(currentWon){
  if(currentWon >= 200){
    bettingAchievements.push("whale");
  }
}

function bust(currentPurse){
  if(currentPurse === 0){
    bettingAchievements.push("bust");
  }
}

function hardSixteen(currentLost){
  if(currentLost >= 20 && currentLost < 50){
    bettingAchievements.push("hard_sixteen");
  }
}

function ruined(currentLost){
  if(currentLost >= 50){
    bettingAchievements.push("ruined");
  }
}
