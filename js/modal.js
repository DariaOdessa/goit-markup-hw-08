(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

document.querySelector('#input-name').addEventListener('focusin', e => {
  e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
});
document.querySelector('#input-name').addEventListener('focusout', e => {
  e.currentTarget.placeholder = ' ';
});

document.querySelector('#input-tel').addEventListener('focusin', e => {
  e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
});
document.querySelector('#input-tel').addEventListener('focusout', e => {
  e.currentTarget.placeholder = ' ';
});

document.querySelector('#input-email').addEventListener('focusin', e => {
  e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
});
document.querySelector('#input-email').addEventListener('focusout', e => {
  e.currentTarget.placeholder = ' ';
});

document.querySelector('#input-comment').addEventListener('focusin', e => {
  e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
});
document.querySelector('#input-comment').addEventListener('focusout', e => {
  e.currentTarget.placeholder = ' ';
});
