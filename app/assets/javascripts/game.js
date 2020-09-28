const enemyData = {
  name: "ねんれいとみけいけんのかべ",
  hp: 100,
};

const playerData = {
  name: "エンジニアになりたいむしょく",
  hp: 30,
};

function insertText(id, text) {
  document.getElementById(id).textContent = text;
}

insertText("enemyName", enemyData["name"]);
insertText("EnemyHp", enemyData["hp"]);
insertText("currentEnemyHp", enemyData["hp"]);

insertText("playerName", playerData["name"]);
insertText("PlayerHp", playerData["hp"]);
insertText("currentPlayerHp", playerData["hp"]);

document.getElementById("attack").addEventListener("click", function () {
  let endGame = false; //ゲーム完了フラグ

  enemyData["hp"] -= 10;
  playerData["hp"] -= 10;
  insertText("currentEnemyHp", enemyData["hp"]);
  insertText("currentPlayerHp", playerData["hp"]);

  if (enemyData["hp"] <= 0) {
    alert("勝ったッ！第三部完ッ！！");
    endGame = true;
  } else if (playerData["hp"] <= 0) {
    alert("再起不能 -リタイヤ-");
    endGame = true;
  }

  if (endGame) {
    this.classList.add("deactive");
  }
});
