var dartsAchievements = [];

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

function bagONuts(){
  if(game.score >= game.p2Score + 10){
    dartsAchievements.push("bag_o_nuts");
  }
}

function perfectFinish(){
  if(game.score === game.p2Score + 21){
    dartsAchievements.push("perfect_finish");
  }
}

function robinHood(){
  if(game.score === game.p2Score){
    dartsAchievements.push("robin_hood");
  }
}

function treble(){
  if(game.gamesSinceLoss >= 3){
    dartsAchievements.push("treble");
  }
}

function diddleForTheMiddle(){
  if(game.dartsGamesPlayed >= 1){
    dartsAchievements.push("diddle_for_the_middle");
  }
}

function madHouse(){
  if(game.gamesWon >= 5 && game.gamesLost === 0){
    dartsAchievements.push("mad_house");
  }
}

function dartitis(){
  if(game.gamesSinceLoss >= 3 && game.gamesSinceLoss < 5){
    dartsAchievements.push("dartitis");
  }
}

function granny(){
  if(game.gamesSinceLoss >= 5 && game.gamesSinceLoss < 7){
    dartsAchievements.push("granny");
  }
}

function offTheIsland(){
  if(game.gamesSinceLoss >= 7){
    dartsAchievements.push("off_the_island");
  }
}

function whiteHorse(){
  if(game.wins >= 10 && game.wins < 15){
    dartsAchievements.push("white_horse");
  }
}

function killer(){
  if(game.wins >= 15){
    dartsAchievements.push("killer");
  }
}

function woody(){
  if(game.p2Score === game.score + 21){
    dartsAchievements.push("woody");
  }
}

function destinyBull(){
  if(game.dartsRank === 1){
    dartsAchievements.push("destiny_bull");
  }
}

function bones(){
  if(game.dartsRank === 2){
    dartsAchievements.push("bones");
  }
}

function highTon(){
  if(game.dartsRank === 3){
    dartsAchievements.push("high_ton");
  }
}
