let score = localStorage.getItem('score') || 0; 

function updateScore() {
  document.getElementById('scoreValue').innerText = score;
}

document.getElementById('answerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();
  let correctAnswer = 'venus'; 
  if (userAnswer === correctAnswer) {
    showGoodPopup();
    score++; 
  } else {
    showBadPopup();
    score--; 
  }
  localStorage.setItem('score', score); 
  updateScore(); 
});

updateScore(); 
  
function showGoodPopup() {
  document.getElementById('popup-container-good').style.display = 'block';
}

function closeGoodPopup() {
  document.getElementById('popup-container-good').style.display = 'none';
}

function showBadPopup() {
  document.getElementById('popup-container-bad').style.display = 'block';
}

function closeBadPopup() {
  document.getElementById('popup-container-bad').style.display = 'none';
}
