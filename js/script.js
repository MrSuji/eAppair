document.querySelector('.fa-bars').addEventListener('click', function() {
  var element1 = document.querySelector('#particles-js');
  element1.classList.toggle('toggleParticle');

  document.querySelector('.aboutCard').classList.toggle('activeCardToggle');
});

document.addEventListener('click', function(event) {
  console.log(event.target);
});
