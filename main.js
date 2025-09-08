// Simple file upload functionality
const fileInput = document.getElementById('fileInput');
const loginBtn = document.getElementById('loginBtn');
const backgroundAnimation = document.getElementById('backgroundAnimation');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('Selected file:', file.name);
  }
});

// Login button placeholder (no functionality yet)
loginBtn.addEventListener('click', () => {
  console.log('Login button clicked');
});

// Mouse tracking background animation
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  
  backgroundAnimation.style.setProperty('--mouse-x', `${x}%`);
  backgroundAnimation.style.setProperty('--mouse-y', `${y}%`);
});
