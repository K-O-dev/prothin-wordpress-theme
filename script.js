const inputField = document.querySelector('.search-section input');
const clearIcon = document.querySelector('.clear-icon');

// Show/hide clear icon based on input value
inputField.addEventListener('input', function() {
  if (inputField.value) {
    clearIcon.style.display = 'block'; // Show the clear icon
  } else {
    clearIcon.style.display = 'none'; // Hide the clear icon
  }
});

// Clear input field when X icon is clicked
clearIcon.addEventListener('click', function() {
  inputField.value = ''; // Clear the input field
  clearIcon.style.display = 'none'; // Hide the clear icon
});
