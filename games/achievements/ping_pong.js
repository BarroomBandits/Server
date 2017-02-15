var pPAchievements = [];

var win = false;
var rank = 0;
var gamesWon = 0;
var gamesLost = 0;
var pPGamesSinceLoss = 0;
var score = 0;
var p2Score = 0;
var level = 0;
var p2Level = 0;
var winnerId = 0;
var id = 0;
var winnings = 0;
var betsOnGame = 0;

function kingPong(rank){
  if(rank === 1){
    pPAchievements.push("king_pong");
  }
}

function queenPong(rank){
  if(rank === 2){
    pPAchievements.push("queen_pong");
  }
}

function jackOfBlades(rank){
  if(rank === 3){
    pPAchievements.push("jack_of_blades");
  }
}

function flingPong(gamesWon){
  if(gamesWon === 1){
    pPAchievements.push("fling_pong");
  }
}

function rally(pPGamesSinceLoss){
  if(pPGamesSinceLoss >= 3){
    pPAchievements.push(`rally`);
  }
}

function skunk(score, p2Score){
  if(score === p2Score + 21){
    pPAchievements.push("skunk");
  }
}

function stomped(score, p2Score){
  if(score >= p2Score + 10){
    pPAchievements.push("stomp");
  }
}

function bully(level, p2Level){
  if(win && level >= p2Level + 3){
    pPAchievements.push("bully");
  }
}

function underdog(win, level, p2Level){
  if(win && p2Level >= level + 3){
    pPAchievements.push("underdog");
  }
}

function rivalry(level, p2Level){
  if(level === p2Level){
    pPAchievements.push("rivalry");
  }
}

function shadowBoxing(win, level, p2Level){
  if(win && level === p2Level){
    pPAchievements.push("shadow_boxing");
  }
}

function warrior(gamesWon, gamesLost){
  if(gamesWon >= 5 && gamesLost === 0){
    pPAchievements.push("warrior");
  }
}

function evenSplit(gamesWon, gamesLost){
  if(gamesWon !== 0 && gamesWon === gamesLost){
    pPAchievements.push("even_split");
  }
}

function confident(id, winnerId, winnings){
  if(id === winnerId && winnings >= 1){
    pPAchievements.push("confident");
  }
}

function hotCommodity(id, winnerId, betsOnGame){
  if(id === winnerId && betsOnGame >= 5){
    pPAchievements.push("hot_commodity");
  }
}

function neckAndNeck(score, p2Score){
  if(score === p2Score + 2){
    pPAchievements.push("neck_and_neck");
  }
}

function battlePaddle(gamesWon){
  if(gamesWon >= 10 && gamesWon < 20){
    pPAchievements.push("battle_paddle");
  }
}

function killShot(gamesWon){
  if(gamesWon >= 20 && gamesWon < 50){
    pPAchievements.push("kill_shot");
  }
}

function gameSetMatch(gamesWon){
  if(gamesWon >= 50){
    pPAchievements.push("game_set_match");
  }
}
