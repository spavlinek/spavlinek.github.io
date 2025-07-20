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
}); 