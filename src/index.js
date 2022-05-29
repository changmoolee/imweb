// modal

const cards = document.querySelectorAll(".card");

const modal = document.querySelector(".modal");

const modalCloseIcon = document.querySelector(".modal-close-icon");

const modalOverlay = document.querySelector(".modal-overlay");

const openModal =
  ({ image, title, content }) =>
  () => {
    modal.getElementsByTagName("img")[0].src = image;
    modal.getElementsByTagName("h3")[0].innerText = title;
    modal.getElementsByTagName("p")[0].innerText = content;

    modal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
  };

const closeModal = () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
};

cards.forEach((card) => {
  const image = card.getElementsByTagName("img")[0].src;
  const title = card.getElementsByTagName("h3")[0].innerText;
  const content = card.getElementsByTagName("p")[0].innerText;

  card.addEventListener("click", openModal({ image, title, content }));
});

modalCloseIcon.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);

// drawer

const drawer = document.querySelector(".drawer");

const drawerButton = document.querySelector(".drawer-button");

const drawerCloseIcon = document.querySelector(".drawer-close-icon");

const drawerItem = document.querySelectorAll(".drawer-item");

const drawerOverlay = document.querySelector(".drawer-overlay");

const openDrawer = () => {
  drawer.classList.remove("close");
  drawerOverlay.classList.remove("hidden");
};

const closeDrawer = () => {
  drawer.classList.add("close");
  drawerOverlay.classList.add("hidden");
};

drawerButton.addEventListener("click", openDrawer);

drawerItem.forEach((element) => {
  element.addEventListener("click", closeDrawer);
});

drawerCloseIcon.addEventListener("click", closeDrawer);

drawerOverlay.addEventListener("click", closeDrawer);

// scrollToTop

const scrollToTop = document.querySelector(".scroll-to-top");

const goToTopScroll = () => {
  window.scrollTo(0, 0);
};

scrollToTop.addEventListener("click", goToTopScroll);

// darkMode

const body = document.body;

const darkModeBtn = document.querySelector(".dark-mode-button");

const makeDarkMode = () => {
  body.classList.toggle("dark-body");
  cards.forEach((card) => card.classList.toggle("dark-card"));
  modal.classList.toggle("dark-modal");
  drawer.classList.toggle("dark-drawer");
  scrollToTop.classList.toggle("dark-button");
  darkModeBtn.classList.toggle("dark-button");
};

darkModeBtn.addEventListener("click", makeDarkMode);
