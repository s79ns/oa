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

// 戦闘ログナンバー変数
let logIndex = 0;

// 戦闘ログ関数
function insertLog(texts) {
  const logsElement = document.getElementById("logs");
  const createLog = document.createElement("li");

  // logIndex変数に1ずつ足していく（logIndex = logIndex + 1;と同定義）
  logIndex++;

  createLog.innerHTML = logIndex + ": " + texts;

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
  // 勝敗フラグ
  let victory = false;
  let defeat = false;

  // プレイヤーと敵の名前の色を変える変数
  const playerName = '<span style= "color: blue;">' + playerData["name"] + "</span>";
  const enemyName = '<span style= "color: red;">' + enemyData["name"] + "</span>";

  // プレイヤー側
  // ダメージ変数
  const playerDamage = damegeCalulation(playerData["skill"], enemyData["mind"]);

  // ダメージ計算
  enemyData["hp"] -= playerDamage;

  // HP書き換え処理
  insertText("currentEnemyHp", enemyData["hp"]);

  // HPゲージ style.width（取得した要素の幅を指定する）
  document.getElementById("currentEnemyHpGaugeValue").style.width = (enemyData["hp"] / enemyData["maxHp"]) * 100 + "%";

  // 戦闘ログ
  insertLog(playerName + "の攻撃！" + enemyName + "に" + playerDamage + "の" + "ダメージ！");

  if (enemyData["hp"] <= 0) {
    alert("勝ったッ！第三部完ッ！！");
    victory = true;

    // HPがマイナス表示されないように0に書き換える
    enemyData["hp"] = 0;
    insertText("currentEnemyHp", enemyData["hp"]);

    // HPゲージを0にする
    document.getElementById("currentEnemyHpGaugeValue").style.width = "0%";
  }

  // 勝敗が決まっていなければ処理をする（! 処理を反転）
  if (!victory) {
    const enemyDamage = damegeCalulation(playerData["mind"], enemyData["skill"]);
    playerData["hp"] -= enemyDamage;
    insertText("currentPlayerHp", playerData["hp"]);
    document.getElementById("currentPlayerHpGaugeValue").style.width = (playerData["hp"] / playerData["maxHp"]) * 100 + "%";
    insertLog(enemyName + "の攻撃！" + playerName + "に" + enemyDamage + "の" + "ダメージ！");

    if (playerData["hp"] <= 0) {
      alert("再起不能 -リタイヤ-");
      defeat = true;

      playerData["hp"] = 0;
      insertText(["currentPlayerHp"], playerData["hp"]);

      document.getElementById("currentPlayerHpGaugeValue").style.width = "0%";
    }
  }

  // ゲーム完了フラグを満たせばクラスを付与してボタンを押せなくする
  if (victory || defeat) {
    this.classList.add("deactive");
  }
});
