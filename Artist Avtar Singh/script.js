

document.querySelector('.nav-toggle').addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});


function disableRightClick(event) {
    if (event.button === 2) {
      event.preventDefault(); // Prevent the default right-click behavior
      return false;
    }
}

(function(){
  emailjs.init('gz5S6KhNqlW8vHpvu');
})();

document.querySelector('.submit-btn').addEventListener('click',(event)=>{
  event.preventDefault(); 

  const userName = document.querySelector('#name').value;
  const userEmail = document.querySelector('#email').value;
  const canvaSize = document.querySelector('input[name="size"]:checked')?.value || 'Not selected';
  const medium = document.querySelector('input[name="medium"]:checked')?.value || 'Not selected';
  const message = document.querySelector('#message').value;
  
  const formData = {
      name: userName,
      email: userEmail,
      size: canvaSize,
      medium: medium,
      message: message,
  };
  

  emailjs.send('service_mk95j72', 'template_9gg7izp', formData).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    },
    (error) => {
      console.log('FAILED...', error);
      alert('Failed to send the message. Please try again.');
    },
  );

})