let currentQuestion = 0;
let score = 0;
let wrongAnswer = 0;
let unansweredQuestions = 0;
let timer; // Variable to store the timer
const questionarea = document.getElementById("question-area");
const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");

let questions = [
  {
    "question": "Siapakah yang pertama kali membangun Benteng Jepara pada abad ke-16?",
    "image": "../assets/assets-mudah/cat.jpg",
    "answers": [
      { "option": "Kesultanan Demak", correct: true },
      { "option": "Portugis", correct: false },
      { "option": "Belanda", correct: false },
      { "option": "Inggris", correct: false }
    ]
  },
  {
    "question": "Apa yang menjadi tujuan utama Portugis membangun Benteng Jepara?",
    "image": "../assets/assets-mudah/apple.jpg",
    "answers": [
      { "option": "Menjaga perdagangan rempah-rempah", correct: true },
      { "option": "Memperluas wilayah kekuasaan", correct: false },
      { "option": "Tempat tinggal bagi koloni", correct: false },
      { "option": "Melindungi diri dari serangan musuh", correct: false }
    ]
  },
  {
    "question": "Pada tahun berapa Benteng Jepara direbut oleh Kesultanan Demak?",
    "image": "../assets/assets-mudah/motorcycle.jpg",
    "answers": [
      { "option": "1561", correct: true },
      { "option": "1600", correct: false },
      { "option": "1500", correct: false },
      { "option": "1650", correct: false }
    ]
  },
  {
    "question": "Siapa yang pernah menguasai Benteng Jepara setelah Kesultanan Demak?",
    "image": "../assets/assets-mudah/plane.jpg",
    "answers": [
      { "option": "Belanda", correct: true },
      { "option": "Inggris", correct: true },
      { "option": "Mataram", correct: true },
      { "option": "Semua jawaban benar", correct: false }
    ]
  },
  {
    "question": "Mengapa Benteng Jepara dianggap sebagai situs bersejarah yang penting?",
    "image": "../assets/assets-mudah/becak.jpg",
    "answers": [
      { "option": "Karena menjadi pusat perdagangan rempah-rempah", correct: true },
      { "option": "Karena dibangun oleh Belanda", correct: false },
      { "option": "Karena pernah direbut oleh Inggris", correct: false },
      { "option": "Semua jawaban benar", correct: false }
    ]
  },
  {
    "question": "Kapan Monumen Ari-Ari Kartini dibangun dan siapa yang melakukan renovasi terakhir?",
    "answers": [
      { "option": "1981 oleh Pemda Jepara", correct: false },
      { "option": "1979 oleh Menteri Pendidikan dan Kebudayaan Daoed Joesoef", correct: true },
      { "option": "1879 oleh Kartini", correct: false },
      { "option": "1800 oleh Ayah Kartini", correct: false }
    ]
  },
  {
    "question": "Apa simbol-simbol yang terdapat di Monumen Ari-Ari Kartini dan apa maknanya?",
    "answers": [
      { "option": "21 kuncup menunjukkan bulan April", correct: true },
      { "option": "Empat lampu melambangkan tahun 1879", correct: false },
      { "option": "10 meter kedalaman sumur melambangkan tanggal kelahiran Kartini", correct: false },
      { "option": "Semua jawaban benar", correct: false }
    ]
  },
  {
    "question": "Bagaimana keadaan rumah keluarga Kartini di Desa Pelemkerep saat ini?",
    "answers": [
      { "option": "Masih utuh dan ditempati oleh keluarga Kartini", correct: false },
      { "option": "Hanya tersisa sumur dan lokasi ari-ari", correct: true },
      { "option": "Telah direnovasi menjadi museum", correct: false },
      { "option": "Sudah dibawa ke Jepara sebagai monumen tambahan", correct: false }
    ]
  },
  {
    question: "Kapan diperkirakan Masjid Mantingan berdiri, dan apa bukti yang mendukung perkiraan tersebut?",
    answers: [
      { option: "Tahun 1977, pemugaran oleh Departemen Pendidikan", correct: false },
      { option: "Tahun 1481 Saka, berdasarkan prasasti di mihrab", correct: true },
      { option: "Tahun 1559, dibangun oleh Ratu Kalinyamat", correct: false },
      { option: "Tahun 1980, penemuan panel relief", correct: false },
    ],
  },
  {
    question: "Apa yang mencerminkan akulturasi dalam arsitektur Masjid Mantingan?",
    answers: [
      { option: "Atap tumpang dan mustaka", correct: true },
      { option: "Gapura masuk", correct: false },
      { option: "Petilasan candi di dekat masjid", correct: false },
      { option: "Semua jawaban benar", correct: false },
    ],
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function highlightCorrectAnswer() {
  const correctOptionIndex = questions[currentQuestion].answers.findIndex(
    (answer) => answer.correct === true
  );
  const correctButton = document.querySelector(
    `#option${correctOptionIndex + 1}`
  );
  correctButton.classList.add("correct");
}

shuffleArray(questions);

function highlightCorrectAnswerNotAnswer() {
  const correctOptionIndex = questions[currentQuestion].answers.findIndex(
    (answer) => answer.correct === true
  );
  const correctButton = document.querySelector(
    `#option${correctOptionIndex + 1}`
  );
  correctButton.classList.add("overtime");
}

function highlightinCorrectAnswer(isCorrect, selectedOption) {
  const correctOptionIndexTrue = questions[currentQuestion].answers.findIndex(
    (answer) => answer.correct === true
  );

  const correctButtonTrue = document.querySelector(
    `#option${correctOptionIndexTrue + 1}`
  );

  correctButtonTrue.classList.add("correct");

  if (!isCorrect) {
    const selectedButton = document.querySelector(
      `#option${selectedOption + 1}`
    );
    selectedButton.classList.add("incorrect");
  }
}

function startTimer(duration, display) {
  clearInterval(timer); // Menghentikan timer sebelumnya (jika ada)

  let start = Date.now(),
    diff,
    hours,
    minutes,
    seconds;

  function updateTimer() {
    diff = duration - (((Date.now() - start) / 1000) | 0);

    hours = Math.floor((diff / 3600) % 24);
    minutes = Math.floor((diff / 60) % 60);
    seconds = Math.floor(diff % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (diff <= 0) {
      handleUnansweredQuestions();
      selectAnswer(false, undefined); // Panggil fungsi selectAnswer dengan jawaban salah
    }
  }

  updateTimer();
  timer = setInterval(updateTimer, 1000);
}

function loadQuestion() {
  let question = questions[currentQuestion];
  let indexQuestion = document.getElementById("index-question");
  let questionElement = document.getElementById("question");
  let answersElement = document.getElementById("answers");
  let questionImageElement = document.getElementById("questionImage");
  const timerDisplay = document.getElementById("timer");

  const answerLetters = ["A", "B", "C", "D"];
  
  indexQuestion.innerHTML = `Soal ${currentQuestion + 1} / ${questions.length}`;
  questionElement.innerHTML = question.question;
  questionImageElement.src = question.image;
  answersElement.innerHTML = "";

  startTimer(30, timerDisplay); // set waktu

  // Shuffle the order of answer options
  shuffleArray(question.answers);

  questionarea.classList.add("fade-in");

  for (let i = 0; i < question.answers.length; i++) {
    answersElement.innerHTML += `
        <button id="option${i + 1}" class="btn" onclick="selectAnswer(${
      question.answers[i].correct
    }, ${i})">
          <span>${answerLetters[i]}</span><span>${
      question.answers[i].option
    }</span>
        </button>
      `;
  }
}

function selectAnswer(isCorrect, selectedOption) {
  clearInterval(timer);

  if (selectedOption === undefined) {
    highlightCorrectAnswerNotAnswer();
    wrongAnswer++;
  } else if (selectedOption !== undefined && !isCorrect) {
    highlightinCorrectAnswer(isCorrect, selectedOption);
    wrongAnswer++;
  } else if (selectedOption !== undefined && isCorrect) {
    highlightCorrectAnswer();
    score++;
  }

  disableButtons();

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      handleUnansweredQuestions();
      displayResult();
    }
  }, 1500);
}

