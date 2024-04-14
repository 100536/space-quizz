let score = localStorage.getItem('score') || 0; 


function updateScore() {
  document.getElementById('scoreValue').innerText = score;
}


document.getElementById('answerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();
  let correctAnswer = 'een planeet is een groot object dat rond een ster draait en zijn omgeving schoon heeft geveegd van ander puin. Een dwergplaneet is vergelijkbaar met een planeet, maar heeft niet genoeg zwaartekracht om zijn baan schoon te vegen en wordt vaak omringd door ander puin.'; 
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