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
    const belanjaButton = document.getElementById("belanjaButton");
    if (belanjaButton) {
      belanjaButton.onclick = function () {
        window.location.href = "produk.html";
      };
    }
    if (document.getElementById("supportQuestion")) {
      document.getElementById("supportQuestion").onclick = function () {
        window.location.href = "supportQuestion.html";
      };
    }
  });
  
  function openLinkInNewTab(link) {
    window.open(link, "_blank");
  }
  
  // auto slide
  
  const images = [
    "../../Assets/model1.png",
    "../../Assets/model2.png",
    "../../Assets/model3.png",
    "../../Assets/model4.png",
  ];
  let currentImageIndex = 0;
  
  const previewImage = document.querySelector(".preview-img");
  
  function changeImage() {
    previewImage.classList.add("hidden-preview");
  
    setTimeout(() => {
      previewImage.src = images[currentImageIndex];
      previewImage.classList.remove("hidden-preview");
  
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 500); // Delay sebelum mengubah gambar (1000ms)
  }
  
  setInterval(changeImage, 3000);
  
  // end of auto slide
  
  // data information
  
  const cardDataInformation = [
    {
      imgSrc: "../../Assets/icon/fi-rr-clock.svg",
      title: "Jam Buka",
      desc: "Senin - Sabtu<br>09.00 WIB - 20.00 WIB",
      link: "#",
    },
    {
      imgSrc: "../../Assets/icon/fi-rr-shopping-bag.svg",
      title: "Shopee",
      desc: "tenuntroso_etnik",
      link: "https://shopee.co.id/tenuntroso_etnik",
    },
    {
      imgSrc: "../../Assets/icon/fi-rr-phone-call.svg",
      title: "WhatsApp",
      desc: "0896-6930-8663",
      link: "https://api.whatsapp.com/send?phone=6289669308663&text=Halo%20Admin%20@tenuntroso_etnik",
    },
    {
      imgSrc: "../../Assets/icon/fi-rr-marker.svg",
      title: "Lokasi",
      desc: "Jln. Kyai Daren, Daren, Jepara, Jawa Tengah",
      link: "https://www.google.com/maps",
    },
    // Add more card data objects as needed
  ];
  
  const information = document.getElementById("information");
  
  // Use map to create card elements and join them into a string
  const cardElements = cardDataInformation.map(
    (data) => `
    <div class="card-information" onclick="openLinkInNewTab('${data.link}')">
      <div class="img-title-information">
        <div class="img-information">
          <img src="${data.imgSrc}" alt="" />
        </div>
        <h2>${data.title}</h2>
      </div>
      <p>${data.desc}</p>
    </div>
    `
  );
  
  // Insert the card elements into the card container
  
  if (information) {
    // Gunakan elemen hanya jika ditemukan
    information.innerHTML = cardElements.join("");
  } else {
    console.error("Element dengan ID 'information' tidak ditemukan dalam DOM.");
  }
  
  // end of data information
  
  // data best product
  
  const cardDataBestProduct = [
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
    {
      imgSrc: "../../Assets/best-product/best5.png",
      title: "Sarung Tenun Goyor - Motif Bunga",
      price: "199.000",
      rate: 4.8,
      direct: "detail.html",
    },
    {
      imgSrc: "../../Assets/best-product/best6.png",
      title: "Sarung Tenun Goyor - Motif Persegi",
      price: "199.000",
      rate: 4.8,
      direct: "detail.html",
    },
    {
      imgSrc: "../../Assets/best-product/best7.png",
      title: "Tenun Bulu Baron - Motif Pengantin",
      price: "199.000",
      rate: 4.8,
      direct: "detail.html",
    },
    {
      imgSrc: "../../Assets/best-product/best8.png",
      title: "Tenun Bulu Baron - Motif Kebaya",
      price: "199.000",
      rate: 4.8,
      direct: "detail.html",
    },
  ];
  
  const bestProduct = document.getElementById("con-best-product");
  
  const cardElementsBestProduct = cardDataBestProduct.map(
    (data) => `
      <div class="card-best-product" onclick="window.location.href = '${data.direct}';">
        <div class="img-best">
          <img src="${data.imgSrc}" alt="">
        </div>
        <div class="desc-best">
          <div class="title-best">
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
  
  bestProduct.innerHTML = cardElementsBestProduct.join("");
  // end of data best product