




/* find the modal */
let modal = document.getElementById("modalDialog");

/* find the button and add an eventlister */

let showModalButton = document.getElementById("showModal");
showModalButton.addEventListener("click", () => {
  modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});