function disableButtons() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function displayResult() {
    clearInterval(timer);
  
    const scoreElement = document.getElementById("score");
    const wrongAnswersElement = document.getElementById("wrongAnswers");
    const resultImageElement = document.getElementById("resultImage");
    const resultTextElement = document.querySelector(".text-result p");
  
    scoreElement.textContent = score;
    wrongAnswersElement.textContent = wrongAnswer;
  
    const popupResult = document.getElementById("popup-result");
    const conBtnResult = document.querySelector(".con-btn-result");
    const btnKembali = document.createElement("button");
    const btnUlangi = document.createElement("button");
  
    btnKembali.textContent = "Kembali ke halaman utama";
    btnKembali.onclick = function () {
      window.location.href = "../index.html";
    };
  
    if (score >= 6) {
      resultImageElement.src = "../assets/result-succes.svg";
      resultTextElement.textContent =
        "HEBATT!! kamu sudah cukup memahami tentang Tentang Budaya Peninggalan Sejarah di jepara, kamu dapat mengulangnya lagi";
      btnUlangi.textContent = "Ulangi";
      btnUlangi.onclick = function () {
        window.location.href = "tesPeninggalanSejarah.html";
      };
    } else {
      resultImageElement.src = "../assets/failedToNextLevel.svg";
      resultTextElement.textContent =
        "Wah kamu belum cukup memahami tentang Tentang Budaya Peninggalan Sejarah di jepara, kamu dapat mengulangnya lagi";
      btnUlangi.textContent = "Ulangi";
      btnUlangi.onclick = function () {
        window.location.href = "tesPeninggalanSejarah.html";
      };
    }
  
    conBtnResult.innerHTML = "";
    conBtnResult.appendChild(btnKembali);
    conBtnResult.appendChild(btnUlangi);
  
    popupResult.style.display = "block";
    questionarea.style.display = "none";
    card2.style.display = "none";
    card3.style.display = "flex";
  }



function submitQuiz() {
  displayResult();
}

function handleUnansweredQuestions() {
  if (!timer) {
    unansweredQuestions += questions.length - currentQuestion;
  }
}

window.addEventListener("unload", handleUnansweredQuestions);

setTimeout(() => {
  loadQuestion();
  card1.style.display = "none";
  card2.style.display = "flex";
}, 15000);
