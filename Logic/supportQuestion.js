let currentQuestion = 0;
let jawaban = {
  nama: "",
  jenisKelamin: "",
  jenisPakaian: "",
  pakaian: "",
  ukuran: "",
};

const inputNama = document.getElementById("inputName");
const questionarea = document.getElementById("question-area");
const popupResult = document.getElementById("popup-result");
const alertText = document.getElementById("alert-text");
const card1 = document.getElementById("card-support1");
const card2 = document.getElementById("card-support2");
const card3 = document.getElementById("card-support3");

let pertanyaan = [
  {
    soal: "Hai, Silahkan masukan nama anda",
    jawaban: [{ option: "Lanjut", action: "next" }],
  },
  {
    soal: "Hai Kamu, boleh bantu informasikan jenis kelaminmu?",
    jawaban: [
      { option: "Pria", property: "jenisKelamin" },
      { option: "Wanita", property: "jenisKelamin" },
    ],
  },
  {
    soal: "Baik, Pakaian apakah yang ingin anda buat?",
    jawaban: [
      { option: "Pakaian atas", property: "jenisPakaian" },
      { option: "Pakaian bawah", property: "jenisPakaian" },
    ],
  },
  {
    soal: "Baik, selanjutnya bantu informasi pakaian atas apa yang ingin anda buat?",
  },
  {
    soal: "Baik,  bantu informasikan ukuran pakaian yang bisa di anda gunakan",
    jawaban: [
      { option: "S", property: "ukuran" },
      { option: "M", property: "ukuran" },
      { option: "L", property: "ukuran" },
      { option: "XL", property: "ukuran" },
    ],
  },
];

inputNama.addEventListener("change", (e) => {
  jawaban.nama = e.target.value;
  disabledButton();
});

inputNama.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    selectAnswer(inputNama.value, "nama");
  }
})

function disabledButton() {
  let submitButton = document.querySelector(".btn-primary");
  if (currentQuestion === 0) {
    console.log(submitButton);
    if (inputNama.value.length == 0) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  }
}

function loadQuestion() {
  let question = pertanyaan[currentQuestion].soal;
  let answers = pertanyaan[currentQuestion].jawaban;
  let indexQuestion = document.getElementById("index-question");
  let questionElement = document.getElementById("question");
  let answersElement = document.getElementById("answers");
  indexQuestion.innerHTML = `${currentQuestion + 1} / ${pertanyaan.length}`;
  questionElement.innerHTML = question;
  answersElement.innerHTML = "";

  if (currentQuestion == 0) {
    inputNama.style.display = "block";
    for (let i = 0; i < answers.length; i++) {
      answersElement.innerHTML += `
                <button class="btn btn-primary" onclick="selectAnswer('${inputNama.value}', '${answers[i].property}')">${answers[i].option}</button>
            `;
    }
  } else {
    inputNama.style.display = "none";
    for (let i = 0; i < answers.length; i++) {
      answersElement.innerHTML += `
                <button class="btn btn-primary" onclick="selectAnswer('${answers[i].option}', '${answers[i].property}')">${answers[i].option}</button>
            `;
    }
  }

  disabledButton();
}

