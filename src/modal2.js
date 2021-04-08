(() => {
  const refs = {
    openModalBtn: document.querySelector('[bata-modal-open]'),
    closeModalBtn: document.querySelector('[bata-modal-close]'),
    modal: document.querySelector('[bata-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();