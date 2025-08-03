// Navigation bar shrinking effect
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      // Scrolled down - make header skinnier
      header.classList.add('scrolled');
    } else {
      // At top - normal size
      header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
  });

  // Scroll indicator functionality
  const scrollIndicator = document.getElementById('scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      console.log('Scroll indicator clicked');
      
      // Find the "What I Do" section title
      let whatIDoTitle = document.querySelector('.main-content .section-title h2');
      
      if (whatIDoTitle) {
        console.log('Target element found:', whatIDoTitle);
        // Scroll so the title appears near the top with some padding
        const titleRect = whatIDoTitle.getBoundingClientRect();
        const offsetTop = titleRect.top + window.pageYOffset - 100; // 100px padding from top
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      } else {
        console.log('Could not find What I Do title, trying main-content');
        // Fallback: scroll to main content with offset
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          const contentRect = mainContent.getBoundingClientRect();
          const offsetTop = contentRect.top + window.pageYOffset - 50; // 50px padding from top
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });

    // Hide scroll indicator when user has scrolled past the landing page
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const landingHeight = document.querySelector('.landing-page').offsetHeight;
      
      if (scrollTop > landingHeight * 0.5) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
      } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
      }
    });
  }
}); 

// Project Images Carousel Functionality - Simple Direct Approach
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing carousels...');
    
    // Wait a bit to ensure everything is loaded
    setTimeout(function() {
        initCarousels();
    }, 100);
});

function initCarousels() {
    const carousels = document.querySelectorAll('.project-images');
    console.log('Found carousels:', carousels.length);
    
    carousels.forEach((carousel, index) => {
        const container = carousel.querySelector('.project-images-container');
        const prevBtn = carousel.querySelector('.carousel-nav.prev');
        const nextBtn = carousel.querySelector('.carousel-nav.next');
        
        console.log(`Carousel ${index}:`, { container, prevBtn, nextBtn });
        
        if (!container || !prevBtn || !nextBtn) {
            console.log(`Missing elements for carousel ${index}`);
            return;
        }
        
        // Remove any existing listeners
        const newPrevBtn = prevBtn.cloneNode(true);
        const newNextBtn = nextBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        
        const scrollAmount = 420;
        
        // Add click listeners with direct scroll
        newPrevBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Previous clicked - scrolling left');
            const currentScroll = container.scrollLeft;
            container.scrollTo({
                left: Math.max(0, currentScroll - scrollAmount),
                behavior: 'smooth'
            });
            return false;
        };
        
        newNextBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Next clicked - scrolling right');
            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            container.scrollTo({
                left: Math.min(maxScroll, currentScroll + scrollAmount),
                behavior: 'smooth'
            });
            return false;
        };
        
        // Update button states
        function updateButtonStates() {
            const isAtStart = container.scrollLeft <= 1;
            const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 1;
            
            newPrevBtn.style.opacity = isAtStart ? '0.5' : '1';
            newPrevBtn.disabled = isAtStart;
            
            newNextBtn.style.opacity = isAtEnd ? '0.5' : '1';
            newNextBtn.disabled = isAtEnd;
        }
        
        container.addEventListener('scroll', updateButtonStates);
        updateButtonStates();
        
        console.log(`Carousel ${index} initialized successfully`);
    });
}

// Also try again after everything loads
window.addEventListener('load', function() {
    console.log('Window loaded, re-initializing carousels...');
    setTimeout(initCarousels, 200);
}); 