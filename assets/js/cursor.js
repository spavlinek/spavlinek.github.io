// ReactBits Target Cursor - Converted to Vanilla JS
// Original: https://reactbits.dev/animations/target-cursor

(function() {
  console.log('Target Cursor: Script loaded');
  
  // Configuration
  const config = {
    targetSelector: '.cursor-target, .project-preview-item, a, button',
    spinDuration: 2,
    hideDefaultCursor: true,
    hoverDuration: 0.2,
    parallaxOn: true,
    borderWidth: 3,
    cornerSize: 12
  };

  // Check if mobile
  const isMobile = (() => {
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isMobileUserAgent = mobileRegex.test(userAgent.toLowerCase());
    return (hasTouchScreen && isSmallScreen) || isMobileUserAgent;
  })();

  console.log('Target Cursor: isMobile =', isMobile);
  console.log('Target Cursor: Screen width =', window.innerWidth);

  if (isMobile) {
    console.log('Target Cursor: Disabled (mobile device)');
    return;
  }

  // Wait for DOM to be ready before checking for elements
  function checkActivation() {
    const hasGallery = document.querySelector('.project-preview-gallery');
    const hasTarget = document.querySelector('.cursor-target');
    console.log('Target Cursor: Has gallery?', !!hasGallery);
    console.log('Target Cursor: Has cursor-target?', !!hasTarget);
    
    return hasGallery || hasTarget;
  }

  // Wait for GSAP to load
  function initCursor() {
    console.log('Target Cursor: initCursor called');
    console.log('Target Cursor: GSAP available?', typeof gsap !== 'undefined');
    
    if (typeof gsap === 'undefined') {
      console.log('Target Cursor: GSAP not loaded yet, retrying...');
      setTimeout(initCursor, 100);
      return;
    }

    if (!checkActivation()) {
      console.log('Target Cursor: No gallery or cursor-target elements found, not activating');
      return;
    }

    console.log('Target Cursor: Initializing...');

    // Create cursor HTML
    const cursorHTML = `
      <div class="target-cursor-wrapper">
        <div class="target-cursor-dot"></div>
        <div class="target-cursor-corner corner-tl"></div>
        <div class="target-cursor-corner corner-tr"></div>
        <div class="target-cursor-corner corner-br"></div>
        <div class="target-cursor-corner corner-bl"></div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', cursorHTML);
    console.log('Target Cursor: HTML injected');
    
    const cursorWrapper = document.querySelector('.target-cursor-wrapper');
    const cursorDot = document.querySelector('.target-cursor-dot');
    const corners = document.querySelectorAll('.target-cursor-corner');
    
    console.log('Target Cursor: Elements found:', {
      wrapper: !!cursorWrapper,
      dot: !!cursorDot,
      corners: corners.length
    });

    // Hide default cursor
    if (config.hideDefaultCursor) {
      document.body.classList.add('custom-cursor-active');
      console.log('Target Cursor: Default cursor hidden');
    }

    // State
    let activeTarget = null;
    let currentLeaveHandler = null;
    let resumeTimeout = null;
    let isActive = false;
    let targetCornerPositions = null;
    let activeStrength = { current: 0 };
    let spinTl = null;

    // Initialize cursor position
    gsap.set(cursorWrapper, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });

    // Create spin animation
    function createSpinTimeline() {
      if (spinTl) {
        spinTl.kill();
      }
      spinTl = gsap.timeline({ repeat: -1 })
        .to(cursorWrapper, { 
          rotation: '+=360', 
          duration: config.spinDuration, 
          ease: 'none' 
        });
    }

    createSpinTimeline();
    console.log('Target Cursor: Spin animation started');

    // Move cursor
    function moveCursor(x, y) {
      gsap.to(cursorWrapper, {
        x: x,
        y: y,
        duration: 0.1,
        ease: 'power3.out'
      });
    }

    // Ticker function for parallax
    function tickerFn() {
      if (!targetCornerPositions || !cursorWrapper || !corners) {
        return;
      }

      const strength = activeStrength.current;
      if (strength === 0) return;

      const cursorX = gsap.getProperty(cursorWrapper, 'x');
      const cursorY = gsap.getProperty(cursorWrapper, 'y');

      corners.forEach((corner, i) => {
        const currentX = gsap.getProperty(corner, 'x');
        const currentY = gsap.getProperty(corner, 'y');

        const targetX = targetCornerPositions[i].x - cursorX;
        const targetY = targetCornerPositions[i].y - cursorY;

        const finalX = currentX + (targetX - currentX) * strength;
        const finalY = currentY + (targetY - currentY) * strength;

        const duration = strength >= 0.99 ? (config.parallaxOn ? 0.2 : 0) : 0.05;

        gsap.to(corner, {
          x: finalX,
          y: finalY,
          duration: duration,
          ease: duration === 0 ? 'none' : 'power1.out',
          overwrite: 'auto'
        });
      });
    }

    // Mouse move handler
    window.addEventListener('mousemove', (e) => {
      moveCursor(e.clientX, e.clientY);
    });
    console.log('Target Cursor: Event listeners attached');

    // Mouse down/up handlers
    window.addEventListener('mousedown', () => {
      gsap.to(cursorDot, { scale: 0.7, duration: 0.3 });
      gsap.to(cursorWrapper, { scale: 0.9, duration: 0.2 });
    });

    window.addEventListener('mouseup', () => {
      gsap.to(cursorDot, { scale: 1, duration: 0.3 });
      gsap.to(cursorWrapper, { scale: 1, duration: 0.2 });
    });

    // Scroll handler
    window.addEventListener('scroll', () => {
      if (!activeTarget || !cursorWrapper) return;
      const mouseX = gsap.getProperty(cursorWrapper, 'x');
      const mouseY = gsap.getProperty(cursorWrapper, 'y');
      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget = elementUnderMouse && 
        (elementUnderMouse === activeTarget || 
         elementUnderMouse.closest(config.targetSelector) === activeTarget);
      
      if (!isStillOverTarget && currentLeaveHandler) {
        currentLeaveHandler();
      }
    }, { passive: true });

    // Mouse enter handler
    window.addEventListener('mouseover', (e) => {
      const directTarget = e.target;
      const allTargets = [];
      let current = directTarget;
      
      while (current && current !== document.body) {
        if (current.matches(config.targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement;
      }

      const target = allTargets[0] || null;
      if (!target || !cursorWrapper || !corners) return;
      if (activeTarget === target) return;

      if (activeTarget && currentLeaveHandler) {
        target.removeEventListener('mouseleave', currentLeaveHandler);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;
      
      // Kill existing animations
      corners.forEach(corner => gsap.killTweensOf(corner));
      gsap.killTweensOf(cursorWrapper, 'rotation');
      
      if (spinTl) spinTl.pause();
      gsap.set(cursorWrapper, { rotation: 0 });

      const rect = target.getBoundingClientRect();
      const cursorX = gsap.getProperty(cursorWrapper, 'x');
      const cursorY = gsap.getProperty(cursorWrapper, 'y');

      targetCornerPositions = [
        { x: rect.left - config.borderWidth, y: rect.top - config.borderWidth },
        { x: rect.right + config.borderWidth - config.cornerSize, y: rect.top - config.borderWidth },
        { x: rect.right + config.borderWidth - config.cornerSize, y: rect.bottom + config.borderWidth - config.cornerSize },
        { x: rect.left - config.borderWidth, y: rect.bottom + config.borderWidth - config.cornerSize }
      ];

      isActive = true;
      gsap.ticker.add(tickerFn);

      gsap.to(activeStrength, {
        current: 1,
        duration: config.hoverDuration,
        ease: 'power2.out'
      });

      corners.forEach((corner, i) => {
        gsap.to(corner, {
          x: targetCornerPositions[i].x - cursorX,
          y: targetCornerPositions[i].y - cursorY,
          duration: 0.2,
          ease: 'power2.out'
        });
      });

      // Leave handler
      const leaveHandler = () => {
        gsap.ticker.remove(tickerFn);
        isActive = false;
        targetCornerPositions = null;
        gsap.set(activeStrength, { current: 0, overwrite: true });
        activeTarget = null;

        if (corners) {
          gsap.killTweensOf(Array.from(corners));
          const positions = [
            { x: -config.cornerSize * 1.5, y: -config.cornerSize * 1.5 },
            { x: config.cornerSize * 0.5, y: -config.cornerSize * 1.5 },
            { x: config.cornerSize * 0.5, y: config.cornerSize * 0.5 },
            { x: -config.cornerSize * 1.5, y: config.cornerSize * 0.5 }
          ];

          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(corner, {
              x: positions[index].x,
              y: positions[index].y,
              duration: 0.3,
              ease: 'power3.out'
            }, 0);
          });
        }

        resumeTimeout = setTimeout(() => {
          if (!activeTarget && cursorWrapper && spinTl) {
            const currentRotation = gsap.getProperty(cursorWrapper, 'rotation');
            const normalizedRotation = currentRotation % 360;
            spinTl.kill();
            spinTl = gsap.timeline({ repeat: -1 })
              .to(cursorWrapper, { 
                rotation: '+=360', 
                duration: config.spinDuration, 
                ease: 'none' 
              });
            
            gsap.to(cursorWrapper, {
              rotation: normalizedRotation + 360,
              duration: config.spinDuration * (1 - normalizedRotation / 360),
              ease: 'none',
              onComplete: () => {
                if (spinTl) spinTl.restart();
              }
            });
          }
          resumeTimeout = null;
        }, 50);

        if (currentLeaveHandler) {
          target.removeEventListener('mouseleave', currentLeaveHandler);
        }
        currentLeaveHandler = null;
      };

      currentLeaveHandler = leaveHandler;
      target.addEventListener('mouseleave', leaveHandler);
    }, { passive: true });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    console.log('Target Cursor: Waiting for DOM...');
    document.addEventListener('DOMContentLoaded', initCursor);
  } else {
    console.log('Target Cursor: DOM already loaded');
    initCursor();
  }
})();

console.log('Target Cursor: Script executed');
