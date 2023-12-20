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
    "./assets/model1.png",
    "./assets/model2.png",
    "./assets/model3.png",
    "./assets/model4.png",
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
  
  // new collection
  
  const cardDataNewCollection = [
    {
      imgSrc: "../../Assets/new-colletion/new-collection1.jpg",
      title: "Tenun Blanket - Motif Hitam Merah",
      price: "230.000",
    },
    {
      imgSrc: "../../Assets/new-colletion/new-collection2.jpg",
      title: "Tenun Bulu Baron - Motif Merah Maroon",
      price: "250.000",
    },
    {
      imgSrc: "../../Assets/new-colletion/new-collection3.jpg",
      title: "Tenun Baron - Motif Orange",
      price: "169.000",
    },
    {
      imgSrc: "../../Assets/new-colletion/new-collection4.jpg",
      title: "Tenun Removen - Motif Hitam",
      price: "269.000",
    },
  ];
  
  
  
  const newCollectionContainer = document.getElementById("new-colection");
  
  const cardElementsNewCollection = cardDataNewCollection.map(
    (data) => `
      <div class="slide">
        <div class="card-new-colection">
          <div class="img-new-colection">
            <img src="${data.imgSrc}" alt="">
          </div>
          <div class="desc-new-colection">
            <h3>${data.title}</h3>
            <p>Rp. ${data.price}</p>
          </div>
        </div>
      </div>
    `
  );
  
  newCollectionContainer.innerHTML = cardElementsNewCollection.join("");
  
  // end of new collection
  
  // function poster slider
  
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        if (!items[i].classList.contains('in-view')) {
          items[i].classList.add('in-view')
        }
      } else if (items[i].classList.contains('in-view')) {
        items[i].classList.remove('in-view')
      }
    }
  }
  
  window.addEventListener('load', callbackFunc)
  window.addEventListener('scroll', callbackFunc)
  
  $(document).ready(function () {
    $('.customer-logos').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  })
  
  // end of function poster slider
  
  
  // data best product
  
  const cardDataProductFavorite = [
    {
      imgSrc: "./assets/best-product/best1.png",
      title: "Tenun Blanket - Motif Biru",
      price: "199.000",
      rate: 4.8,
      direct: "detailProduk.html",
    },
    {
      imgSrc: "./assets/best-product/best2.png",
      title: "Tenun Bulu - Motif Sage",
      price: "199.000",
      rate: 4.8,
      direct: "detailProduk.html",
    },
    {
      imgSrc: "./assets/best-product/best3.png",
      title: "Tenun Rewoven - Motif Coklat",
      price: "199.000",
      rate: 4.8,
      direct: "detailProduk.html",
    },
    {
      imgSrc: "./assets/best-product/best4.png",
      title: "Tenun Rewoven - Motif Hijau",
      price: "199.000",
      rate: 4.8,
      direct: "detailProduk.html",
    },
    {
      imgSrc: "./assets/best-product/best5.png",
      title: "Sarung Tenun Goyor - Motif Bunga",
      price: "199.000",
      rate: 4.8,
      direct: "detailProduk.html",
    },
    {
      imgSrc: "./assets/best-product/best6.png",
      title: "Sarung Tenun Goyor - Motif Persegi",
      price: "199.000",
      rate: 4.8,
      direct: "detailProduk.html",
    },
    {
      imgSrc: "./assets/best-product/best7.png",
      title: "Tenun Bulu Baron - Motif Pengantin",
      price: "199.000",
      rate: 4.8,
      direct: "detailProduk.html",
    },
    {
      imgSrc: "./assets/best-product/best8.png",
      title: "Tenun Bulu Baron - Motif Kebaya",
      price: "199.000",
      rate: 4.8,
      direct: "detailProduk.html",
    },
  ];
  
  const ProductFavorite = document.getElementById("con-product-favorite");
  
  const cardElementsProductFavorite = cardDataProductFavorite.map(
    (data) => `
      <div class="card-product-favorite"  onclick="window.location.href = '${data.direct}';">
        <div class="img-favorite">
          <img src="${data.imgSrc}" alt="">
        </div>
        <div class="desc-favorite">
          <div class="title-favorite">
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
  
  ProductFavorite.innerHTML = cardElementsProductFavorite.join("");
  // end of data best product
  
  // data product
  
  const cardDataProduct = [
    {
      id: 1,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket1.jpg",
      title: "Tenun Blanket - Motif Kembang",
      price: "199.000",
      rate: 4.8,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 2,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket2.jpg",
      title: "Tenun Blanket - Motif Gambar",
      price: "199.000",
      rate: 4.6,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 3,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket3.jpg",
      title: "Tenun Blanket - Motif Biru",
      price: "199.000",
      rate: 5.0,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 4,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket4.jpg",
      title: "Tenun Blanket - Motif Merah",
      price: "199.000",
      rate: 3.9,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 5,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket5.jpg",
      title: "Tenun Blanket - Motif Kuning",
      price: "199.000",
      rate: 4.2,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 6,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket6.jpg",
      title: "Tenun Blanket - Motif Hitam Merah",
      price: "199.000",
      rate: 4.1,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 7,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket7.jpg",
      title: "Tenun Blanket - Motif Coklat",
      price: "199.000",
      rate: 4.7,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 8,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket8.jpg",
      title: "Tenun Blanket -Motif Kremer",
      price: "199.000",
      rate: 4.3,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 9,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket9.jpg",
      title: "Tenun Blanket - Motif Hitam Bunga",
      price: "199.000",
      rate: 3.6,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 10,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket10.jpg",
      title: "Tenun Blanket - Motif Hitam Orange",
      price: "199.000",
      rate: 4.0,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 11,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket11.jpg",
      title: "Tenun Blanket - Motif Hijau Kuning",
      price: "199.000",
      rate: 3.8,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 12,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket12.jpg",
      title: "Tenun Blanket - Motif Abu Hitam",
      price: "199.000",
      rate: 4.5,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 13,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket13.jpg",
      title: "Tenun Blanket - Motif Tosca",
      price: "199.000",
      rate: 4.4,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 14,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket14.jpg",
      title: "Tenun Blanket - Motif Garis Hitam",
      price: "199.000",
      rate: 4.9,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 15,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket15.jpg",
      title: "Tenun Blanket - Motif Garis Coklat",
      price: "199.000",
      rate: 3.7,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 16,
      imgSrc: "./assets/produk/tenun-blanket/tenun-blanket16.jpg",
      title: "Tenun Blanket - Motif Kuning Langsat",
      price: "199.000",
      rate: 4.6,
      status: "tenun-blanket",
      direct: "detailProduk.html",
    },
    {
      id: 17,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu1.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 4.2,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 18,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu2.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 4.7,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 19,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu3.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 3.9,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 20,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu4.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 4.5,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 21,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu5.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 3.6,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 22,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu6.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 4.8,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 23,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu7.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 3.7,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 24,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu8.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 4.6,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 25,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu9.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 4.1,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 26,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu10.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 4.9,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 27,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu11.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 3.8,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 28,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu12.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 4.4,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 29,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu13.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 4.3,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 30,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu14.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 3.5,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 31,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu15.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 4.0,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 32,
      imgSrc: "./assets/produk/tenun-bulu/tenun-bulu16.jpg",
      title: "Tenun Bulu - Motif Putih Abu Abu",
      price: "199.000",
      rate: 3.6,
      status: "tenun-bulu",
      direct: "detailProduk.html",
    },
    {
      id: 33,
      imgSrc: "./assets/produk/tenun-removen/tenun-removen1.jpg",
      title: "Tenun Removen - Motif Coklat",
      price: "199.000",
      rate: 3.6,
      status: "tenun-removen",
      direct: "detailProduk.html",
    },
    {
      id: 34,
      imgSrc: "./assets/produk/tenun-removen/tenun-removen2.jpg",
      title: "Tenun Removen - Motif Merah",
      price: "199.000",
      rate: 4.2,
      status: "tenun-removen",
      direct: "detailProduk.html",
    },
    {
      id: 35,
      imgSrc: "./assets/produk/tenun-removen/tenun-removen3.jpg",
      title: "Tenun Removen - Motif Biru",
      price: "199.000",
      rate: 3.8,
      status: "tenun-removen",
      direct: "detailProduk.html",
    },
    {
      id: 36,
      imgSrc: "./assets/produk/tenun-removen/tenun-removen4.jpg",
      title: "Tenun Removen - Motif Hijau",
      price: "199.000",
      rate: 4.1,
      status: "tenun-removen",
      direct: "detailProduk.html",
    },
    {
      id: 37,
      imgSrc: "./assets/produk/tenun-removen/tenun-removen5.jpg",
      title: "Tenun Removen - Motif Ungu",
      price: "199.000",
      rate: 3.9,
      status: "tenun-removen",
      direct: "detailProduk.html",
    },
    {
      id: 38,
      imgSrc: "./assets/produk/tenun-removen/tenun-removen6.jpg",
      title: "Tenun Removen - Motif Kuning",
      price: "199.000",
      rate: 4.0,
      status: "tenun-removen",
      direct: "detailProduk.html",
    },
    {
      id: 39,
      imgSrc: "./assets/produk/tenun-removen/tenun-removen7.jpg",
      title: "Tenun Removen - Motif Putih",
      price: "199.000",
      rate: 4.3,
      status: "tenun-removen",
      direct: "detailProduk.html",
    },
    {
      id: 40,
      imgSrc: "./assets/produk/tenun-removen/tenun-removen8.jpg",
      title: "Tenun Removen - Motif Hitam",
      price: "199.000",
      rate: 3.7,
      status: "tenun-removen",
      direct: "detailProduk.html",
    },
    {
      id: 41,
      imgSrc: "./assets/produk/tenun-baron/tenun-baron1.jpg",
      title: "Tenun Baron - Motif Coklat",
      price: "250.000",
      rate: 4.8,
      status: "tenun-baron",
      direct: "detailProduk.html",
    },
    {
      id: 42,
      imgSrc: "./assets/produk/tenun-baron/tenun-baron2.jpg",
      title: "Tenun Baron - Motif Merah",
      price: "250.000",
      rate: 4.8,
      status: "tenun-baron",
      direct: "detailProduk.html",
    },
    {
      id: 43,
      imgSrc: "./assets/produk/tenun-baron/tenun-baron3.jpg",
      title: "Tenun Baron - Motif Hijau",
      price: "250.000",
      rate: 4.8,
      status: "tenun-baron",
      direct: "detailProduk.html",
    },
    {
      id: 44,
      imgSrc: "./assets/produk/tenun-baron/tenun-baron4.jpg",
      title: "Tenun Baron - Motif Biru",
      price: "250.000",
      rate: 4.8,
      status: "tenun-baron",
      direct: "detailProduk.html",
    },
    {
      id: 45,
      imgSrc: "./assets/produk/tenun-baron/tenun-baron5.jpg",
      title: "Tenun Baron - Motif Ungu",
      price: "250.000",
      rate: 4.8,
      status: "tenun-baron",
      direct: "detailProduk.html",
    },
    {
      id: 46,
      imgSrc: "./assets/produk/tenun-baron/tenun-baron6.jpg",
      title: "Tenun Baron - Motif Kuning",
      price: "250.000",
      rate: 4.8,
      status: "tenun-baron",
      direct: "detailProduk.html",
    },
    {
      id: 47,
      imgSrc: "./assets/produk/tenun-baron/tenun-baron7.jpg",
      title: "Tenun Baron - Motif Putih",
      price: "250.000",
      rate: 4.8,
      status: "tenun-baron",
      direct: "detailProduk.html",
    },
    {
      id: 48,
      imgSrc: "./assets/produk/tenun-baron/tenun-baron8.jpg",
      title: "Tenun Baron - Motif Abu-abu",
      price: "250.000",
      rate: 4.8,
      status: "tenun-baron",
      direct: "detailProduk.html",
    },
    {
      id: 49,
      imgSrc: "./assets/produk/tenun-bulu-baron/tenun-bulu-baron1.jpg",
      title: "Tenun Bulu Baron - Motif Coklat",
      price: "250.000",
      rate: 4.2,
      status: "tenun-bulu-baron",
      direct: "detailProduk.html",
    },
    {
      id: 50,
      imgSrc: "./assets/produk/tenun-bulu-baron/tenun-bulu-baron2.jpg",
      title: "Tenun Bulu Baron - Motif Merah",
      price: "250.000",
      rate: 3.9,
      status: "tenun-bulu-baron",
      direct: "detailProduk.html",
    },
    {
      id: 51,
      imgSrc: "./assets/produk/tenun-bulu-baron/tenun-bulu-baron3.jpg",
      title: "Tenun Bulu Baron - Motif Hijau",
      price: "250.000",
      rate: 4.0,
      status: "tenun-bulu-baron",
      direct: "detailProduk.html",
    },
    {
      id: 52,
      imgSrc: "./assets/produk/tenun-bulu-baron/tenun-bulu-baron4.jpg",
      title: "Tenun Bulu Baron - Motif Biru",
      price: "250.000",
      rate: 4.3,
      status: "tenun-bulu-baron",
      direct: "detailProduk.html",
    },
    {
      id: 53,
      imgSrc: "./assets/produk/tenun-bulu-baron/tenun-bulu-baron5.jpg",
      title: "Tenun Bulu Baron - Motif Ungu",
      price: "250.000",
      rate: 4.1,
      status: "tenun-bulu-baron",
      direct: "detailProduk.html",
    },
    {
      id: 54,
      imgSrc: "./assets/produk/tenun-bulu-baron/tenun-bulu-baron6.jpg",
      title: "Tenun Bulu Baron - Motif Kuning",
      price: "250.000",
      rate: 3.8,
      status: "tenun-bulu-baron",
      direct: "detailProduk.html",
    },
    {
      id: 55,
      imgSrc: "./assets/produk/tenun-bulu-baron/tenun-bulu-baron7.jpg",
      title: "Tenun Bulu Baron - Motif Putih",
      price: "250.000",
      rate: 4.5,
      status: "tenun-bulu-baron",
      direct: "detailProduk.html",
    },
    {
      id: 56,
      imgSrc: "./assets/produk/tenun-bulu-baron/tenun-bulu-baron8.jpg",
      title: "Tenun Bulu Baron - Motif Abu-abu",
      price: "250.000",
      rate: 4.4,
      status: "tenun-bulu-baron",
      direct: "detailProduk.html",
    },
    {
      id: 57,
      imgSrc: "./assets/produk/tenun-removen-baron/tenun-removen-baron1.jpg",
      title: "Tenun Removen Baron - Motif Coklat",
      price: "250.000",
      rate: 4.6,
      status: "tenun-removen-baron",
      direct: "detailProduk.html",
    },
    {
      id: 58,
      imgSrc: "./assets/produk/tenun-removen-baron/tenun-removen-baron2.jpg",
      title: "Tenun Removen Baron - Motif Merah",
      price: "250.000",
      rate: 4.7,
      status: "tenun-removen-baron",
      direct: "detailProduk.html",
    },
    {
      id: 59,
      imgSrc: "./assets/produk/tenun-removen-baron/tenun-removen-baron3.jpg",
      title: "Tenun Removen Baron - Motif Hijau",
      price: "250.000",
      rate: 4.9,
      status: "tenun-removen-baron",
      direct: "detailProduk.html",
    },
    {
      id: 60,
      imgSrc: "./assets/produk/tenun-removen-baron/tenun-removen-baron4.jpg",
      title: "Tenun Removen Baron - Motif Biru",
      price: "250.000",
      rate: 4.0,
      status: "tenun-removen-baron",
      direct: "detailProduk.html",
    },
  ];
  
  const groupedProducts = {};
  
  cardDataProduct.forEach((data) => {
    if (!groupedProducts[data.status]) {
      groupedProducts[data.status] = [];
    }
    groupedProducts[data.status].push(data);
  });
  
  // Fungsi untuk menghasilkan elemen HTML untuk produk
  function generateProductElements(products) {
    return products
      .map(
        (data) => `
        <div class="card-product" onclick="window.location.href = '${data.direct}';">
          <div class="img-product">
            <img src="${data.imgSrc}" alt="">
          </div>
          <div class="desc-product">
            <div class="title-product">
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
      )
      .join("");
  }
  
  const productContainers = {
    "tenun-blanket": document.getElementById("con-product-tenunBlanket"),
    "tenun-bulu": document.getElementById("con-product-tenunBulu"),
    "tenun-removen": document.getElementById("con-product-tenunRemoven"),
    "tenun-baron": document.getElementById("con-product-tenunBaron"),
    "tenun-bulu-baron": document.getElementById("con-product-tenunBuluBaron"),
  };
  
  for (const status in groupedProducts) {
    if (productContainers[status]) {
      const products = groupedProducts[status];
      const productElements = generateProductElements(products);
      productContainers[status].innerHTML = productElements;
    }
  }
  
  // filter rating
  
  const filterRatingSelect = document.getElementById("filter-rating");
  
  filterRatingSelect.addEventListener("change", function () {
    const selectedValue = filterRatingSelect.value;
  
    for (const status in groupedProducts) {
      if (productContainers[status]) {
        let products = groupedProducts[status];
  
        if (selectedValue === "tertinggi") {
          products = products.slice().sort((a, b) => b.rate - a.rate);
        } else if (selectedValue === "terendah") {
          products = products.slice().sort((a, b) => a.rate - b.rate);
        }
  
        const newProductElements = generateProductElements(products);
        const oldProductContainer = productContainers[status];
  
        // Tambahkan animasi fade-out ke konten lama
        oldProductContainer.classList.add("fade-out");
  
        setTimeout(() => {
          // Ganti konten dan hapus kelas fade-out
          oldProductContainer.innerHTML = newProductElements;
          oldProductContainer.classList.remove("fade-out");
  
          // Pemicu animasi fade-in dengan menambahkan kelas fade-in
          oldProductContainer.classList.add("fade-in");
        }, 0); // Sesuaikan waktu ini dengan durasi animasi Anda
  
        setTimeout(() => {
          // Hapus kelas fade-in setelah animasi fade-in selesai
          oldProductContainer.classList.remove("fade-in");
        }, 500); // Sesuaikan waktu ini dengan durasi animasi Anda
      }
    }
  });
  
  // end filter rating
  
  // filter produk
  
  document.addEventListener("DOMContentLoaded", function () {
    const filterProduk = document.getElementById("filter-produk");
    const produkElements = document.querySelectorAll(".produks");
    const dataKosongElement = document.querySelector(".dataKosong");
  
    filterProduk.addEventListener("change", function () {
      const selectedValue = this.value;
  
      let dataFound = false;
  
      produkElements.forEach(function (element) {
        if (
          selectedValue === "all" ||
          element.classList.contains(selectedValue)
        ) {
          if (!element.classList.contains("fadeIn")) {
            element.classList.remove("fadeOut");
            element.classList.add("fadeIn");
            element.style.display = "block";
          }
          dataFound = true;
        } else {
          if (!element.classList.contains("fadeOut")) {
            element.classList.remove("fadeIn");
            element.classList.add("fadeOut");
            element.style.display = "none";
          }
        }
      });
  
      dataKosongElement.style.display = dataFound ? "none" : "flex";
  
      if (selectedValue === "all") {
        setTimeout(function () {
          produkElements.forEach(function (element) {
            element.classList.remove("fadeIn");
          });
        }, 500);
      }
    });
  });
  
  // end of filter produk