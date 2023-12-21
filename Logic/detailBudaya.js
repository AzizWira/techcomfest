// fungsi untuk tabbar
const buttons = document.querySelectorAll(".nav-content button");
const sections = document.querySelectorAll(".article");

function showSection(sectionId) {
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "flex";
    } else {
      section.style.display = "none";
    }
  });
}

function showAllSections() {
  sections.forEach((section) => {
    section.style.display = "flex";
  });
}

function setInitialState() {
  showAllSections();
}

setInitialState();

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const targetId = button.getAttribute("data-target");
    if (targetId === "pageSemua") {
      showAllSections();
    } else {
      showSection(targetId);
    }

    // Hapus kelas "active" dari semua tombol
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Tambahkan kelas "active" ke tombol yang diklik
    button.classList.add("active");
  });
});