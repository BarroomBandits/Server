var bettingAchievements = [];

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


function ladyLuck(){
  if(game.betsSinceLoss >= 5 && game.betsSinceLoss < 10){
    bettingAchievements.push("lady_luck");
  }
}

function midasTouch(){
  if(game.betsSinceLoss >= 10 && game.betsSinceLoss < 100){
    bettingAchievements.push("midas_touch");
  }
}

function highRoller(){
  if (game.betWinnings >= 100){
    bettingAchievements.push("high_roller");
  }
}

function flush(){
  if(game.pPBetWinnings >= 1 && game.dartsBetWinnings >= 1 && game.poolBetWinnings >= 1 && game.horseBetWinnings >= 1 && game.proBetWinnings >= 1){
    bettingAchievements.push("flush");
  }
}

function straightFlush(){
  if(game.pPBetsWon >= 3 && game.dartsBetsWon >= 3 && game.poolBetsWon >= 3 && game.horseBetsWon >= 3 && game.proBetsWon >= 3){
    bettingAchievements.push("straight_flush");
  }
}

function royalFlush(){
  if(game.pPBetsWon >= 5 && game.dartsBetsWon >= 5 && game.poolBetsWon >= 5 && game.horseBetsWon >= 5 && game.proBetsWon >= 5){
    bettingAchievements.push("royal_flush");
  }
}

//Will need to get other player's info across devices
function goldDigger(){
  if(game.p2Purse === 0){
    bettingAchievements.push("gold_digger");
  }
}

function footSoldier(){
  if(game.betsWon >= 1 && game.betsWon < 5){
    bettingAchievements.push("footsoldier");
  }
}

function capo(){
  if(game.betsWon >= 5 && game.betsWon < 10){
    bettingAchievements.push("capo");
  }
}

function underBoss(){
  if(game.betsWon >= 20 && game.betsWon < 100){
    bettingAchievements.push("underboss");
  }
}

function godfather(){
  if(game.betWinnings >= 100){
    bettingAchievements.push("godfather");
  }
}

function weekendWarrior(){
  if(game.currentWinnings >= 20 && game.currentWinnings < 50){
    bettingAchievements.push("weekend_warrior");
  }
}

function loungeLizard(){
  if(game.currentWinnings >= 50 && game.currentWinnings < 200){
    bettingAchievements.push("lounge_lizard");
  }
}

function whale(){
  if(game.currentWinnings >= 200){
    bettingAchievements.push("whale");
  }
}

function bust(){
  if(game.purse === 0){
    bettingAchievements.push("bust");
  }
}

function hardSixteen(){
  if(game.currentLosses >= 20 && game.currentLosses < 50){
    bettingAchievements.push("hard_sixteen");
  }
}

function ruined(){
  if(game.currentLosses >= 50){
    bettingAchievements.push("ruined");
  }
}

ladyLuck();
midasTouch();
highRoller();
flush();
straightFlush();
royalFlush();
goldDigger();
footSoldier();
capo();
underBoss();
godfather();
weekendWarrior();
loungeLizard();
whale();
bust();
hardSixteen();
ruined();
