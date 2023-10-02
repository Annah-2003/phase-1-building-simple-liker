// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Get DOM elements
const heart = document.getElementById('heart');
const errorModal = document.getElementById('error-modal');

// Event listener for clicking the heart icon
heart.addEventListener('click', () => {
    mimicServerCall()
        .then(() => {
            // Simulated server success response
            heart.classList.remove('empty-heart');
            heart.classList.add('full-heart', 'activated-heart');
        })
        .catch(() => {
            // server error response
            errorModal.classList.remove('hidden');
            setTimeout(() => {
                errorModal.classList.add('hidden');
            }, 3000); // Hides the error modal after 3 seconds
        });
});

// Event listener for clicking the full heart
heart.addEventListener('click', () => {
    if (heart.classList.contains('full-heart')) {
        // User clicked on a full heart, so change it back to empty
        heart.classList.remove('full-heart', 'activated-heart');
        heart.classList.add('empty-heart');
    }
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
