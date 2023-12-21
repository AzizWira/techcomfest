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
    "question": "Apa asal-usul kata \"Lomban\" dalam Pesta Lomban di Jepara?",
    "image": "../Assets/testPengetahuan/adat/gambar1.jpg",
    "answers": [
      { "option": "Dari kata \"Lebaran\"", correct: false },
      { "option": "Dari kata \"Lelumban\" yang berarti bersenang-senang di laut", correct: true },
      { "option": "Dari kata \"Lomba\" dan \"Banyu\" yang berarti lomba di air", correct: false },
      { "option": "Dari kata \"Langit\" dan \"Ombak\" yang berarti langit dan ombak", correct: false }
    ]
  },
  {
    "question": "Apa yang melibatkan \"Perang Teluk Jepara\" selama Pesta Lomban?",
    "image": "../Assets/testPengetahuan/adat/gambar2.jpg",
    "answers": [
      { "option": "Lomba memancing ikan", correct: false },
      { "option": "Peluncuran kapal perang", correct: false },
      { "option": "Peluncuran kupat dan lepet antar perahu", correct: true },
      { "option": "Pertandingan panjat pinang", correct: false }
    ]
  },
  {
    "question": "Kapan Pesta Lomban biasanya diselenggarakan?",
    "image": "../Assets/testPengetahuan/adat/gambar3.jpg",
    "answers": [
      { "option": "1 Syawal", correct: false },
      { "option": "7 Syawal", correct: true },
      { "option": "1 Muharram", correct: false },
      { "option": "10 Muharram", correct: false }
    ]
  },
  {
    "question": "Apa yang menjadi pusat perayaan Pesta Lomban di Jepara?",
    "image": "../Assets/testPengetahuan/adat/gambar4.jpg",
    "answers": [
      { "option": "Pantai Koin", correct: false },
      { "option": "Pantai Kartini", correct: true },
      { "option": "Ujung Gelam", correct: false },
      { "option": "Karimunjawa", correct: false }
    ]
  },
  {
    "question": "Apa yang disiapkan oleh masyarakat menjelang Pesta Lomban?",
    "image": "../Assets/testPengetahuan/adat/gambar5.jpg",
    "answers": [
      { "option": "Petasan dan barang pecah belah", correct: true },
      { "option": "Pakaian serba hitam", correct: false },
      { "option": "Alat untuk memancing", correct: false },
      { "option": "Buku-buku pelajaran", correct: false }
    ]
  },
  {
    "question": "Kapan Perang Obor diadakan di Desa Tegalsambi, Kabupaten Jepara, dan apa spesifikasinya?",
    "image": "../Assets/testPengetahuan/adat/gambar6.jpg",
    "answers": [
      { "option": "Setiap Selasa Kliwon malam Kliwon", correct: false },
      { "option": "Setiap Senin Pahing, malam Selasa Pon di Bulan Dzulhijjah", correct: true },
      { "option": "Setiap Jumat Legi malam Wage", correct: false },
      { "option": "Setiap Kamis Pon malam Jumat Kliwon", correct: false }
    ]
  },
  {
    "question": "Apa yang menjadi dasar pelaksanaan Perang Obor, menurut legenda Ki Gemblong?",
    "image": "../Assets/testPengetahuan/adat/gambar7.jpg",
    "answers": [
      { "option": "Pergelutan antara dua kelompok", correct: false },
      { "option": "Pembalasan dendam antara Kyai Babadan dan Ki Gemblong", correct: false },
      { "option": "Kesalahan Kyai Babadan yang memukul Ki Gemblong dengan obor", correct: true },
      { "option": "Pertempuran strategis untuk mendapatkan keberuntungan", correct: false }
    ]
  },
  {
    "question": "Apa yang menjadi daya tarik utama Festival Perang Obor selain aspek keagamaan?",
    "image": "../Assets/testPengetahuan/adat/gambar8.jpg",
    "answers": [
      { "option": "Keindahan gerak obor-oboran", correct: false },
      { "option": "Legenda Ki Gemblong yang dipentaskan", correct: false },
      { "option": "Kuliner khas Jepara seperti Kintelan", correct: true },
      { "option": "Pertunjukan musik tradisional Jepara", correct: false }
    ]
  },
  {
    "question": "Tradisi Jembul Tulakan memiliki tujuan utama apa dalam penyelenggaraannya, dan bagaimana hubungannya dengan legenda Ki Gemblong?",
    "image": "../Assets/testPengetahuan/adat/gambar9.jpg",
    "answers": [
      { "option": "Sebagai bentuk pertunjukan budaya", correct: false },
      { "option": "Sebagai tanda syukur dan penghargaan terhadap tokoh-tokoh", correct: true },
      { "option": "Sebagai upacara adat untuk menghibur masyarakat", correct: false },
      { "option": "Sebagai ajang pesta rakyat yang meriah", correct: false }
    ]
  },
  {
    "question": "Apa yang dimaksud dengan Jembul Wadon dalam pelaksanaan Jembul Tulakan, dan mengapa Jembul Tulakan diadakan setiap tahun?",
    "image": "../Assets/testPengetahuan/adat/gambar10.jpg",
    "answers": [
      { "option": "Jembul Wadon adalah bagian kecil dari Jembul Lanang", correct: false },
      { "option": "Jembul Wadon berisi makanan kecil dan tidak dihiasi iratan bambu", correct: false },
      { "option": "Jembul Wadon memiliki simbolik khusus dalam tradisi", correct: true },
      { "option": "Jembul Wadon berfungsi sebagai hiburan dalam prosesi upacara", correct: false }
    ]
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
    const conBtnResult2 = document.querySelector(".con-btn-result2");
    const btnKembali = document.createElement("button");
    const btnLanjut = document.createElement("button");
    const btnUlangi = document.createElement("button");
  
    btnKembali.textContent = "Kembali ke halaman utama";
    btnKembali.onclick = function () {
      window.location.href = "../index.html";
    };
  
    if (score >= 6) {
      resultImageElement.src = "../Assets/success.svg";
      resultTextElement.textContent =
        "HEBATT!! kamu sudah cukup memahami tentang Tentang Budaya Adat di jepara";
      btnUlangi.textContent = "Ulangi";
      btnUlangi.onclick = function () {
        window.location.href = "tesBudayaAdat.html";
      };
      btnLanjut.textContent = "Coba Tentang Sejarah";
      btnLanjut.onclick = function () {
        window.location.href = "tesPeninggalanSejarah.html";
      };
    } else {
      resultImageElement.src = "../Assets/failedToNextLevel.svg";
      resultTextElement.textContent =
        "Wah kamu belum cukup memahami tentang Tentang Budaya Adat di jepara, ayo ulangi atau coba Tentang Peninggalan Sejarah";
      btnUlangi.textContent = "Ulangi";
      btnUlangi.onclick = function () {
        window.location.href = "tesBudayaAdat.html";
      };
      btnLanjut.textContent = "Coba Tentang Sejarah";
      btnLanjut.onclick = function () {
        window.location.href = "tesPeninggalanSejarah.html";
      };
    }
  
    conBtnResult2.innerHTML = "";
    conBtnResult.innerHTML = "";
    conBtnResult2.appendChild(btnKembali);
    conBtnResult.appendChild(btnLanjut);
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
