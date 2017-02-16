var proAchievements = [];

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
  proBetLosses: 0,
  wonCurrentBet : false,
  currentWinnings : 0,
  currentLosses : 0,
  betsOnGame: 0,
  tie: false
};

function gettingDown(){
  if(game.proBetsMade >= 1 && game.proBetsMade < 3){
    proAchievements.push("getting_down");
  }
}

function puppy(){
  if(game.proBetsMade >= 5 && game.proBetsMade < 10){
    proAchievements.push("puppy");
  }
}

function dog(){
  if(game.proBetsMade >= 10){
    proAchievements.push("dog");
  }
}

function wiseguy(){
  if(game.proBetsWon >= 1 && game.proBetsWon < 5){
    proAchievements.push("wiseguy");
  }
}

function sharp(){
  if(game.proBetsWon >= 5 < 10){
    proAchievements.push("sharp");
  }
}

function bookie(){
  if(game.proBetsWon >= 10){
    proAchievements.push("bookie");
  }
}

function parlay(){
  if(game.tie){
    proAchievements.push("parlay");
  }
}

function nickel(){
  if(game.proBetWinnings >= 50 && game.proBetWinnings < 100){
    proAchievements.push("nickel");
  }
}

function dime(){
  if(game.proBetWinnings >= 100 && game.proBetWinnings < 200){
    proAchievements.push("dime");
  }
}

function grandSalami(){
  if(game.proBetWinnings >= 200){
    proAchievements.push("Grand Salami");
  }
}

function badBeat(){
  if(game.proBetLosses >= 20 && game.proBetLosses < 40){
    proAchievements.push("bad_beat");
  }
}

function hedge(){
  if(game.proBetLosses >= 40 && game.proBetLosses < 100){
    proAchievements.push("hedge");
  }
}

function shit(){
  if(game.proBetLosses >= 100){
    proAchievements.push("shit");
  }
}

gettingDown();
puppy();
dog();
wiseguy();
sharp();
bookie();
parlay();
nickel();
dime();
grandSalami();
badBeat();
hedge();
shit();
