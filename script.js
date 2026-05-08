const scenarios = {
  nightMarket: {
    label: "夜市點餐",
    title: "在熱鬧的夜市買晚餐",
    prompt: "老闆問你想點什麼，請選出最自然的台語回答。",
    speaker: "夜市老闆",
    avatar: "闆",
    scene: "nightMarket",
    questions: [
      {
        line: "你欲食啥物？",
        translation: "你想吃什麼？",
        hint: "點餐時可以用「我欲...」開頭，表示「我要...」。",
        answers: [
          {
            text: "我欲一份蚵仔煎，感謝。",
            romanization: "Guá beh tsi̍t hūn ô-á-tsian, kám-siā.",
            meaning: "我要一份蚵仔煎，謝謝。",
            correct: true,
            note: "「我欲」是生活中常見的需求表達，點餐很自然。"
          },
          {
            text: "我袂記得冊包佇佗位。",
            romanization: "Guá bē kì-tit tsheh-pau tī tó-uī.",
            meaning: "我不記得書包在哪裡。",
            correct: false
          },
          {
            text: "今仔日天氣真好。",
            romanization: "Kin-á-ji̍t thinn-khì tsin hó.",
            meaning: "今天天氣很好。",
            correct: false
          }
        ]
      },
      {
        line: "欲辣抑是袂辣？",
        translation: "要辣還是不辣？",
        hint: "「袂」在這裡表示「不會、不」。",
        answers: [
          {
            text: "小可辣就好。",
            romanization: "Sió-khuá lua̍h tō hó.",
            meaning: "一點辣就好。",
            correct: true,
            note: "「小可」表示一點點，適合用在口味調整。"
          },
          {
            text: "我欲去圖書館借冊。",
            romanization: "Guá beh khì tôo-su-koán tsioh tsheh.",
            meaning: "我要去圖書館借書。",
            correct: false
          },
          {
            text: "這台車敢有到車頭？",
            romanization: "Tsit tâi tshia kám ū kàu tshia-thâu?",
            meaning: "這班車有到車站嗎？",
            correct: false
          }
        ]
      },
      {
        line: "攏總一百箍。",
        translation: "總共一百元。",
        hint: "結帳時可以確認金額，再說謝謝。",
        answers: [
          {
            text: "好，這是一百箍，感謝你。",
            romanization: "Hó, tsit sī tsi̍t pah khoo, kám-siā lí.",
            meaning: "好，這是一百元，謝謝你。",
            correct: true,
            note: "「箍」是台語裡常用的錢幣量詞。"
          },
          {
            text: "早起，老師好。",
            romanization: "Tsá-khí, lāu-su hó.",
            meaning: "早安，老師好。",
            correct: false
          },
          {
            text: "我欲問路。",
            romanization: "Guá beh mn̄g-lōo.",
            meaning: "我想問路。",
            correct: false
          }
        ]
      }
    ]
  },
  market: {
    label: "市場購物",
    title: "陪家人到市場買菜",
    prompt: "練習問價、數量與禮貌回應，讓台語走進日常採買。",
    speaker: "菜市阿姨",
    avatar: "姨",
    scene: "market",
    questions: [
      {
        line: "少年仔，欲買啥？",
        translation: "小朋友，要買什麼？",
        hint: "買東西可以先說品項，再說數量。",
        answers: [
          {
            text: "我欲買兩斤菜頭。",
            romanization: "Guá beh bé nn̄g kin tshài-thâu.",
            meaning: "我要買兩斤蘿蔔。",
            correct: true,
            note: "「斤」是傳統市場常聽到的重量單位。"
          },
          {
            text: "請問捷運站佇佗位？",
            romanization: "Tshiánn-mn̄g tsia̍t-ūn-tsām tī tó-uī?",
            meaning: "請問捷運站在哪裡？",
            correct: false
          },
          {
            text: "我足愛拍籃球。",
            romanization: "Guá tsiok ài phah nâ-kiû.",
            meaning: "我很喜歡打籃球。",
            correct: false
          }
        ]
      },
      {
        line: "這个外濟錢？",
        translation: "這個多少錢？",
        hint: "聽到問價時，要回答價格或確認購買意願。",
        answers: [
          {
            text: "一斤三十箍，欲幾斤？",
            romanization: "Tsi̍t kin sann-tsa̍p khoo, beh kuí kin?",
            meaning: "一斤三十元，要幾斤？",
            correct: true,
            note: "這句能自然接續問價，並追問需要的數量。"
          },
          {
            text: "我欲食蚵仔煎。",
            romanization: "Guá beh tsia̍h ô-á-tsian.",
            meaning: "我想吃蚵仔煎。",
            correct: false
          },
          {
            text: "阮學校佇彼爿。",
            romanization: "Guán ha̍k-hāu tī hit pîng.",
            meaning: "我們學校在那邊。",
            correct: false
          }
        ]
      },
      {
        line: "欲共你提袋仔無？",
        translation: "要幫你拿袋子嗎？",
        hint: "接受或婉拒幫忙，都可以加上「感謝」。",
        answers: [
          {
            text: "好，麻煩你，感謝。",
            romanization: "Hó, mâ-huân lí, kám-siā.",
            meaning: "好，麻煩你，謝謝。",
            correct: true,
            note: "「麻煩你」和「感謝」能讓回應更有禮貌。"
          },
          {
            text: "我欲坐公車轉去厝。",
            romanization: "Guá beh tsē kong-tshia tńg-khì tshù.",
            meaning: "我要搭公車回家。",
            correct: false
          },
          {
            text: "老師講課真趣味。",
            romanization: "Lāu-su kóng-khò tsin tshù-bī.",
            meaning: "老師上課很有趣。",
            correct: false
          }
        ]
      }
    ]
  },
  school: {
    label: "校園問候",
    title: "上學路上遇見老師同學",
    prompt: "用簡短自然的問候，建立台語開口說的信心。",
    speaker: "導師",
    avatar: "師",
    scene: "school",
    questions: [
      {
        line: "早起，你今仔日精神好無？",
        translation: "早安，你今天精神好嗎？",
        hint: "問候可以先回應狀態，再反問對方。",
        answers: [
          {
            text: "有，我真有精神，老師早。",
            romanization: "Ū, guá tsin ū tsing-sîn, lāu-su tsá.",
            meaning: "有，我很有精神，老師早。",
            correct: true,
            note: "先回答「有」，再補上問候，對話很完整。"
          },
          {
            text: "這尾魚真新鮮。",
            romanization: "Tsit bué hî tsin sin-sian.",
            meaning: "這條魚很新鮮。",
            correct: false
          },
          {
            text: "我欲一份甜無辣。",
            romanization: "Guá beh tsi̍t hūn tinn-bô-lua̍h.",
            meaning: "我要一份甜不辣。",
            correct: false
          }
        ]
      },
      {
        line: "你有看著我的筆無？",
        translation: "你有看到我的筆嗎？",
        hint: "回答物品位置時，可以用「佇...」。",
        answers: [
          {
            text: "有，佇你的冊包頂。",
            romanization: "Ū, tī lí ê tsheh-pau tíng.",
            meaning: "有，在你的書包上面。",
            correct: true,
            note: "「佇」表示在某個位置，是生活對話常用字。"
          },
          {
            text: "一斤三十箍。",
            romanization: "Tsi̍t kin sann-tsa̍p khoo.",
            meaning: "一斤三十元。",
            correct: false
          },
          {
            text: "公車站佇頭前。",
            romanization: "Kong-tshia-tsām tī thâu-tsîng.",
            meaning: "公車站在前面。",
            correct: false
          }
        ]
      },
      {
        line: "下課欲做啥？",
        translation: "下課要做什麼？",
        hint: "說活動時可用「欲去...」。",
        answers: [
          {
            text: "我欲去操場拍球。",
            romanization: "Guá beh khì tshau-tiûnn phah-kiû.",
            meaning: "我要去操場打球。",
            correct: true,
            note: "這句同時練到地點和活動，很適合校園情境。"
          },
          {
            text: "小可辣就好。",
            romanization: "Sió-khuá lua̍h tō hó.",
            meaning: "一點辣就好。",
            correct: false
          },
          {
            text: "這个外濟錢？",
            romanization: "Tsit ê guā tsē tsînn?",
            meaning: "這個多少錢？",
            correct: false
          }
        ]
      }
    ]
  },
  transport: {
    label: "交通問路",
    title: "在車站附近詢問方向",
    prompt: "練習禮貌開口、確認地點與理解方向詞。",
    speaker: "路人伯伯",
    avatar: "伯",
    scene: "transport",
    questions: [
      {
        line: "你欲去佗位？",
        translation: "你要去哪裡？",
        hint: "問路先說目標地點，會更容易得到幫助。",
        answers: [
          {
            text: "我欲去火車站，請問按怎行？",
            romanization: "Guá beh khì hué-tshia-tsām, tshiánn-mn̄g án-tsuánn kiânn?",
            meaning: "我要去火車站，請問怎麼走？",
            correct: true,
            note: "「請問」加上目的地，是很清楚也有禮貌的問法。"
          },
          {
            text: "我欲買兩斤菜頭。",
            romanization: "Guá beh bé nn̄g kin tshài-thâu.",
            meaning: "我要買兩斤蘿蔔。",
            correct: false
          },
          {
            text: "老師早，我真有精神。",
            romanization: "Lāu-su tsá, guá tsin ū tsing-sîn.",
            meaning: "老師早，我很有精神。",
            correct: false
          }
        ]
      },
      {
        line: "一直行，閣轉倒手爿。",
        translation: "一直走，再左轉。",
        hint: "聽到方向後，可以重複確認一次。",
        answers: [
          {
            text: "一直行，倒手爿，敢著？",
            romanization: "It-ti̍t kiânn, tò-tshiú pîng, kám tio̍h?",
            meaning: "一直走，左手邊，對嗎？",
            correct: true,
            note: "重複關鍵方向能避免聽錯，是實用的溝通策略。"
          },
          {
            text: "欲辣抑是袂辣？",
            romanization: "Beh lua̍h ia̍h-sī bē lua̍h?",
            meaning: "要辣還是不辣？",
            correct: false
          },
          {
            text: "有，佇你的冊包頂。",
            romanization: "Ū, tī lí ê tsheh-pau tíng.",
            meaning: "有，在你的書包上面。",
            correct: false
          }
        ]
      },
      {
        line: "免客氣，慢慢仔行。",
        translation: "不用客氣，慢慢走。",
        hint: "別人幫忙後，用謝意收尾。",
        answers: [
          {
            text: "感謝你，我知影矣。",
            romanization: "Kám-siā lí, guá tsai-iánn--ah.",
            meaning: "謝謝你，我知道了。",
            correct: true,
            note: "「我知影矣」可用來表示已經了解。"
          },
          {
            text: "一份蚵仔煎，感謝。",
            romanization: "Tsi̍t hūn ô-á-tsian, kám-siā.",
            meaning: "一份蚵仔煎，謝謝。",
            correct: false
          },
          {
            text: "下課欲去操場。",
            romanization: "Hā-khò beh khì tshau-tiûnn.",
            meaning: "下課要去操場。",
            correct: false
          }
        ]
      }
    ]
  }
};

