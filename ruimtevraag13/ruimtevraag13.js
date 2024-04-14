let score = localStorage.getItem('score') || 0; 


function updateScore() {
  document.getElementById('scoreValue').innerText = score;
}


document.getElementById('answerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();
  let correctAnswer = 'een maansverduistering vindt plaats wanneer de aarde precies tussen de zon en de maan in komt te staan, waardoor de schaduw van de aarde op de maan valt. Dit gebeurt alleen tijdens een volle maan..'; 
  if (userAnswer === correctAnswer) {
    showGoodPopup();
    score++;
  } else {
    showBadPopup();
    score--; 
  }
  localStorage.setItem('score', score); 
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