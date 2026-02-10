'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');

assessmentButton.onclick = () => {
  const userName = userNameInput.value;

  if (userName.length === 0) {
    return;
  }

  resultDivided.innerText = '';

  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDivided.appendChild(header);

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);
};

const answers = [
  '{userName}さんは「アイデア発想型」です。新しい発想を生み出すのが得意です。',
  '{userName}さんは「努力継続型」です。コツコツ積み上げる力があります。',
  '{userName}さんは「感性重視型」です。感情表現がとても豊かです。',
  '{userName}さんは「分析型」です。物事を論理的に考えるのが得意です。',
  '{userName}さんは「チャレンジ型」です。新しいことに挑戦するのが好きです。'
];

function assessment(userName) {
  let sumOfCharCode = 0;

  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode += userName.charCodeAt(i);
  }

  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replace('{userName}', userName);
  return result;
}
