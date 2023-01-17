(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    openOrderedBtn: document.querySelector('[data-ordered-open]'),
    closeOrderedBtn: document.querySelector('[data-ordered-close]'),
    ordered: document.querySelector('[ordered-modal]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openOrderedBtn.addEventListener('click', toggleOrdered);
  refs.closeOrderedBtn.addEventListener('click', toggleModal);
  refs.closeOrderedBtn.addEventListener('click', toggleOrdered);

  function toggleOrdered() {
    refs.ordered.classList.toggle('is-closed');
  }
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
