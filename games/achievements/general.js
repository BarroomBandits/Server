var achievementArray = [];

var game = {
  id: 0,
  p2Id: 0,
  winner_id: 1,
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


function winStreak(){
  if(game.gamesSinceLoss >= 3){
    achievementArray.push(`win_streak`);
  }
}

function aroundTheWorld(){
  if (game.pPgamesWon > 0 && game.dartsGamesWon > 0 && game.poolGamesWon > 0 && game.horseGamesWon > 0 && game.proGamesWon > 0){
    achievementArray.push("around_the_world");
  }
}

function onePlayerArmy(){
  if (game.pPgamesWon >= 10 && game.dartsGamesWon >= 10 && game.poolGamesWon >= 10 && game.horseGamesWon >= 10 && game.poolGamesWon >= 10){
    achievementArray.push("one_player_army");
  }
}

function barRoomBandit(){
  if (game.dartsGamesWon >= 5 && games.poolGamesWon >= 5){
    achievementArray.push("barroom_bandit");
  }
}

function hustler(){
  if (game.currentWinnings > 0 && game.win){
    achievementArray.push("hustler");
  }
}

function firstTimer(){
  if(game.wins === 1){
    achievementArray.push("first_timer");
  }
}

function streetKidOuttaNowhere(){
  if(game.win && game.wins/game.losses <= 3 * (game.p2gamesWon/p2gamesLost)){
    achievementArray.push("street_kid_outta_nowhere");
  }
}

function goliath(){
  if(game.win && game.level <= game.p2Level - 5){
    achievementArray.push("goliath");
  }
}

function killJoy(){
  if(game.p2GamesSinceLoss === 0){
    achievementArray.push("killjoy");
  }
}

function greaseFire(){
  if (game.wins * 3 <= game.losses){
    achievementArray.push("grease_fire");
  }
}

function dumpsterFire(){
  if (game.wins * 5 <= game.losses){
    achievementArray.push("dumpster_fire");
  }
}

function garbageVolcano(){
  if (game.wins * 7 <= game.losses){
    achievementArray.push("garbage_volcano");
  }
}

function contender(){
  if(game.rank <= 10){
    achievementArray.push("contender");
  }
}

winStreak();
aroundTheWorld();
onePlayerArmy();
barRoomBandit();
hustler();
firstTimer();
streetKidOuttaNowhere();
goliath();
killJoy();
greaseFire();
dumpsterFire();
garbageVolcano();
contender();
