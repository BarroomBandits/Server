var poolAchievements = [];

var gamesWon = 0;
var gamesLost = 0;
var gamesPlayed = 0;
var rank = 0;
var gamesSinceWin = 0;
var gamesSinceLoss = 0;
var score = 0;
var p2Score = 0;
var win = false;

function shark(gamesWon, gamesLost){
  if(gamesWon >= 5 && gamesLost === 0){
    poolAchievements.push("shark");
  }
}

function behindTheEight(gamesPlayed, gamesSinceLoss){
  if(gamesPlayed >= 5 && gamesSinceLoss === 1){
    poolAchievements.push("behind_the_eight");
  }
}

function hickey(score, p2Score){
  if(score <= p2Score - 5){
    poolAchievements.push("hickey");
  }
}

function losingHazard(score, p2Score){
  if(score === p2Score - 1){
    poolAchievements.push("losing_hazard");
  }
}

function race(gamesSinceLoss){
  if(gamesSinceLoss === 3){
    poolAchievements.push("race");
  }
}

function holdYourMan(gamesSinceLoss){
  if(gamesSinceLoss === 5){
    poolAchievements.push("hold_your_man");
  }
}

function moneyBall(gamesSinceLoss){
  if(gamesSinceLoss === 7){
    poolAchievements.push("money_ball");
  }
}

function miscue(gamesSinceWin){
  if(gamesSinceWin === 3){
    poolAchievements.push("miscue");
  }
}

function scratch(gamesSinceWin){
  if(gamesSinceWin === 5){
    poolAchievements.push("scratch");
  }
}

function ballInHand(gamesSinceWin){
  if(gamesSinceWin === 7){
    poolAchievements.push("ball_in_hand");
  }
}

function dogTheNine(score, p2Score){
  if(score === p2Score - 8){
    poolAchievements.push("dog_the_nine");
  }
}

function theNuts(score, p2Score){
  if(score === p2Score + 8){
    poolAchievements.push("the_nuts");
  }
}

function billiardEmperor(rank){
  if(rank === 1){
    poolAchievements.push("billiard_emperor");
  }
}

function tournamentTough(rank){
  if(rank === 2){
    poolAchievements.push("tournament_tough");
  }
}

function cuedToWin(rank){
  if(rank === 3){
    poolAchievements.push("cued_to_win");
  }
}

function whitey(gamesPlayed){
  if(gamesPlayed === 1){
    poolAchievements.push("whitey");
  }
}

function barFly(gamesPlayed){
  if(gamesPlayed === 3){
    poolAchievements.push("bar_fly");
  }
}

function cueMaster(gamesPlayed){
  if(gamesPlayed === 5){
    poolAchievements.push("cue_master");
  }
}
