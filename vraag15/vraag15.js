
window.addEventListener('beforeunload', function() {
  if (parseInt(localStorage.getItem('score')) !== 0) {
    resetScore();
  }
});


function resetScore() {
  var scoreElement = document.getElementById('scoreValue');
  scoreElement.innerText = '0';
  document.getElementById('finalScore').innerText = '0';
  localStorage.setItem('score', '0'); 
}

function updateScore(points) {
  var scoreElement = document.getElementById('scoreValue');
  var currentScore = parseInt(scoreElement.innerText);
  var newScore = currentScore + points;
  if (points === 1 || points === -1) { 
    scoreElement.innerText = newScore;
    document.getElementById('finalScore').innerText = newScore;
    localStorage.setItem('score', newScore.toString()); 
  }
}

function checkAnswer() {
  var userAnswer = document.getElementById('userAnswer').value.toLowerCase();
  if (userAnswer === 'jupiter') {
    document.getElementById('goodPopup').style.display = 'block';
    updateScore(1);
  } else {
    document.getElementById('badPopup').style.display = 'block';
    updateScore(-1);
  }
}


function showScoreboardPopup() {
  setTimeout(function() {
    document.getElementById('scorePopup').style.display = 'block';
    setTimeout(function() {
      window.location.href = '../Hoofdpagina/Hoofdpagina.html'; 
    }, 5000);
  }, 1000);
}

document.getElementById('answerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  checkAnswer();
});

document.getElementById('scorePopup').addEventListener('click', function(event) {
  if (event.target.classList.contains('popup-container')) {
    document.getElementById('scorePopup').style.display = 'none';
  }
});

function closeGoodPopup() {
  document.getElementById('goodPopup').style.display = 'none';
  setTimeout(showScoreboardPopup, 1000); 
}


function closeBadPopup() {
  document.getElementById('badPopup').style.display = 'none';
  setTimeout(showScoreboardPopup, 1000); 
}


window.addEventListener('load', function() {
  var storedScore = localStorage.getItem('score');
  if (storedScore !== null && storedScore !== '0') {
    var scoreElement = document.getElementById('scoreValue');
    scoreElement.innerText = storedScore;
    document.getElementById('finalScore').innerText = storedScore;
  }
});
