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
  
  const cardCartElement = [
    {
      id: 1,
      image: "../../Assets/best-product/best3.png",
      nama: "Tenun Rewoven - Motif Coklat | 3m×3m",
      harga: 125000,
      jumlahBarang: 1,
      date: "22-7-2023",
    },
    {
      id: 2,
      image: "../../Assets/best-product/best4.png",
      nama: "Tenun Rewoven - Motif Hijau | 2m×2m",
      harga: 259000,
      jumlahBarang: 3,
      date: "19-7-2023",
    },
    {
      id: 3,
      image: "../../Assets/best-product/best5.png",
      nama: "Sarung Tenun Goyor - Motif Bunga | 1m×1m",
      harga: 100000,
      jumlahBarang: 2,
      date: "25-7-2023",
    },
    {
      id: 4,
      image: "../../Assets/best-product/best2.png",
      nama: "Tenun Bulu Baron - Motif Bunga | 1m×1m",
      harga: 235000,
      jumlahBarang: 4,
      date: "29-7-2023",
    },
  ];
  
  // Temukan elemen dengan ID "jumlahBarangIndex"
  const jumlahBarangIndex = document.getElementById("jumlahBarangIndex");
  
  // Set isi dari elemen "jumlahBarangIndex" dengan panjang (length) dari cardCartElement
  jumlahBarangIndex.textContent = `${cardCartElement.length} Produk`;
  
  // Fungsi perbandingan untuk mengurutkan berdasarkan tanggal
  function compareByDate(a, b) {
    const dateA = new Date(
      a.date.split("-").reverse().join("-") // Ubah format tanggal dari "DD-MM-YYYY" ke "YYYY-MM-DD"
    );
    const dateB = new Date(
      b.date.split("-").reverse().join("-") // Ubah format tanggal dari "DD-MM-YYYY" ke "YYYY-MM-DD"
    );
    return dateB - dateA; // Urutkan dari yang terbaru ke yang terlama
  }
  
  const cartProduct = document.getElementById("body-cart");
  
  // Fungsi untuk mengupdate total harga dan jumlah produk
  function updateTotal() {
    let totalHarga = 0;
    let totalProduk = 0; // Ubah nama variabel menjadi totalProduk
  
    const checkboxes = document.querySelectorAll(".pilihan");
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const jumlahInput = document.getElementById(
          `jumlah-${cardCartElement[index].id}`
        );
        const jumlah = parseInt(jumlahInput.value);
        cardCartElement[index].jumlah = jumlah; // Perbarui jumlah barang dalam objek
        totalHarga += cardCartElement[index].harga * jumlah;
        totalProduk++; // Tambahkan 1 ke totalProduk jika checkbox dicentang
      }
    });
  
    const totalHargaSpan = document.getElementById("totalHarga");
    const jumlahBarangSpan = document.getElementById("jumlahBarang");
  
    totalHargaSpan.textContent = `: Rp${totalHarga.toLocaleString()}`;
    jumlahBarangSpan.textContent = `(${totalProduk} Produk)`; // Perbarui tampilan dengan totalProduk
  }
  
  // Fungsi untuk menghapus barang dari keranjang dengan konfirmasi
  function deleteCartItem(id) {
    // Tampilkan dialog konfirmasi
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus item ini?"
    );
  
    if (isConfirmed) {
      const checkboxes = document.querySelectorAll(".pilihan");
      const isCheckedArray = Array.from(checkboxes).map(
        (checkbox) => checkbox.checked
      );
  
      const index = cardCartElement.findIndex((item) => item.id === id);
      if (index !== -1) {
        cardCartElement.splice(index, 1);
        renderCart();
  
        // Setelah menghapus, atur ulang status checkbox
        checkboxes.forEach((checkbox, index) => {
          checkbox.checked = isCheckedArray[index];
        });
  
        // Update teks "3 Barang" dengan jumlah data dalam array
        const jumlahBarangParagraph =
          document.getElementById("jumlahBarangIndex");
        jumlahBarangParagraph.textContent = `${cardCartElement.length} Barang`;
  
        updateTotal();
      }
    }
  }
  
  // Fungsi untuk merender ulang tampilan keranjang
  function renderCart() {
    // Urutkan array berdasarkan tanggal
    cardCartElement.sort(compareByDate);
  
    const cartProductElement = cardCartElement.map((item) => {
      const inputId = `jumlah-${item.id}`;
      return `
          <div class="card-cart">
            <div class="left">
              <input type="checkbox" class="pilihan" data-harga="${item.harga}" />
              <div class="product">
                <div class="img-cart">
                  <img src="${item.image}" alt="" />
                </div>
                <p class="name-product">${item.nama}</p>
              </div>
            </div>
            <div class="right">
              <div class="jumlahItem">
                <iconify-icon icon="charm:minus" class="KurangCart" data-target="${inputId}"></iconify-icon>
                <input type="text" id="${inputId}" class="jumlah-input" value="${
        item.jumlahBarang
      }" min="1" />
                <iconify-icon icon="charm:plus" class="tambahCart" data-target="${inputId}"></iconify-icon>
              </div>
              <p class="harga-product">Rp${item.harga.toLocaleString()}</p>
              <div class="aksi" data-id="${item.id}">
                <iconify-icon icon="ion:trash-outline" class="hapus-cart"></iconify-icon>
              </div>
            </div>
          </div>
        `;
    });
  
    cartProduct.innerHTML = cartProductElement.join("");
  
    // Event listener untuk tombol Kurang
    const kurangiButtons = document.querySelectorAll(".KurangCart");
    kurangiButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetInputId = button.getAttribute("data-target");
        const targetInput = document.getElementById(targetInputId);
        if (targetInput.value > 1) {
          targetInput.value--;
          updateTotal();
        }
      });
    });
  
    // Event listener untuk tombol Tambah
    const tambahButtons = document.querySelectorAll(".tambahCart");
    tambahButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetInputId = button.getAttribute("data-target");
        const targetInput = document.getElementById(targetInputId);
        targetInput.value++;
        updateTotal();
      });
    });
  
    // Event listener untuk checkbox pilihan
    const pilihanCheckboxes = document.querySelectorAll(".pilihan");
    pilihanCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        updateTotal();
      });
    });
  
    // Event listener untuk tombol Hapus
    const hapusButtons = document.querySelectorAll(".aksi");
    hapusButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = parseInt(button.getAttribute("data-id"));
        deleteCartItem(id);
        updateTotal();
      });
    });
  
    updateTotal();
  }
  
  renderCart();
  
  // Event listener untuk checkbox "Pilih Semua"
  const pilihSemuaCheckbox = document.getElementById("pilihSemua");
  pilihSemuaCheckbox.addEventListener("change", () => {
    const checkboxes = document.querySelectorAll(".pilihan");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = pilihSemuaCheckbox.checked;
    });
    updateTotal();
  });
  
  const pilihSemuaCheckbox2 = document.getElementById("pilihSemua2");
  pilihSemuaCheckbox2.addEventListener("change", () => {
    const checkboxes = document.querySelectorAll(".pilihan");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = pilihSemuaCheckbox2.checked;
    });
    updateTotal();
  });
  
  // Event listener untuk tombol Checkout
  const checkoutButton = document.querySelector(".checkout-cart");
  checkoutButton.addEventListener("click", () => {
    const selectedItems = [];
    const checkboxes = document.querySelectorAll(".pilihan");
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        selectedItems.push({
          id: cardCartElement[index].id,
          nama: cardCartElement[index].nama,
          jumlahBarang: cardCartElement[index].jumlahBarang,
          harga: cardCartElement[index].harga,
        });
      }
    });
  
    // Di sini Anda dapat melakukan apa pun dengan item yang dipilih, seperti mengirimkan data ke server atau halaman checkout.
    // Misalnya:
    console.log("Item yang dipilih:", selectedItems);
    // Redirect ke halaman checkout
    // window.location.href = "checkout.html";
  });