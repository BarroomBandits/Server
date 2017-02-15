var horseAchievements = [];

var gamesPlayed = 0;
var rank = 0;
var gamesSinceLoss = 0;
var gamesSinceWin = 0;
var score = 0;
var p2Score = 0;
var win = false;
var gamesWon = 0;
var gamesLost = 0;
var p2GamesWon = 0;
var p2GamesLost = 0;

function emptyTheBench(rank){
  if(rank === 1){
    horseAchievements.push("empty_the_bench");
  }
}

function numberTwentyThree(rank){
  if(rank === 2){
    horseAchievements.push("number_twenty_three");
  }
}

function forThree(rank){
  if(rank === 3){
    horseAchievements.push("for_three");
  }
}

function activeAroundTheRim(gamesPlayed){
  if(gamesPlayed === 1){
    horseAchievements.push("active_around_the_rim");
  }
}

function allBall(gamesPlayed){
  if(gamesPlayed === 5){
    horseAchievements.push("all_ball");
  }
}

function foul(gamesSinceWin){
  if(gamesSinceWin === 3){
    horseAchievements.push("foul");
  }
}

function flagrantFoul(gamesSinceWin){
  if(gamesSinceWin === 5){
    horseAchievements.push("flagrant_foul");
  }
}

function fouledOut(gamesSinceWin){
  if(gamesSinceWin === 7){
    horseAchievements.push("fouled_out");
  }
}

function takeItToTheHole(gamesSinceLoss){
  if(gamesSinceLoss === 3){
    horseAchievements.push("take_it_to_the_hole");
  }
}

function inThePaint(gamesSinceLoss){
  if(gamesSinceLoss === 5){
    horseAchievements.push("in_the_paint");
  }
}

function slamDunk(gamesSinceLoss){
  if(gamesSinceLoss === 7){
    horseAchievements.push("slam_dunk");
  }
}

function doubleDouble(score, p2Score){
  if(score === p2Score + 3){
    horseAchievements.push("double_double");
  }
}

function tripleDouble(score, p2Score){
  if(score === p2Score + 5){
    horseAchievements.push("triple_double");
  }
}

function mule(score, p2Score){
  if(score === p2Score -1){
    horseAchievements.push("mule");
  }
}

function mugsy(win, gamesWon, gamesLost, p2GamesWon, p2GamesLost){
  if(win && (gamesWon/gamesLost) * 2 <= p2GamesWon/p2GamesLost){
    horseAchievements.push("mugsy");
  }
}

function ninetyFiveBulls(gamesWon, gamesLost){
  if(gamesWon >= 5 && gamesLost === 0){
    horseAchievements.push("ninety_five_bulls");
  }
}
