document.addEventListener("DOMContentLoaded", function() {
  const inputField = document.querySelector('.search-section input');
  const clearIcon = document.querySelector('.clear-icon');

  // Check if inputField and clearIcon exist
  if (inputField && clearIcon) {
      // Function to toggle the visibility of the clear icon
      function toggleClearIcon() {
          clearIcon.style.display = inputField.value ? 'block' : 'none';
      }

      // Show/hide clear icon based on input value
      inputField.addEventListener('input', toggleClearIcon);

      // Clear input field when X icon is clicked
      clearIcon.addEventListener('click', function() {
          inputField.value = '';
          toggleClearIcon(); 
      });
  }

  // Handle nav menu toggling
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  const body = document.body; 

  if (hamburger) {
      document.addEventListener('click', function(event) {
          // Check if the click was on the hamburger icon
          if (event.target === hamburger) {
              navMenu.classList.toggle('show');
              if (navMenu.classList.contains('show')) {
                  body.style.overflow = 'hidden';
              } else {
                  body.style.overflow = ''; 
              }
          } 

          // Check if the clicked element is outside the nav menu and hamburger
          else if (navMenu && !navMenu.contains(event.target) && !hamburger.contains(event.target)) {
              navMenu.classList.remove('show');
              body.style.overflow = ''; 
          }
      });
  }
});
