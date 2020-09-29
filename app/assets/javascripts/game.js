const playerData = {
  name: "エンジニアになりたいむしょく",
  hp: 50,
  skill: 50,
  mind: 10,
};

const enemyData = {
  name: "ねんれいとみけいけんのかべ",
  hp: 100,
  skill: 25,
  mind: 5,
};

function insertText(id, text) {
  document.getElementById(id).textContent = text;
}

// ダメージ関数
function damegeCalulation(skill, mind) {
  // ダメージ範囲
  const damageRange = 0.2;

  // ダメージ範囲2
  const maxDamage = skill * (1 + damageRange);
  const minDamage = skill * (1 - damageRange);

  // ダメージ計算式（Math.floor 小数点以下を切り捨てる）
  const attackDamage = Math.floor(Math.random() * (maxDamage - minDamage));

  // enemyのmindがplayerのskillを上回っていると、マイナス値が返って回復してしまうのを防ぐ為に変数化する
  const damage = skill - attackDamage;

  // ダメージが1未満であれば0を返し、それ以外ならばダメージを返す
  if (damage < 1) {
    return 0;
  } else {
    return damage;
  }
}

insertText("enemyName", enemyData["name"]);
insertText("EnemyHp", enemyData["hp"]);
insertText("currentEnemyHp", enemyData["hp"]);

insertText("playerName", playerData["name"]);
insertText("PlayerHp", playerData["hp"]);
insertText("currentPlayerHp", playerData["hp"]);

document.getElementById("attack").addEventListener("click", function () {
  // ゲーム完了フラグ
  let endGame = false;

  // ダメージ変数
  const playerDamage = damegeCalulation(playerData["skill"], enemyData["mind"]);
  const enemyDamage = damegeCalulation(playerData["mind"], enemyData["skill"]);

  enemyData["hp"] -= playerDamage;
  playerData["hp"] -= enemyDamage;
  insertText("currentEnemyHp", enemyData["hp"]);
  insertText("currentPlayerHp", playerData["hp"]);

  if (enemyData["hp"] <= 0) {
    alert("勝ったッ！第三部完ッ！！");
    endGame = true;

    // HPがマイナス表示されないように0に書き換える
    enemyData["hp"] = 0;
    insertText("currentEnemyHp", enemyData["hp"]);
  } else if (playerData["hp"] <= 0) {
    alert("再起不能 -リタイヤ-");
    endGame = true;

    playerData["hp"] = 0;
    insertText(["currentPlayerHp"], playerData["hp"]);
  }

  // ゲーム完了フラグを満たせばクラスを付与してボタンを押せなくする
  if (endGame) {
    this.classList.add("deactive");
  }
});