function selectAnswer(jawab, property) {
  jawaban[property] = jawab;
  currentQuestion++;
  console.log(jawaban);

  if (jawaban.nama) {
    pertanyaan[1].soal =
      "Hai " + jawaban.nama + ", boleh informasikan jenis kelaminmu?";
  }

  if (jawaban.jenisKelamin === "Wanita") {
    pertanyaan[2].jawaban = [
      { option: "Pakaian atas", property: "jenisPakaian" },
    ];
  }

  if (
    jawaban.jenisPakaian == "Pakaian atas" &&
    jawaban.jenisKelamin === "Wanita"
  ) {
    pertanyaan[3].jawaban = [
      { option: "Blouse", property: "pakaian" },
      { option: "Kebaya", property: "pakaian" },
      { option: "Blazer", property: "pakaian" },
      { option: "Gaun", property: "pakaian" },
    ];
  } else if (
    jawaban.jenisPakaian == "Pakaian bawah" &&
    jawaban.jenisKelamin === "Wanita"
  ) {
    pertanyaan[3].jawaban = [
      { option: "Blouse", property: "pakaian" },
      { option: "Kebaya", property: "pakaian" },
      { option: "Blazer", property: "pakaian" },
      { option: "Gaun", property: "pakaian" },
    ];
    pertanyaan[3].soal =
      "Baik, selanjutnya bantu informasi pakaian bawah apa yang ingin anda buat?";
  } else if (
    jawaban.jenisPakaian == "Pakaian atas" &&
    jawaban.jenisKelamin === "Pria"
  ) {
    pertanyaan[3].jawaban = [
      { option: "Batik", property: "pakaian" },
      { option: "Kemeja", property: "pakaian" },
      { option: "Koko", property: "pakaian" },
      { option: "Jas", property: "pakaian" },
    ];
  } else {
    pertanyaan[3].jawaban = [{ option: "Sarung", property: "pakaian" }];
    pertanyaan[3].soal =
      "Baik, selanjutnya bantu informasi pakaian bawah apa yang ingin anda buat?";
  }

  if (currentQuestion < pertanyaan.length) {
    loadQuestion();
  } else {
    questionarea.style.display = "none";
    card2.style.display = "none";
    popupResult.style.display = "block";
    card3.style.display = "flex";
    showPopUpResult();
  }
}

function showPopUpResult() {
  let titleResult = document.getElementById("popup-result-title");
  let description = document.getElementById("popup-result-description");
  titleResult.innerHTML = `
        Hi, ${jawaban.nama}
    `;

  description.innerHTML = `
        pada umumnya kain yang anda butuhkan
        untuk membuat pakaian ${jawaban.pakaian} dengan
        ukuran ${jawaban.ukuran} adalah ${
    ukuranPakaian(jawaban.pakaian, jawaban.ukuran) + " Meter"
  }
    `;
}

