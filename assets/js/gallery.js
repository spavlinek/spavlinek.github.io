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