const phrases = [
  {
    taiwanese: "請問，這个外濟錢？",
    romanization: "Tshiánn-mn̄g, tsit ê guā tsē tsînn?",
    meaning: "請問，這個多少錢？"
  },
  {
    taiwanese: "我欲買一份，感謝。",
    romanization: "Guá beh bé tsi̍t hūn, kám-siā.",
    meaning: "我要買一份，謝謝。"
  },
  {
    taiwanese: "佇佗位？",
    romanization: "Tī tó-uī?",
    meaning: "在哪裡？"
  },
  {
    taiwanese: "我知影矣。",
    romanization: "Guá tsai-iánn--ah.",
    meaning: "我知道了。"
  },
  {
    taiwanese: "小可就好。",
    romanization: "Sió-khuá tō hó.",
    meaning: "一點點就好。"
  }
];

const state = {
  scenarioKey: "nightMarket",
  questionIndex: 0,
  score: 0,
  answered: 0,
  correct: 0,
  streak: 0,
  selected: false,
  phraseIndex: 0
};

const elements = {
  score: document.querySelector("#score"),
  tabs: document.querySelectorAll(".tab"),
  sceneStage: document.querySelector(".scene-stage"),
  sceneLabel: document.querySelector("#sceneLabel"),
  sceneTitle: document.querySelector("#scene-title"),
  scenePrompt: document.querySelector("#scenePrompt"),
  roundText: document.querySelector("#roundText"),
  progressBar: document.querySelector("#progressBar"),
  speakerAvatar: document.querySelector("#speakerAvatar"),
  speakerName: document.querySelector("#speakerName"),
  challengeTitle: document.querySelector("#challenge-title"),
  translation: document.querySelector("#translation"),
  answerList: document.querySelector("#answerList"),
  feedback: document.querySelector("#feedback"),
  hintButton: document.querySelector("#hintButton"),
  nextButton: document.querySelector("#nextButton"),
  missionAnswered: document.querySelector("#missionAnswered"),
  missionCorrect: document.querySelector("#missionCorrect"),
  missionStreak: document.querySelector("#missionStreak"),
  masteryLabel: document.querySelector("#masteryLabel"),
  phraseTaiwanese: document.querySelector("#phraseTaiwanese"),
  phraseRomanization: document.querySelector("#phraseRomanization"),
  phraseMeaning: document.querySelector("#phraseMeaning"),
  shufflePhrase: document.querySelector("#shufflePhrase"),
  modeButtons: document.querySelectorAll(".mode-button"),
  modeDescription: document.querySelector("#modeDescription")
};

