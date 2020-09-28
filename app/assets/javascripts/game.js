const enemyData = {
  name: "ねんれいとみけいけんのかべ",
  hp: 999999999999999,
};

const playerData = {
  name: "エンジニアになりたいむしょく",
  hp: 100,
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
  alert("ミス！" + playerData["name"] + "のポートフォリオは見向きもされない！");
});
