'use strict';

const button = document.getElementById('assessment');

button.onclick = () => {
  const name = document.getElementById('user-name').value;

  if (name.length === 0) {
    alert("名前を入力してください");
    return;
  }

  const total =
    Number(document.getElementById('q1').value) +
    Number(document.getElementById('q2').value) +
    Number(document.getElementById('q3').value) +
    Number(document.getElementById('q4').value) +
    Number(document.getElementById('q5').value);

  let type = "";
  let message = "";

  if (total >= 21) {
    type = "チャレンジ型クリエイター";
    message = "新しいことにどんどん挑戦する行動派タイプです！";
  } else if (total >= 16) {
    type = "バランス型クリエイター";
    message = "アイデアと努力のバランスが良い安定タイプです。";
  } else if (total >= 11) {
    type = "コツコツ努力型";
    message = "地道な継続で成果を出す職人タイプです。";
  } else {
    type = "じっくり慎重型";
    message = "慎重に考えてから動く思慮深いタイプです。";
  }

  const resultArea = document.getElementById('result-area');
  resultArea.innerHTML = "";

  const h = document.createElement("h2");
  h.textContent = name + "さんの診断結果";

  const p = document.createElement("p");
  p.textContent = "あなたは「" + type + "」です。";

  const p2 = document.createElement("p");
  p2.textContent = message;

  resultArea.appendChild(h);
  resultArea.appendChild(p);
  resultArea.appendChild(p2);
};