function ukuranPakaian(pakaian, ukuranClient) {
  let ukuranFinal;
  switch (true) {
    case pakaian === "Batik" && ukuranClient === "S":
      ukuranFinal = "1,7 - 2,2";
      break;
    case pakaian === "Batik" && ukuranClient === "M":
      ukuranFinal = "2,2 - 2,5";
      break;
    case pakaian === "Batik" && ukuranClient === "L":
      ukuranFinal = "2,5 - 2,8";
      break;
    case pakaian === "Batik" && ukuranClient === "XL":
      ukuranFinal = "2,8 - 3,2";
      break;
    case pakaian === "Kemeja" && ukuranClient === "S":
      ukuranFinal = "1,6 - 2,1";
      break;
    case pakaian === "Kemeja" && ukuranClient === "M":
      ukuranFinal = "2,1 - 2,4";
      break;
    case pakaian === "Kemeja" && ukuranClient === "L":
      ukuranFinal = "2,4 - 2,7";
      break;
    case pakaian === "Kemeja" && ukuranClient === "XL":
      ukuranFinal = "2,7 - 3,1";
      break;
    case pakaian === "Koko" && ukuranClient === "S":
      ukuranFinal = "1,6 - 2,1";
      break;
    case pakaian === "Koko" && ukuranClient === "M":
      ukuranFinal = "2,6 - 3";
      break;
    case pakaian === "Koko" && ukuranClient === "L":
      ukuranFinal = "3 - 3,3";
      break;
    case pakaian === "Koko" && ukuranClient === "XL":
      ukuranFinal = "3,3 - 3,7";
      break;
    case pakaian === "Jas" && ukuranClient === "S":
      ukuranFinal = "2,5 - 2,9";
      break;
    case pakaian === "Jas" && ukuranClient === "M":
      ukuranFinal = "2,9 - 3,2";
      break;
    case pakaian === "Jas" && ukuranClient === "L":
      ukuranFinal = "3,2 - 3,5";
      break;
    case pakaian === "Jas" && ukuranClient === "XL":
      ukuranFinal = "3,5 - 3,9";
      break;
    case pakaian === "Sarung" && ukuranClient === "S":
      ukuranFinal = "1,6 - 2,1";
      break;
    case pakaian === "Sarung" && ukuranClient === "M":
      ukuranFinal = "2,1 - 2,4";
      break;
    case pakaian === "Sarung" && ukuranClient === "L":
      ukuranFinal = "2,4 - 2,7";
      break;
    case pakaian === "Sarung" && ukuranClient === "XL":
      ukuranFinal = "2,7 - 3,1";
      break;
    case pakaian === "Blouse" && ukuranClient === "S":
      ukuranFinal = "2,2 - 2,7";
      break;
    case pakaian === "Blouse" && ukuranClient === "M":
      ukuranFinal = "2,9 - 3,3";
      break;
    case pakaian === "Blouse" && ukuranClient === "L":
      ukuranFinal = "3,5 - 4";
      break;
    case pakaian === "Blouse" && ukuranClient === "XL":
      ukuranFinal = "4 - 4,5";
      break;
    case pakaian === "Kebaya" && ukuranClient === "S":
      ukuranFinal = "2,2 - 2,7";
      break;
    case pakaian === "Kebaya" && ukuranClient === "M":
      ukuranFinal = "2,9 - 3,3";
      break;
    case pakaian === "Kebaya" && ukuranClient === "L":
      ukuranFinal = "3,5 - 4";
      break;
    case pakaian === "Kebaya" && ukuranClient === "XL":
      ukuranFinal = "4 - 4,5";
      break;
    case pakaian === "Blazer" && ukuranClient === "S":
      ukuranFinal = "2,5 - 3";
      break;
    case pakaian === "Blazer" && ukuranClient === "M":
      ukuranFinal = "2,9 - 3,3";
      break;
    case pakaian === "Blazer" && ukuranClient === "L":
      ukuranFinal = "3,6 - 4";
      break;
    case pakaian === "Blazer" && ukuranClient === "XL":
      ukuranFinal = "4,2 - 4,7";
      break;
    case pakaian === "Gaun" && ukuranClient === "S":
      ukuranFinal = "3 - 3,5";
      break;
    case pakaian === "Gaun" && ukuranClient === "M":
      ukuranFinal = "3,3 - 3,7";
      break;
    case pakaian === "Gaun" && ukuranClient === "L":
      ukuranFinal = "4,1 - 4,5";
      break;
    case pakaian === "Gaun" && ukuranClient === "XL":
      ukuranFinal = "4,5 - 5,1";
      break;
  }
  return ukuranFinal;
}

function retry() {
  let questionarea = document.getElementById("question-area");
  popupResult.style.display = "none";
  card3.style.display = "none";
  questionarea.style.display = "flex";
  card2.style.display = "flex";
  currentQuestion = 0;
  jawaban = {
    nama: "",
    jenisKelamin: "",
    jenisPakaian: "",
    pakaian: "",
    ukuran: "",
  };
  inputNama.value = "";
  pertanyaan = [
    {
      soal: "Hai, Silahkan masukan nama anda",
      jawaban: [{ option: "Lanjut", action: "next" }],
    },
    {
      soal: "Hai Kamu, boleh bantu informasikan jenis kelaminmu?",
      jawaban: [
        { option: "Pria", property: "jenisKelamin" },
        { option: "Wanita", property: "jenisKelamin" },
      ],
    },
    {
      soal: "Baik, Pakaian apakah yang ingin anda buat?",
      jawaban: [
        { option: "Pakaian atas", property: "jenisPakaian" },
        { option: "Pakaian bawah", property: "jenisPakaian" },
      ],
    },
    {
      soal: "Baik, selanjutnya bantu informasi pakaian atas apa yang ingin anda buat?",
    },
    {
      soal: "Baik,  bantu informasikan ukuran pakaian yang biasa anda pakai",
      jawaban: [
        { option: "S", property: "ukuran" },
        { option: "M", property: "ukuran" },
        { option: "L", property: "ukuran" },
        { option: "XL", property: "ukuran" },
      ],
    },
  ];
  loadQuestion();
}

setTimeout(() => {
  loadQuestion();
  card1.style.display = "none";
  questionarea.style.animation = "fade-in 1s 4s forwards";
}, 10000);