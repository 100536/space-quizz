let score = localStorage.getItem('score') || 0; 

function updateScore() {
  document.getElementById('scoreValue').innerText = score;
}

function checkAnswer(answer) {
  if (answer === 'c') {
    showGoodPopup();
    score++;
  } else {
    showBadPopup();
    score--;
  }
  localStorage.setItem('score', score);
  updateScore();
}

function showGoodPopup() {
  document.getElementById('popup-container-good').style.display = 'block';
}

function showBadPopup() {
  document.getElementById('popup-container-bad').style.display = 'block';
}

function closeGoodPopup() {
  document.getElementById('popup-container-good').style.display = 'none';
}

function closeBadPopup() {
  document.getElementById('popup-container-bad').style.display = 'none';
}

function nextQuestion() {
  window.location.href = '../nasavraag7/nasavraag7.html';
}

updateScore();