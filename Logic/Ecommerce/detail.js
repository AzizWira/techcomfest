// Ketika dokumen HTML telah dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", function () {
    // Temukan elemen "Back to Top"
    var backToTopBtn = document.getElementById("backToTop");
  
    // Tampilkan elemen ketika pengguna telah menggulir ke bawah sejauh 50 piksel dari atas
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 200) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });
  
    // Atur tindakan ketika elemen diklik
    backToTopBtn.addEventListener("click", function () {
      // Gulir halaman ke atas dengan efek smooth
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("supportQuestion")) {
      document.getElementById("supportQuestion").onclick = function () {
        window.location.href = "../supportQuestion.html";
      };
    }
  });
  
  // Mendapatkan elemen tombol "Lihat Selengkapnya" dan elemen informasi produk
  const showMoreBtn = document.getElementById("showMoreBtn");
  const informasiProduct = document.querySelector(".informasi-product");
  
  // Menambahkan event listener untuk tombol "Lihat Selengkapnya"
  showMoreBtn.addEventListener("click", function () {
    informasiProduct.classList.toggle("show");
    // Memeriksa apakah informasi produk sedang ditampilkan atau tidak
    if (informasiProduct.classList.contains("show")) {
      // Menampilkan informasi produk dengan efek animasi fadeIn
      informasiProduct.style.maxHeight = "1000px"; // Mengubah max-height untuk menampilkan informasi
      informasiProduct.style.animation = "fadeIn 0.3s"; // Atur animasi sesuai kebutuhan
      showMoreBtn.textContent = "Tutup Selengkapnya..."; // Mengubah teks tombol
    } else {
      // Menyembunyikan informasi produk dengan efek animasi fadeOut
      informasiProduct.style.animation = "fadeOut 0.3s"; // Atur animasi sesuai kebutuhan
      setTimeout(function () {
        informasiProduct.style.maxHeight = "0"; // Mengubah max-height untuk menyembunyikan informasi
        showMoreBtn.textContent = "Lihat Selengkapnya...."; // Mengubah teks tombol
      }, 0); // Waktu animasi
    }
  });
  
  //
  
  function focusElement(element) {
    // Remove focus from all elements with class "card-size"
    const cardSizeElements = document.querySelectorAll(".card-size");
    cardSizeElements.forEach((el) => {
      el.classList.remove("focused");
    });
  
    // Add focus to the clicked element
    element.classList.add("focused");
  }
  
  //
  
  const kurangiButton = document.getElementById("kurangi");
  const tambahButton = document.getElementById("tambah");
  const jumlahInput = document.getElementById("jumlah");
  
  kurangiButton.addEventListener("click", () => {
    if (jumlahInput.value > 0) {
      jumlahInput.value--;
    }
  });
  
  tambahButton.addEventListener("click", () => {
    jumlahInput.value++;
  });
  
  jumlahInput.addEventListener("change", () => {
    if (jumlahInput.value < 0) {
      jumlahInput.value = 0;
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const inputJumlah = document.getElementById("jumlah");
  
    // Validasi input agar hanya menerima angka
    inputJumlah.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
  });
  
  // data review
  
  const cardReviewElements = [
    {
      nama: "Sarah Anderson Johnson",
      rate: 5,
      message:
        "Produknya sangat cantik dan berkualitas tinggi! Motifnya benar-benar unik dan saya senang memiliki tenun Troso ini di koleksi saya.",
      date: "15 Agustus 2023",
      images: [
        "../../Assets/best-product/best1.png",
        "../../Assets/best-product/best2.png",
      ],
    },
    {
      nama: "Ahmad Al-Mansoori",
      rate: 4,
      message:
        "Saya suka tenun Troso ini. Harganya terjangkau dan hasil tenunnya sangat halus. Hanya saja pengiriman agak lambat.",
      date: "10 Agustus 2023",
      images: ["../../Assets/best-product/best3.png"],
    },
    {
      nama: "Nina Rodriguez",
      rate: 5,
      message:
        "Tenun Troso ini benar-benar mengagumkan! Saya sangat puas dengan kualitasnya dan pelayanan pelanggan yang ramah.",
      date: "5 Agustus 2023",
      images: [],
    },
    {
      nama: "Rudi Hartanto",
      rate: 4,
      message:
        "Motifnya bagus, tapi saya harap ada lebih banyak pilihan warna yang tersedia. Saya suka kualitas tenunnya.",
      date: "28 Juli 2023",
      images: ["../../Assets/best-product/best5.png"],
    },
    {
      nama: "Lia Chen",
      rate: 5,
      message:
        "Ini adalah hadiah ulang tahun yang sempurna untuk teman saya. Dia sangat senang dengan tenun Troso ini.",
      date: "20 Juli 2023",
      images: [
        "../../Assets/best-product/best6.png",
        "../../Assets/best-product/best2.png",
      ],
    },
    {
      nama: "Budi Susanto",
      rate: 5,
      message:
        "Kualitasnya luar biasa. Saya akan merekomendasikan produk ini kepada teman-teman saya.",
      date: "15 Juli 2023",
      images: [],
    },
    {
      nama: "Rina Wang",
      rate: 4,
      message:
        "Saya membeli tenun Troso ini sebagai hadiah pernikahan, dan pasangan saya sangat menyukainya. Terima kasih!",
      date: "10 Juli 2023",
      images: [],
    },
    {
      nama: "Dian Wu",
      rate: 5,
      message:
        "Sangat puas dengan pembelian ini. Motifnya bagus dan proses pengiriman cepat.",
      date: "5 Juli 2023",
      images: [
        "../../Assets/best-product/best1.png",
        "../../Assets/best-product/best2.png",
      ],
    },
    {
      nama: "Agus Pranoto",
      rate: 4,
      message:
        "Saya senang dengan produknya, tapi saya harap mereka akan menambahkan opsi ukuran yang berbeda.",
      date: "28 Juni 2023",
      images: [],
    },
    {
      nama: "Maya Sari",
      rate: 5,
      message:
        "Saya sudah lama mencari tenun Troso berkualitas, dan saya menemukannya di sini. Sangat direkomendasikan!",
      date: "20 Juni 2023",
      images: ["../../Assets/best-product/best6.png"],
    },
  ];
  
  const itemsPerPage = 3;
  let currentPage = 1;
  
  const PreviewProduct = document.getElementById("con-card-preview");
  
  function renderPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = cardReviewElements.slice(startIndex, endIndex);
  
    const cardElementsReview = pageData.map(
      (data) => `
              <div class="card-preview">
              <div class="header-preview">
                <div class="header-preview1">
                  <h4>${data.nama}</h4>
                  <p><iconify-icon icon="ic:round-star"></iconify-icon>${
                    data.rate
                  }</p>
                </div>
                <div class="header-preview2">
                  <div class="date">${data.date}</div>
                </div>
              </div>
              <div class="massage-preview">
                ${data.message}
              </div>
              ${
                data.images.length > 0
                  ? `<div class="con-img-preview">
                    ${data.images
                      .map(
                        (image) => `
                      <div class="img-preview">
                        <img src="${image}" alt="" />
                      </div>
                    `
                      )
                      .join("")}
                  </div>`
                  : ""
              }
            </div>
              `
    );
  
    PreviewProduct.innerHTML = cardElementsReview.join("");
  }
  
  function changePage(newPage) {
    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > Math.ceil(cardReviewElements.length / itemsPerPage)) {
      newPage = Math.ceil(cardReviewElements.length / itemsPerPage);
    }
  
    currentPage = newPage;
    renderPage(currentPage);
  
    const paginationButtons = document.querySelectorAll(".btn-pagination");
    paginationButtons.forEach((button) => button.classList.remove("active"));
  
    const activeButton = document.getElementById(`page${currentPage}`);
    activeButton.classList.add("active");
  }
  
  const prevPageButton = document.getElementById("prev-page");
  const nextPageButton = document.getElementById("next-page");
  
  prevPageButton.addEventListener("click", () => changePage(currentPage - 1));
  nextPageButton.addEventListener("click", () => changePage(currentPage + 1));
  
  // Generate pagination buttons dynamically based on data length
  const paginationContainer = document.getElementById("pagination");
  const totalPages = Math.ceil(cardReviewElements.length / itemsPerPage);
  for (let i = 2; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.classList.add("btn-pagination");
    pageButton.textContent = i;
    pageButton.id = `page${i}`;
    paginationContainer.insertBefore(pageButton, nextPageButton);
    pageButton.addEventListener("click", () => changePage(i));
  }
  
  renderPage(currentPage);
  
  // end of pagination
  
  // data product lainnya
  
  const cardProductLainnyaElements = [
    {
      imgSrc: "../../Assets/best-product/best1.png",
      title: "Tenun Blanket - Motif Biru",
      price: "199.000",
      rate: 4.8,
      direct: "detail.html",
    },
    {
      imgSrc: "../../Assets/best-product/best2.png",
      title: "Tenun Bulu - Motif Sage",
      price: "199.000",
      rate: 4.8,
      direct: "detail.html",
    },
    {
      imgSrc: "../../Assets/best-product/best3.png",
      title: "Tenun Rewoven - Motif Coklat",
      price: "199.000",
      rate: 4.8,
      direct: "detail.html",
    },
    {
      imgSrc: "../../Assets/best-product/best4.png",
      title: "Tenun Rewoven - Motif Hijau",
      price: "199.000",
      rate: 4.8,
      direct: "detail.html",
    },
  ];
  
  const LainnyaProduct = document.getElementById("con-product-lainnya");
  
  const cardElementsLainnya = cardProductLainnyaElements.map(
    (data) => `
    <div class="card-product-lainnya" onclick="window.location.href = '${data.direct}';">
        <div class="img-lainnya">
          <img src="${data.imgSrc}" alt="">
        </div>
        <div class="desc-lainnya">
          <div class="title-lainnya">
            <h3>${data.title}</h3>
          </div>
          <p class="price">Rp. ${data.price}</p>
          <div class="rate">
            <iconify-icon icon="ic:round-star"></iconify-icon>
            <p>${data.rate}</p>
          </div>
        </div>
      </div>
    `
  );
  
  LainnyaProduct.innerHTML = cardElementsLainnya.join("");