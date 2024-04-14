let score = localStorage.getItem('score') || 0; 


function updateScore() {
  document.getElementById('scoreValue').innerText = score;
}


document.getElementById('answerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();
  let correctAnswer = 'Een zwart gat is een gebied in de ruimte waar de zwaartekracht zo sterk is dat niets, zelfs geen licht, kan ontsnappen. Het ontstaat wanneer een massieve ster aan het einde van zijn levenscyclus instort onder zijn eigen zwaartekracht.'; 
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
  