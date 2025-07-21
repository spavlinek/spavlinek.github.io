// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
  const galleries = document.querySelectorAll('.gallery-container');
  
  galleries.forEach(function(gallery) {
    const slides = gallery.querySelectorAll('.gallery-slide');
    const prevBtn = gallery.querySelector('.gallery-nav.prev');
    const nextBtn = gallery.querySelector('.gallery-nav.next');
    const indicators = gallery.querySelectorAll('.gallery-indicator');
    
    let currentSlide = 0;
    
    // Initialize gallery
    function initGallery() {
      if (slides.length === 0) return;
      
      // Show first slide
      slides[currentSlide].classList.add('active');
      if (indicators.length > 0) {
        indicators[currentSlide].classList.add('active');
      }
      
      // Update navigation buttons
      updateNavButtons();
    }
    
    // Update navigation buttons state
    function updateNavButtons() {
      if (prevBtn) {
        prevBtn.disabled = currentSlide === 0;
      }
      if (nextBtn) {
        nextBtn.disabled = currentSlide === slides.length - 1;
      }
    }
    
    // Go to specific slide
    function goToSlide(index) {
      if (index < 0 || index >= slides.length) return;
      
      // Remove active class from current slide and indicator
      slides[currentSlide].classList.remove('active');
      if (indicators.length > 0) {
        indicators[currentSlide].classList.remove('active');
      }
      
      // Update current slide
      currentSlide = index;
      
      // Add active class to new slide and indicator
      slides[currentSlide].classList.add('active');
      if (indicators.length > 0) {
        indicators[currentSlide].classList.add('active');
      }
      
      // Update navigation buttons
      updateNavButtons();
    }
    
    // Next slide
    function nextSlide() {
      if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
      }
    }
    
    // Previous slide
    function prevSlide() {
      if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
    }
    
    // Add event listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
    }
    
    // Add event listeners to indicators
    indicators.forEach(function(indicator, index) {
      indicator.addEventListener('click', function() {
        goToSlide(index);
      });
    });
    
    // Keyboard navigation
    gallery.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    gallery.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    gallery.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next slide
          nextSlide();
        } else {
          // Swipe right - previous slide
          prevSlide();
        }
      }
    }
    
    // Initialize the gallery
    initGallery();
  });
}); 

// Mini Game Sara Movement
(function() {
  const sara = document.getElementById('sara-sprite');
  if (!sara) return;

  const minigameEarthRow = document.querySelector('.minigame-earth-row');
  const saraCharacter = document.querySelector('.sara-character');
  let saraX = 0;
  const step = 24; // px per move
  const maxX = minigameEarthRow.offsetWidth - sara.offsetWidth;

  // Sprite sequences
  const rightSprites = [
    '/assets/images/minigame/sara_right_1.png',
    '/assets/images/minigame/sara_standing_right.png',
    '/assets/images/minigame/sara_right_2.png'
  ];
  const leftSprites = [
    '/assets/images/minigame/sara_left_1.png',
    '/assets/images/minigame/sara_standing_left.png',
    '/assets/images/minigame/sara_left_2.png'
  ];
  let spriteIndex = 1; // start at standing
  let facing = 'left';

  function updateSaraSprite() {
    if (facing === 'right') {
      sara.src = rightSprites[spriteIndex];
    } else {
      sara.src = leftSprites[spriteIndex];
    }
  }

  function moveSara(dir) {
    if (dir === 'right') {
      facing = 'right';
      saraX = Math.min(saraX + step, maxX);
      spriteIndex = (spriteIndex + 1) % rightSprites.length;
    } else {
      facing = 'left';
      saraX = Math.max(saraX - step, 0);
      spriteIndex = (spriteIndex + 1) % leftSprites.length;
    }
    saraCharacter.style.left = saraX + 'px';
    updateSaraSprite();
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
      moveSara('right');
    } else if (e.key === 'ArrowLeft') {
      moveSara('left');
    }
  });
})(); 