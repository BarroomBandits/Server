var poolAchievements = [];

var game = {
  id: 0,
  p2Id: 0,
  winner_id: 0,
  win : false,
  rank : 0,
  p2Rank : 0,
  level : 0,
  score: 0,
  p2Score: 0,
  p2Level : 0,
  p2Purse: 0,
  pPRank : 0,
  p2PPRank : 0,
  p2DartsRank: 0,
  p2HorseRank : 0,
  p2PoolRank : 0,
  p2ProRank : 0,
  gamesPlayed : 0,
  gamesLost: 0,
  p2GamesPlayed : 0,
  wins : 0,
  p2Wins : 0,
  gamesSinceWin : 0,
  gamesSinceLoss : 0,
  p2GamesSinceLoss : 0,
  p2GamesSinceWin : 0,
  experience : 0,
  purse : 0,
  betsMade : 0,
  betsWon : 0,
  betWinnings : 0,
  betLosses : 0,
  betsSinceWin: 0,
  betsSinceLoss: 0,
  pPGamesPlayed : 0,
  pPGamesSinceWin : 0,
  pPGamesSinceLoss : 0,
  pPGamesWon : 0,
  pPGamesLost: 0,
  pPBetsMade : 0,
  pPBetsWon : 0,
  pPBetWinnings : 0,
  p2PPgamesWon : 0,
  p2PPgamesPlayed : 0,
  horseRank : 0,
  horseGamesPlayed : 0,
  horseGamesSinceWin : 0,
  horseGamesSinceLoss : 0,
  horseGamesWon : 0,
  horseGamesLost: 0,
  p2horseGamesWon : 0,
  p2horseGamesPlayed: 0,
  horseBetsMade : 0,
  horseBetsWon : 0,
  horseBetWinnings: 0,
  dartsRank : 0,
  dartsGamesPlayed : 0,
  dartsGamesSinceWin : 0,
  dartsGamesSinceLoss : 0,
  dartsGamesWon : 0,
  dartsGamesLost: 0,
  p2DartsGamesWon : 0,
  p2DartsGamesPlayed: 0,
  dartsBetsMade : 0,
  dartsBetsWon : 0,
  dartsBetWinnings: 0,
  poolRank : 0,
  poolGamesPlayed : 0,
  poolGamesSinceWin : 0,
  poolGamesSinceLoss : 0,
  poolGamesWon : 0,
  poolGamesLost : 0,
  p2PoolGamesWon: 0,
  p2PoolGamesPlayed: 0,
  poolBetsMade : 0,
  poolBetsWon : 0,
  poolBetWinnings: 0,
  proRank : 0,
  proGamesPlayed : 0,
  proGamesSinceWin : 0,
  proGamesSinceLoss : 0,
  proGamesWon : 0,
  proGamesLost : 0,
  p2ProGamesWon : 0,
  p2ProGamesPlayed: 0,
  proBetsMade : 0,
  proBetsWon : 0,
  proBetWinnings: 0,
  wonCurrentBet : false,
  currentWinnings : 0,
  currentLosses : 0,
  betsOnGame: 0,
  tie: false
};

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
  if(gamesSinceLoss >= 3 && gamesSinceLoss < 5){
    poolAchievements.push("race");
  }
}

function holdYourMan(gamesSinceLoss){
  if(gamesSinceLoss >= 5 && gamesSinceLoss < 7){
    poolAchievements.push("hold_your_man");
  }
}

function moneyBall(gamesSinceLoss){
  if(gamesSinceLoss >= 7){
    poolAchievements.push("money_ball");
  }
}

function miscue(gamesSinceWin){
  if(gamesSinceWin >= 3 && gamesSinceWin < 5){
    poolAchievements.push("miscue");
  }
}

function scratch(gamesSinceWin){
  if(gamesSinceWin >= 5 && gamesSinceWin < 7){
    poolAchievements.push("scratch");
  }
}

function ballInHand(gamesSinceWin){
  if(gamesSinceWin >= 7){
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
  if(gamesPlayed >= 1 && gamesPlayed < 3){
    poolAchievements.push("whitey");
  }
}

function barFly(gamesPlayed){
  if(gamesPlayed >= 3 && gamesPlayed < 5){
    poolAchievements.push("bar_fly");
  }
}

function cueMaster(gamesPlayed){
  if(gamesPlayed >= 5){
    poolAchievements.push("cue_master");
  }
}
