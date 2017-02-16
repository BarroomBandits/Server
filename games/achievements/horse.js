var horseAchievements = [];

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

function emptyTheBench(){
  if(game.horseRank === 1){
    horseAchievements.push("empty_the_bench");
  }
}

function numberTwentyThree(){
  if(game.horseRank === 2){
    horseAchievements.push("number_twenty_three");
  }
}

function forThree(){
  if(game.horseRank === 3){
    horseAchievements.push("for_three");
  }
}

function activeAroundTheRim(){
  if(game.horseGamesPlayed >= 1 && game.horseGamesPlayed < 5){
    horseAchievements.push("active_around_the_rim");
  }
}

function allBall(){
  if(game.horseGamesPlayed >= 5){
    horseAchievements.push("all_ball");
  }
}

function foul(){
  if(game.horseGamesSinceWin >= 3 && game.horseGamesSinceWin < 5){
    horseAchievements.push("foul");
  }
}

function flagrantFoul(){
  if(game.horseGamesSinceWin >= 5 && game.horseGamesSinceWin < 7){
    horseAchievements.push("flagrant_foul");
  }
}

function fouledOut(){
  if(game.horseGamesSinceWin >= 7){
    horseAchievements.push("fouled_out");
  }
}

function takeItToTheHole(){
  if(game.horseGamesSinceLoss >= 3 && game.horseGamesSinceLoss < 5){
    horseAchievements.push("take_it_to_the_hole");
  }
}

function inThePaint(){
  if(game.horseGamesSinceLoss >= 5 && game.horseGamesSinceLoss < 7){
    horseAchievements.push("in_the_paint");
  }
}

function slamDunk(){
  if(game.horseGamesSinceLoss >= 7){
    horseAchievements.push("slam_dunk");
  }
}

function doubleDouble(){
  if(game.score === game.p2Score + 3){
    horseAchievements.push("double_double");
  }
}

function tripleDouble(){
  if(game.score === game.p2Score + 5){
    horseAchievements.push("triple_double");
  }
}

function mule(){
  if(game.score === game.p2Score -1){
    horseAchievements.push("mule");
  }
}

function mugsy(){
  if(game.win && (game.wins/game.losses) * 2 <= game.wins/game.losses){
    horseAchievements.push("mugsy");
  }
}

function ninetyFiveBulls(){
  if(game.wins >= 5 && games.losses === 0){
    horseAchievements.push("ninety_five_bulls");
  }
}

emptyTheBench();
numberTwentyThree();
forThree();
activeAroundTheRim();
allBall();
foul();
flagrantFoul();
fouledOut();
takeItToTheHole();
inThePaint();
slamDunk();
doubleDouble();
tripleDouble();
mule();
mugsy();
ninetyFiveBulls();