function getCurrentScenario() {
  return scenarios[state.scenarioKey];
}

function getCurrentQuestion() {
  return getCurrentScenario().questions[state.questionIndex];
}

function renderScenario() {
  const scenario = getCurrentScenario();
  const question = getCurrentQuestion();
  const progress = ((state.questionIndex + 1) / scenario.questions.length) * 100;

  elements.sceneStage.dataset.scene = scenario.scene;
  elements.sceneLabel.textContent = scenario.label;
  elements.sceneTitle.textContent = scenario.title;
  elements.scenePrompt.textContent = scenario.prompt;
  elements.speakerAvatar.textContent = scenario.avatar;
  elements.speakerName.textContent = scenario.speaker;
  elements.challengeTitle.textContent = `「${question.line}」`;
  elements.translation.textContent = question.translation;
  elements.roundText.textContent = `第 ${state.questionIndex + 1} / ${scenario.questions.length} 題`;
  elements.progressBar.style.width = `${progress}%`;
  elements.nextButton.disabled = true;
  state.selected = false;

  elements.feedback.className = "feedback";
  elements.feedback.innerHTML = "<strong>選一個回答開始挑戰。</strong><p>答對後會看到台羅提示與生活使用說明。</p>";
  renderAnswers(question);
}

function renderAnswers(question) {
  elements.answerList.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<strong>${answer.text}</strong><span>${answer.meaning}</span>`;
    button.addEventListener("click", () => selectAnswer(index));
    elements.answerList.appendChild(button);
  });
}

function selectAnswer(index) {
  if (state.selected) return;

  const question = getCurrentQuestion();
  const answer = question.answers[index];
  const buttons = elements.answerList.querySelectorAll(".answer-button");

  state.selected = true;
  state.answered += 1;
  elements.nextButton.disabled = false;

  buttons.forEach((button, buttonIndex) => {
    const item = question.answers[buttonIndex];
    button.disabled = true;
    if (item.correct) button.classList.add("is-correct");
  });

  if (answer.correct) {
    state.score += 10 + Math.min(state.streak, 3) * 2;
    state.correct += 1;
    state.streak += 1;
    elements.feedback.className = "feedback success";
    elements.feedback.innerHTML = `<strong>答對了：${answer.romanization}</strong><p>${answer.note}</p>`;
  } else {
    state.streak = 0;
    buttons[index].classList.add("is-wrong");
    const correct = question.answers.find((item) => item.correct);
    elements.feedback.className = "feedback error";
    elements.feedback.innerHTML = `<strong>再想想：比較自然的回答是「${correct.text}」</strong><p>${correct.romanization}｜${correct.meaning}</p>`;
  }

  updateStats();
}

function updateStats() {
  elements.score.textContent = state.score;
  elements.missionAnswered.textContent = state.answered;
  elements.missionCorrect.textContent = state.correct;
  elements.missionStreak.textContent = state.streak;

  if (state.correct >= 9) {
    elements.masteryLabel.textContent = "生活高手";
  } else if (state.correct >= 5) {
    elements.masteryLabel.textContent = "進階";
  } else {
    elements.masteryLabel.textContent = "入門";
  }
}

function nextQuestion() {
  const scenario = getCurrentScenario();
  state.questionIndex = (state.questionIndex + 1) % scenario.questions.length;
  renderScenario();
}

function switchScenario(key) {
  state.scenarioKey = key;
  state.questionIndex = 0;
  elements.tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.scenario === key);
  });
  renderScenario();
}

function showHint() {
  const question = getCurrentQuestion();
  elements.feedback.className = "feedback";
  elements.feedback.innerHTML = `<strong>提示</strong><p>${question.hint}</p>`;
}

function renderPhrase() {
  const phrase = phrases[state.phraseIndex];
  elements.phraseTaiwanese.textContent = phrase.taiwanese;
  elements.phraseRomanization.textContent = phrase.romanization;
  elements.phraseMeaning.textContent = phrase.meaning;
}

function shufflePhrase() {
  state.phraseIndex = (state.phraseIndex + 1) % phrases.length;
  renderPhrase();
}

function setMode(mode) {
  elements.modeButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.mode === mode);
  });

  elements.modeDescription.textContent =
    mode === "class"
      ? "適合投影後讓學生快速搶答，再請學生兩人一組改編對話。"
      : "適合學生回家後重複挑戰，記下答錯題目並練習重新說一次。";
}

elements.tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchScenario(tab.dataset.scenario));
});

elements.nextButton.addEventListener("click", nextQuestion);
elements.hintButton.addEventListener("click", showHint);
elements.shufflePhrase.addEventListener("click", shufflePhrase);
elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

renderScenario();
renderPhrase();
updateStats();
