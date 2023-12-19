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
      question: "Bagaimana cara tradisional untuk mewarnai benang tenun troso Jepara?",
      image: "../assets/assets-mudah/cat.jpg",
      answers: [
        { option: "Pewarna kimia", correct: false },
        { option: "Pewarna alam", correct: true },
        { option: "Tanpa pewarna", correct: false },
        { option: "Cat semprot", correct: false },
      ],
    },
    {
      question: "Apa yang menjadi ciri khas motif tenun troso Jepara?",
      image: "../assets/assets-mudah/apple.jpg",
      answers: [
        { option: "Garis-garis horizontal", correct: false },
        { option: "Motif bunga", correct: true },
        { option: "Pola abstrak", correct: false },
        { option: "Lingkaran berwarna-warni", correct: false },
      ],
    },
    {
      question: "Di mana lokasi utama produksi tenun troso di Jepara?",
      image: "../assets/assets-mudah/motorcycle.jpg",
      answers: [
        { option: "Desa Karimunjawa", correct: false },
        { option: "Desa Troso", correct: true },
        { option: "Kota Semarang", correct: false },
        { option: "Desa Batik Jepara", correct: false },
      ],
    },
    {
      question: "Motif apa yang paling terkenal dari tenun troso?",
      image: "../assets/assets-mudah/plane.jpg",
      answers: [
        { option: "Motif Cemara dan Motif Lompong", correct: true },
        { option: "Motif bunga mawar", correct: false },
        { option: "Motif batik", correct: false },
        { option: "Semua benar", correct: false },
      ],
    },
    {
      question: "Apa bahan utama yang biasanya digunakan dalam seni ukir Jepara?",
      image: "../assets/assets-mudah/becak.jpg",
      answers: [
        { option: "Logam", correct: false },
        { option: "Batu", correct: false },
        { option: "Kayu", correct: true },
        { option: "Kaca", correct: false },
      ],
    },
    {
      question: "Bagaimana teknik tradisional yang sering digunakan dalam seni ukir Jepara?",
      image: "../assets/assets-mudah/work.svg",
      answers: [
        { option: "Pahat tangan", correct: true },
        { option: "Pengecoran logam", correct: false },
        { option: "Ukir laser", correct: false },
        { option: "Print 3D", correct: false },
      ],
    },
    {
      question: "Apa yang menjadi ciri khas motif ukiran Jepara?",
      image: "../assets/assets-mudah/singing.svg",
      answers: [
        { option: "Geometris abstrak", correct: false },
        { option: "Motif alam", correct: true },
        { option: "Karakter tokoh populer", correct: false },
        { option: "Pola kota modern", correct: false },
      ],
    },
  {
    question: "Di mana pusat produksi seni ukir terkenal di Jepara?",
    image: "../assets/assets-mudah/driving.svg",
    answers: [
      { option: "Desa Borobudur", correct: false },
      { option: "Desa Kudus", correct: false },
      { option: "Desa Tahunan", correct: true },
      { option: "Kota Yogyakarta", correct: false },
    ],
  },
  {
    question: "Bagaimana teknik ukir Jepara berkembang dari generasi ke generasi?",
    image: "../assets/assets-mudah/bicycle.svg",
    answers: [
      { option: "Melalui sekolah seni resmi", correct: false },
      { option: "Dengan cara belajar dari senior", correct: true },
      { option: "Dengan mengikuti kursus online", correct: false },
      { option: "Melalui workshop internasional", correct: false },
    ],
  },
  {
    question: "Apa yang membedakan proses pembuatan tenun Troso Jepara dari teknik pembuatan tenun di daerah lain?",
    image: "../assets/assets-mudah/bicycle.svg",
    answers: [
      { option: "Penggunaan mesin tenun otomatis", correct: false },
      { option: "Penggunaan bahan sintetis", correct: false },
      { option: "Penggunaan tenun tangan tradisional", correct: true },
      { option: "Penggunaan warna yang lebih cerah", correct: false },
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
    const conBtnResult2 = document.querySelector(".con-btn-result2");
    const btnKembali = document.createElement("button");
    const btnLanjut = document.createElement("button");
    const btnUlangi = document.createElement("button");
  
    btnKembali.textContent = "Kembali ke halaman utama";
    btnKembali.onclick = function () {
      window.location.href = "../index.html";
    };
  
    if (score >= 6) {
      resultImageElement.src = "../assets/result-succes.svg";
      resultTextElement.textContent =
        "HEBATT!! kamu sudah cukup memahami tentang Tentang Budaya Kesenian di jepara";
      btnUlangi.textContent = "Ulangi";
      btnUlangi.onclick = function () {
        window.location.href = "tesBudayaKesenian.html";
      };
      btnLanjut.textContent = "Coba Tentang Budaya Adat";
      btnLanjut.onclick = function () {
        window.location.href = "tesBudayaAdat.html";
      };
    } else {
      resultImageElement.src = "../assets/failedToNextLevel.svg";
      resultTextElement.textContent =
        "Wah kamu belum cukup memahami tentang Tentang Budaya Kesenian di jepara, ayo ulangi atau coba Tentang Budaya Adat";
      btnUlangi.textContent = "Ulangi";
      btnUlangi.onclick = function () {
        window.location.href = "tesBudayaKesenian.html";
      };
      btnLanjut.textContent = "Coba Tentang Budaya Adat";
      btnLanjut.onclick = function () {
        window.location.href = "tesBudayaAdat.html";
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
