var pPAchievements = [];

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

function kingPong(){
  if(game.pPRank === 1){
    pPAchievements.push("king_pong");
  }
}

function queenPong(){
  if(game.pPRank === 2){
    pPAchievements.push("queen_pong");
  }
}

function jackOfBlades(){
  if(game.pPRank === 3){
    pPAchievements.push("jack_of_blades");
  }
}

function flingPong(){
  if(game.pPgamesWon === 1){
    pPAchievements.push("fling_pong");
  }
}

function rally(){
  if(game.pPGamesSinceLoss >= 3){
    pPAchievements.push(`rally`);
  }
}

function skunk(){
  if(game.score === game.p2Score + 21){
    pPAchievements.push("skunk");
  }
}

function stomped(){
  if(game.score >= game.p2Score + 10){
    pPAchievements.push("stomp");
  }
}

function bully(){
  if(game.win && game.level >= game.p2Level + 3){
    pPAchievements.push("bully");
  }
}

function underdog(){
  if(game.win && game.p2Level >= game.level + 3){
    pPAchievements.push("underdog");
  }
}

function rivalry(){
  if(game.level === game.p2Level){
    pPAchievements.push("rivalry");
  }
}

function shadowBoxing(){
  if(game.win && game.level === game.p2Level){
    pPAchievements.push("shadow_boxing");
  }
}

function warrior(){
  if(game.pPgamesWon >= 5 && game.pPgamesPlayed === 0){
    pPAchievements.push("warrior");
  }
}

function evenSplit(){
  if(game.pPgamesWon !== 0 && game.pPgamesWon === game.pPgamesLost){
    pPAchievements.push("even_split");
  }
}

function confident(){
  if(game.id === game.winnerId && game.currentWinnings >= 1){
    pPAchievements.push("confident");
  }
}

function hotCommodity(){
  if(game.id === game.winnerId && game.betsOnGame >= 5){
    pPAchievements.push("hot_commodity");
  }
}

function neckAndNeck(){
  if(game.score === game.p2Score + 2){
    pPAchievements.push("neck_and_neck");
  }
}

function battlePaddle(){
  if(game.pPgamesWon >= 10 && game.pPgamesWon < 20){
    pPAchievements.push("battle_paddle");
  }
}

function killShot(){
  if(game.pPgamesWon >= 20 && game.pPgamesWon < 50){
    pPAchievements.push("kill_shot");
  }
}

function gameSetMatch(){
  if(game.pPgamesWon >= 50){
    pPAchievements.push("game_set_match");
  }
}

kingPong();
queenPong();
jackOfBlades();
flingPong();
rally();
skunk();
stomped();
bully();
underdog();
rivalry();
shadowBoxing();
warrior();
evenSplit();
confident();
hotCommodity();
neckAndNeck();
battlePaddle();
killShot();
gameSetMatch();
