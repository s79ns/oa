const playerData = {
  name: "エンジニアになりたいむしょく",
  hp: 20,
  skill: 30,
  mind: 5,
};

const enemiesData = [
  {
    name: "ねんれいとみけいけんのかべ",
    hp: 200,
    skill: 30,
    mind: 1,
  },
  {
    name: "youtubeのゆうわく",
    hp: 120,
    skill: 20,
    mind: 0,
  },
  {
    name: "じゅしんりょうのとりたて",
    hp: 50,
    skill: 10,
    mind: 10,
  },
];

// enemiesDataの配列からランダムに要素を取得する
const enemyData = enemiesData[Math.floor(Math.random() * enemiesData.length)];

// 各DataにmaxHpを作成して現在のhpを代入
playerData["maxHp"] = playerData["hp"];
enemyData["maxHp"] = enemyData["hp"];

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

// 戦闘ログ関数
function insertLog(texts) {
  const logsElement = document.getElementById("logs");
  const createLog = document.createElement("li");
  createLog.innerHTML = texts;

  // insertBefore 要素(logsElement)の最初の子要素として入れる(入れる要素, どこに,どの要素か)
  logsElement.insertBefore(createLog, logsElement.firstChild);
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

  // ダメージ計算
  enemyData["hp"] -= playerDamage;
  playerData["hp"] -= enemyDamage;

  // HP書き換え処理
  insertText("currentEnemyHp", enemyData["hp"]);
  insertText("currentPlayerHp", playerData["hp"]);

  // 戦闘ログ
  insertLog(
    playerData["name"] +
      "の攻撃！" +
      enemyData["name"] +
      "に" +
      playerDamage +
      "の" +
      "ダメージ！"
  );
  insertLog(
    enemyData["name"] +
      "の攻撃！" +
      playerData["name"] +
      "に" +
      enemyDamage +
      "の" +
      "ダメージ！"
  );

  // HPゲージ style.width（取得した要素の幅を指定する）
  document.getElementById("currentEnemyHpGaugeValue").style.width =
    (enemyData["hp"] / enemyData["maxHp"]) * 100 + "%";
  document.getElementById("currentPlayerHpGaugeValue").style.width =
    (playerData["hp"] / playerData["maxHp"]) * 100 + "%";

  if (enemyData["hp"] <= 0) {
    alert("勝ったッ！第三部完ッ！！");

    endGame = true;

    // HPがマイナス表示されないように0に書き換える
    enemyData["hp"] = 0;
    insertText("currentEnemyHp", enemyData["hp"]);

    // HPゲージを0にする
    document.getElementById("currentEnemyHpGaugeValue").style.width = "0%";
  } else if (playerData["hp"] <= 0) {
    alert("再起不能 -リタイヤ-");

    endGame = true;

    playerData["hp"] = 0;
    insertText(["currentPlayerHp"], playerData["hp"]);

    document.getElementById("currentPlayerHpGaugeValue").style.width = "0%";
  }

  // ゲーム完了フラグを満たせばクラスを付与してボタンを押せなくする
  if (endGame) {
    this.classList.add("deactive");
  }
});
