let score = localStorage.getItem('score') || 0; 


function updateScore() {
  document.getElementById('scoreValue').innerText = score;
}


document.getElementById('answerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();
  let correctAnswer = ' Een meteoriet is een stuk steen of metaal uit de ruimte dat de aardse atmosfeer binnenkomt en op het aardoppervlak landt. Een meteoroïde is een klein stukje puin in de ruimte, terwijl een meteor een helder lichtspoor is dat wordt veroorzaakt wanneer een meteoroïde de atmosfeer van de aarde binnendringt en verbrandt.'; 
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
  