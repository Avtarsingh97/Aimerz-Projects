document.querySelector('.nav-toggle').addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});


function disableRightClick(event) {
    if (event.button == 2) {
      event.preventDefault(); // Prevent the default right-click behavior
      return false;
    }
}
