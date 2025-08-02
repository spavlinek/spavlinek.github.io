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