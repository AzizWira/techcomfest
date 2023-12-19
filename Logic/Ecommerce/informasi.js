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
        autoplaySpeed: 2500,
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
            breakpoint: 528,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      })
    })
    
    // end of function poster slider
  
    // popup
  
  const showRewoven = () => {
    const background = document.querySelector("#popup-rewoven");
    background.style.display = "flex";
    const popupRewoven = document.querySelector("#detail-rewoven");
    popupRewoven.style.display = "flex";
    popupRewoven.style.animation = "slide-down 0.3s ease-in-out";
  };
  
  const closeRewoven = () => {
    const background = document.querySelector("#popup-rewoven");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupRewoven = document.querySelector("#detail-rewoven");
    setTimeout(() => (popupRewoven.style.display = "none"), 250);
    popupRewoven.style.animation = "slide-up 0.3s ease-in-out";
  };
  
  const showBuluBaron = () => {
    const background = document.querySelector("#popup-buluBaron");
    background.style.display = "flex";
    const popupBuluBaron = document.querySelector("#detail-buluBaron");
    popupBuluBaron.style.display = "flex";
    popupBuluBaron.style.animation = "slide-down 0.3s ease-in-out";
  };
  
  const closeBuluBaron = () => {
    const background = document.querySelector("#popup-buluBaron");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupBuluBaron = document.querySelector("#detail-buluBaron");
    setTimeout(() => (popupBuluBaron.style.display = "none"), 250);
    popupBuluBaron.style.animation = "slide-up 0.3s ease-in-out";
  };
  
  const showBaron = () => {
    const background = document.querySelector("#popup-baron");
    background.style.display = "flex";
    const popupBaron = document.querySelector("#detail-baron");
    popupBaron.style.display = "flex";
    popupBaron.style.animation = "slide-down 0.3s ease-in-out";
  };
  
  const closeBaron = () => {
    const background = document.querySelector("#popup-baron");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupBaron = document.querySelector("#detail-baron");
    setTimeout(() => (popupBaron.style.display = "none"), 250);
    popupBaron.style.animation = "slide-up 0.3s ease-in-out";
  };
  
  const showBulu = () => {
    const background = document.querySelector("#popup-bulu");
    background.style.display = "flex";
    const popupBulu = document.querySelector("#detail-bulu");
    popupBulu.style.display = "flex";
    popupBulu.style.animation = "slide-down 0.3s ease-in-out";
  };
  
  const closeBulu = () => {
    const background = document.querySelector("#popup-bulu");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupBulu = document.querySelector("#detail-bulu");
    setTimeout(() => (popupBulu.style.display = "none"), 250);
    popupBulu.style.animation = "slide-up 0.3s ease-in-out";
  };
  
  const showBlanket = () => {
    const background = document.querySelector("#popup-blanket");
    background.style.display = "flex";
    const popupBlanket = document.querySelector("#detail-blanket");
    popupBlanket.style.display = "flex";
    popupBlanket.style.animation = "slide-down 0.3s ease-in-out";
  };
  
  const closeBlanket = () => {
    const background = document.querySelector("#popup-blanket");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupBlanket = document.querySelector("#detail-blanket");
    setTimeout(() => (popupBlanket.style.display = "none"), 250);
    popupBlanket.style.animation = "slide-up 0.3s ease-in-out";
  };
  
  // 