// Custom Target Cursor Animation
// Inspired by https://reactbits.dev/animations/target-cursor

document.addEventListener('DOMContentLoaded', function() {
  // Only enable on projects page or pages with .project-preview-gallery
  const hasProjectGallery = document.querySelector('.project-preview-gallery');
  
  if (!hasProjectGallery) {
    return; // Don't activate cursor on other pages
  }

  // Create cursor elements
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';
  document.body.appendChild(cursorDot);

  // Add class to body to hide default cursor
  document.body.classList.add('custom-cursor-active');

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let dotX = 0;
  let dotY = 0;

  // Track mouse movement
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Show cursor when mouse moves
    cursor.classList.add('visible');
    cursorDot.classList.add('visible');
    
    // Update dot position immediately (faster)
    dotX = mouseX;
    dotY = mouseY;
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', function() {
    cursor.classList.remove('visible');
    cursorDot.classList.remove('visible');
  });

  // Animate cursor with smooth trailing effect
  function animateCursor() {
    // Smooth following with easing
    const speed = 0.15; // Lower = slower, more trailing
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Add hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-preview-item, .page-link');
  
  interactiveElements.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
      cursor.classList.add('hover');
      cursorDot.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', function() {
      cursor.classList.remove('hover');
      cursorDot.classList.remove('hover');
    });
  });

  // Remove custom cursor on mobile/touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.remove('custom-cursor-active');
    cursor.remove();
    cursorDot.remove();
  }

  // Also remove on tablets and smaller screens
  function checkScreenSize() {
    if (window.innerWidth < 768) {
      document.body.classList.remove('custom-cursor-active');
      cursor.style.display = 'none';
      cursorDot.style.display = 'none';
    } else {
      document.body.classList.add('custom-cursor-active');
      cursor.style.display = 'block';
      cursorDot.style.display = 'block';
    }
  }
  
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

