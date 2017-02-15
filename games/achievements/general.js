var achievementArray = [];
var gamesSinceLoss = 0;
var pPWin = 0;
var pPLoss = 0;
var dartsWin = 0;
var dartsLoss = 0;
var poolWin = 0;
var poolLoss = 0;
var horseWin = 0;
var horseLoss = 0;
var proWin = 0;
var proLoss = 0;
var thisGameBetWin = false;
var thisGameWin = false;
var gamesWon = 0;
var gamesLost = 0;
var rank = 0;
var p2gamesWon = 0;
var p2gamesLost = 0;
var level = 0;
var p2Level = 0;
var p2GamesSinceLoss = 0;
var win = false;

function winStreak(gamesSinceLoss){
  if(gamesSinceLoss >= 3){
    achievementArray.push(`win_streak`);
  }
}

function aroundTheWorld(pPWin, dartsWin, poolWin, horseWin, proWin){
  if (pPWin > 0 && dartsWin > 0 && poolWin > 0 && horseWin > 0 && proWin > 0){
    achievementArray.push("around_the_world");
  }
}

function onePlayerArmy(pPWin, dartsWin, poolWin, horseWin, proWin){
  if (pPWin >= 10 && dartsWin >= 10 && poolWin >= 10 && horseWin >= 10 && proWin >= 10){
    achievementArray.push("one_player_army");
  }
}

function barRoomBandit(dartsWin, poolWin){
  if (dartsWin >= 5 && poolWin >= 5){
    achievementArray.push("barroom_bandit");
  }
}

function hustler(thisGameBetWin, thisGameWin){
  if (thisGameBetWin && thisGameWin){
    achievementArray.push("hustler");
  }
}

function firstTimer(gamesWon){
  if(gamesWon === 1){
    achievementArray.push("first_timer");
  }
}

function streetKidOuttaNowhere(gamesWon, gamesLost, p2gamesWon, p2gamesLost){
  if(win && gamesWon/gamesLost <= 3 * (p2gamesWon/p2gamesLost)){
    achievementArray.push("street_kid_outta_nowhere");
  }
}

function goliath(level, p2Level){
  if(win && level <= p2Level - 5){
    achievementArray.push("goliath");
  }
}

function killJoy(p2GamesSinceLoss){
  if(p2GamesSinceLoss === 0){
    achievementArray.push("killjoy");
  }
}

function greaseFire(gamesWon, gamesLost){
  if (gamesWon * 3 <= gamesLoss){
    achievementArray.push("grease_fire");
  }
}

function dumpsterFire(gamesWon, gamesLost){
  if (gamesWon * 5 <= gamesLoss){
    achievementArray.push("dumpster_fire");
  }
}

function garbageVolcano(gamesWon, gamesLost){
  if (gamesWon * 7 <= gamesLoss){
    achievementArray.push("garbage_volcano");
  }
}

function contender(rank){
  if(rank <= 10){
    achievementArray.push("contender");
  }
}
