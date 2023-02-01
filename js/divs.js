document.querySelectorAll('.color').forEach(function(element) {
    element.addEventListener('mouseover', function() {
      element.style.backgroundColor = 'rgba(60, 49, 160, 0.384)';
    });
    element.addEventListener('mouseout', function() {
      element.style.backgroundColor = '#a8878700';
    });
  });