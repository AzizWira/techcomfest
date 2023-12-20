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
  
  const showPopupButton = document.getElementById("btn-create");
  const showPopupEdit = document.getElementById("btn-edit");
  const popupElement = document.getElementById("popup-success");
  
  showPopupButton.addEventListener("click", function () {
    const background = document.querySelector("#popup-success");
    background.style.display = "flex";
    const popupSuccess = document.querySelector("#detail-success");
    popupSuccess.style.display = "flex";
    popupSuccess.style.animation = "slide-down 0.3s ease-in-out";
  });
  
  showPopupEdit.addEventListener("click", function () {
    const background = document.querySelector("#popup-edit");
    background.style.display = "flex";
    const popupSuccess = document.querySelector("#detail-edit");
    popupSuccess.style.display = "flex";
    popupSuccess.style.animation = "slide-down 0.3s ease-in-out";
  });
  
  function closePopupEdit() {
    const background = document.querySelector("#popup-edit");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupSuccess = document.querySelector("#detail-edit");
    setTimeout(() => (popupSuccess.style.display = "none"), 250);
    popupSuccess.style.animation = "slide-up 0.3s ease-in-out";
    setTimeout(() => (window.location.href = "checkout.html"), 300);
  }
  
  function closePopup() {
    const background = document.querySelector("#popup-success");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupSuccess = document.querySelector("#detail-success");
    setTimeout(() => (popupSuccess.style.display = "none"), 250);
    popupSuccess.style.animation = "slide-up 0.3s ease-in-out";
    setTimeout(() => (window.location.href = "index.html"), 300);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".con-btn-payment button");
    const paymentOptionsContainer = document.getElementById("paymentOptions");
  
    class CardPayment {
      constructor(methods, imageSrc, name) {
        this.methods = methods;
        this.imageSrc = imageSrc;
        this.name = name;
        this.element = this.createCard();
      }
  
      createCard() {
        const card = document.createElement("div");
        card.classList.add("card-payment");
        card.style.display = "none"; // Awalnya sembunyikan semua kartu
  
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-payment");
        const img = document.createElement("img");
        img.src = this.imageSrc;
        imgContainer.appendChild(img);
  
        const p = document.createElement("p");
        p.textContent = this.name;
  
        card.appendChild(imgContainer);
        card.appendChild(p);
        paymentOptionsContainer.appendChild(card);
  
        return card;
      }
  
      show() {
        this.element.style.display = "flex";
      }
  
      hide() {
        this.element.style.display = "none";
      }
    }
  
    const cardPayments = [
      new CardPayment(["COD"], "../../Assets/option-payment/cod.png", "COD"),
      new CardPayment(
        ["TransferBank"],
        "../../Assets/option-payment/bri.png",
        "Bank BRI"
      ),
      new CardPayment(
        ["TransferBank"],
        "../../Assets/option-payment/bni.png",
        "Bank BNI"
      ),
      new CardPayment(
        ["TransferBank"],
        "../../Assets/option-payment/bca.png",
        "Bank BCA"
      ),
      new CardPayment(["EMoney"], "../../Assets/option-payment/gopay.png", "GOPAY"),
      new CardPayment(["EMoney"], "../../Assets/option-payment/dana.png", "DANA"),
      new CardPayment(["EMoney"], "../../Assets/option-payment/ovo.png", "OVO"),
      new CardPayment(["KartuKredit"], "../../Assets/option-payment/bca.png", "Bank BCA"),
      new CardPayment(["KartuKredit"], "../../Assets/option-payment/bni.png", "Bank BNI"),
      new CardPayment(["KartuKredit"], "../../Assets/option-payment/bri.png", "Bank BRI"),
    ];
  
    // Fungsi untuk menampilkan kartu pembayaran berdasarkan metode yang dipilih
    function showPaymentOptions(selectedMethod) {
      cardPayments.forEach((cardPayment) => {
        if (cardPayment.methods.includes(selectedMethod)) {
          cardPayment.show();
        } else {
          cardPayment.hide();
        }
      });
    }
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // Menghapus kelas 'active' dari semua tombol
        buttons.forEach((btn) => btn.classList.remove("active"));
        // Menambahkan kelas 'active' ke tombol yang diklik
        this.classList.add("active");
  
        const selectedMethod = this.getAttribute("data-method");
        showPaymentOptions(selectedMethod);
      });
    });
  
    // Menampilkan kartu pembayaran berdasarkan metode yang aktif pada awalnya
    const activeButton = document.querySelector(".con-btn-payment .active");
    const activeMethod = activeButton.getAttribute("data-method");
    showPaymentOptions(activeMethod);
  });