// Mini Game Sara Movement
(function() {
  const sara = document.getElementById('sara-sprite');
  if (!sara) return;

  const saraCharacter = document.querySelector('.sara-character');

  // Lower row (main)
  const numEarthTiles = 10;
  const earthTileWidth = 80; // px, approx
  const maxX = (numEarthTiles - 1) * earthTileWidth;
  const portalRightOffset = 0; // rightmost tile, no extra offset needed
  // Upper row
  const upperNumEarthTiles = 3;
  const upperEarthTileWidth = 80;
  const upperMaxX = (upperNumEarthTiles - 1) * upperEarthTileWidth;
  const upperRowLeftOffset = 0.85; // 85% of the container width
  const containerWidth = document.querySelector('.minigame-row').offsetWidth;
  const upperRowPixelOffset = containerWidth * upperRowLeftOffset;

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

  // Track which row Sara is on: 'lower' or 'upper'
  let saraRow = 'lower';
  // Start in the middle of the lower row
  let saraX = Math.round((numEarthTiles / 2 - 0.5) * earthTileWidth);

  // Center Sara on the portal image (assume portal is centered on tile)
  function getPortalCenterOffset(tileWidth, portalWidth = 130) {
    return (tileWidth - portalWidth) / 2 + portalWidth / 2;
  }

  function updateSaraSprite() {
    if (facing === 'right') {
      sara.src = rightSprites[spriteIndex];
    } else {
      sara.src = leftSprites[spriteIndex];
    }
  }

  // Track if Sara is carrying water
  let carryingWater = false;
  
  // Create water carrying indicator
  const waterIndicator = document.createElement('img');
  waterIndicator.src = '/assets/images/minigame/water.png';
  waterIndicator.style.position = 'absolute';
  waterIndicator.style.width = '40px';
  waterIndicator.style.height = '40px';
  waterIndicator.style.display = 'none';
  waterIndicator.style.zIndex = '5';
  waterIndicator.style.pointerEvents = 'none';
  saraCharacter.appendChild(waterIndicator);

  // Create text indicator for typewriter messages
  const textIndicator = document.createElement('div');
  textIndicator.style.position = 'absolute';
  textIndicator.style.left = '50%';
  textIndicator.style.top = '-70px'; // Above water indicator
  textIndicator.style.transform = 'translateX(-50%)';
  textIndicator.style.fontFamily = "'Press Start 2P', monospace";
  textIndicator.style.fontSize = '8px';
  textIndicator.style.color = 'black';
  textIndicator.style.whiteSpace = 'nowrap';
  textIndicator.style.display = 'none';
  textIndicator.style.zIndex = '6';
  textIndicator.style.pointerEvents = 'none';
  saraCharacter.appendChild(textIndicator);

  // Track tutorial state
  let hasMovedYet = false;
  let tutorialShown = false;
  let isTextDisplaying = false;

  // Typewriter effect function
  function typeText(text, callback, displayDuration = 2000) {
    if (isTextDisplaying) return; // Don't start new text if already displaying
    
    isTextDisplaying = true;
    textIndicator.style.display = 'block';
    textIndicator.textContent = '';
    let i = 0;
    
    function typeChar() {
      if (i < text.length) {
        textIndicator.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, 100); // 100ms between characters
      } else {
        setTimeout(() => {
          textIndicator.style.display = 'none';
          isTextDisplaying = false;
          if (callback) callback();
        }, displayDuration); // Use custom duration
      }
    }
    
    typeChar();
  }

  // Show initial tutorial message
  function showInitialTutorial() {
    if (!tutorialShown) {
      tutorialShown = true;
      setTimeout(() => {
        typeText("Help me water my plants!");
      }, 1000); // Wait 1 second after page load
    }
  }

  // Show movement tutorial
  function showMovementTutorial() {
    if (!hasMovedYet) {
      hasMovedYet = true;
      
      // Wait for initial text to finish if it's still displaying
      function tryShowMovementText() {
        if (!isTextDisplaying) {
          const text = "Press 'a' to pick up/use water";
          const typingDuration = text.length * 100; // 100ms per character
          typeText(text, null, typingDuration); // Show just long enough to type
        } else {
          setTimeout(tryShowMovementText, 100); // Check again in 100ms
        }
      }
      
      tryShowMovementText();
    }
  }

  // Update water indicator position
  function updateWaterIndicator() {
    if (carryingWater) {
      waterIndicator.style.display = 'block';
      waterIndicator.style.left = '50%';
      waterIndicator.style.top = '-40px'; // Above Sara's head
      waterIndicator.style.transform = 'translateX(-50%)';
    } else {
      waterIndicator.style.display = 'none';
    }
  }

  function updateSaraPosition() {
    console.trace('[updateSaraPosition] Called from:');
    const earthRow = document.querySelector('.minigame-earth-row');
    const earthRowRect = earthRow.getBoundingClientRect();
    const parentRect = earthRow.parentElement.getBoundingClientRect();
    const offsetLeft = earthRowRect.left - parentRect.left;

    if (saraRow === 'lower') {
      saraCharacter.style.bottom = '80px';
      const leftPx = offsetLeft + saraX + earthTileWidth / 2;
      saraCharacter.style.left = leftPx + 'px';
      saraCharacter.style.transform = 'translateX(-50%)';
      console.log(`[updateSaraPosition] LOGICAL: row=${saraRow}, saraX=${saraX}`);
      const saraRect = saraCharacter.getBoundingClientRect();
      console.log(`[updateSaraPosition] VISUAL: left=${saraRect.left}, top=${saraRect.top}`);
      console.log(`[updateSaraPosition] row=lower, saraX=${saraX}, left=${leftPx}`);
    } else {
      saraCharacter.style.bottom = '200px';
      const leftPx = offsetLeft + upperRowPixelOffset + saraX + upperEarthTileWidth / 2;
      saraCharacter.style.left = leftPx + 'px';
      saraCharacter.style.transform = 'translateX(-50%)';
      console.log(`[updateSaraPosition] LOGICAL: row=${saraRow}, saraX=${saraX}`);
      const saraRect = saraCharacter.getBoundingClientRect();
      console.log(`[updateSaraPosition] VISUAL: left=${saraRect.left}, top=${saraRect.top}`);
      console.log(`[updateSaraPosition] row=upper, saraX=${saraX}, left=${leftPx}`);
    }
    updateWaterIndicator();
    setTimeout(() => {
      const currentLeft = saraCharacter.style.left;
      console.log(`[TIMEOUT CHECK] Sara's left is now: ${currentLeft}`);
    }, 100);
  }

  // Movement step size (smaller than full tile)
  const movementStep = 20; // px per keypress (instead of full 80px tile)

  // Movement boundaries - Sara should touch the pot when stopped
  const potWidth = 50; // Approximate pot width in pixels
  const lowerRowMinX = 1 * earthTileWidth - (potWidth / 2); // Touch the lower pot
  const upperRowMaxX = 1 * upperEarthTileWidth + (potWidth / 2); // Touch the upper pot
  
  // Portal positions
  const lowerPortalStartX = (numEarthTiles - 1) * earthTileWidth - (earthTileWidth / 2); // Midway through portal tile
  const lowerPortalMiddleX = (numEarthTiles - 1) * earthTileWidth + (earthTileWidth / 2); // Middle of lower portal tile
  
  console.log(`Portal debug: numEarthTiles=${numEarthTiles}, earthTileWidth=${earthTileWidth}`);
  console.log(`Portal debug: maxX=${maxX}, lowerPortalStartX=${lowerPortalStartX}, lowerPortalMiddleX=${lowerPortalMiddleX}`);

  // Function to get the current scale factor applied by CSS
  function getCurrentScale() {
    const earthRow = document.querySelector('.minigame-earth-row');
    const transform = window.getComputedStyle(earthRow.parentElement).transform;
    if (transform && transform !== 'none') {
      const matrix = transform.match(/matrix\(([^)]+)\)/);
      if (matrix) {
        const values = matrix[1].split(', ');
        return parseFloat(values[0]); // scaleX value
      }
    }
    return 1; // no scaling
  }

  // Get scaled values
  function getScaledValue(value) {
    return value * getCurrentScale();
  }

  function moveSara(dir) {
    // Show tutorial message on first movement
    showMovementTutorial();
    
    const scale = getCurrentScale();
    const scaledPortalStartX = lowerPortalStartX * scale;
    const scaledLowerRowMinX = lowerRowMinX * scale;
    const scaledUpperRowMaxX = upperRowMaxX * scale;

    if (saraRow === 'lower') {
      if (dir === 'right') {
        if (saraX < maxX) {
          facing = 'right';
          saraX = Math.min(saraX + movementStep, maxX);
          spriteIndex = (spriteIndex + 1) % rightSprites.length;
          // Check if Sara is in portal area and can teleport (adjusted for scale)
          if (saraX >= scaledPortalStartX) {
            console.log('Sara entering portal from lower row (midway through portal tile) to upper row (leftmost tile)');
            saraRow = 'upper';
            saraX = 0;
          }
        }
      } else if (dir === 'left') {
        // Prevent moving left past the end of tile 1 (adjusted for scale)
        const nextX = Math.max(saraX - movementStep, 0);
        if (nextX >= scaledLowerRowMinX) {
          if (saraX > scaledLowerRowMinX) {
            facing = 'left';
            saraX = nextX;
            spriteIndex = (spriteIndex + 1) % leftSprites.length;
          }
        }
      }
    } else if (saraRow === 'upper') {
      if (dir === 'right') {
        // Prevent moving right past the end of tile 1 (adjusted for scale)
        const nextX = Math.min(saraX + movementStep, upperMaxX);
        if (nextX <= scaledUpperRowMaxX) {
          if (saraX < scaledUpperRowMaxX) {
            facing = 'right';
            saraX = nextX;
            spriteIndex = (spriteIndex + 1) % rightSprites.length;
          }
        }
      } else if (dir === 'left') {
        if (saraX > 0) {
          facing = 'left';
          saraX = Math.max(saraX - movementStep, 0);
          spriteIndex = (spriteIndex + 1) % leftSprites.length;
        } else if (saraX === 0) {
          // Only leftmost tile of upper row is a portal
          console.log('Sara entering portal from upper row (leftmost tile) to lower row (middle of portal tile)');
          saraRow = 'lower';
          saraX = scaledPortalStartX;
        }
      }
    }
    updateSaraPosition();
    updateSaraSprite();
    console.log(`Sara position: row=${saraRow}, x=${saraX}, scale=${scale}`);
  }

  // --- Minigame object positions (indices) ---
  const lowerPotTile = 0; // leftmost tile, index 0
  const upperPotTile = 2; // rightmost tile of upper row, index 2
  const waterTiles = [2, 4]; // lower row, tiles 3 and 5 (indices 2, 4)

  // DOM elements for water and pots/plants
  const waterElems = document.querySelectorAll('.earth-water-stack .water');
  const lowerPotElem = document.getElementById('minigame-pot-lower');
  const upperPotElem = document.getElementById('minigame-pot-upper');
  const lowerPlantElem = document.querySelector('.plant-lower');
  const upperPlantElem = document.querySelector('.plant-upper');

  // Function to check if both plants are watered and show scroll indicator
  function checkBothPlantsWatered() {
    const lowerWatered = lowerPlantElem && lowerPlantElem.style.display === 'block';
    const upperWatered = upperPlantElem && upperPlantElem.style.display === 'block';
    
    if (lowerWatered && upperWatered) {
      const scrollIndicator = document.getElementById('scroll-indicator');
      if (scrollIndicator) {
        scrollIndicator.classList.add('show');
        // Optional: Show a completion message
        setTimeout(() => {
          typeText("Great job! Now explore more below!");
        }, 1000);
      }
    }
  }

  // Helper: get Sara's current tile index (row-aware)
  function getSaraTileIndex() {
    if (saraRow === 'lower') {
      return Math.round(saraX / earthTileWidth);
    } else {
      return Math.round(saraX / upperEarthTileWidth);
    }
  }

  // Helper: check if Sara is on a water tile (returns index in waterTiles or -1)
  function getWaterTileIndex() {
    if (saraRow !== 'lower') return -1;
    const idx = getSaraTileIndex();
    return waterTiles.indexOf(idx);
  }

  // Helper: check if Sara is on a pot tile (returns 'lower', 'upper', or null)
  function getPotTile() {
    const idx = getSaraTileIndex();
    // Only allow watering when Sara is in the tile right next to the pot
    if (saraRow === 'lower' && idx === 1) return 'lower'; // Tile right next to lower pot (tile 0)
    if (saraRow === 'upper' && idx === 1) return 'upper'; // Tile right next to upper pot (tile 2)
    return null;
  }

  // Handle interaction (A key)
  function handleInteraction() {
    // Pick up water
    if (!carryingWater) {
      const waterIdx = getWaterTileIndex();
      if (waterIdx !== -1 && waterElems[waterIdx] && !waterElems[waterIdx].classList.contains('picked-up')) {
        carryingWater = true;
        waterElems[waterIdx].style.display = 'none';
        waterElems[waterIdx].classList.add('picked-up');
        updateWaterIndicator();
        return;
      }
    }
    // Water a pot
    if (carryingWater) {
      const pot = getPotTile();
      if (pot === 'lower' && lowerPlantElem && lowerPlantElem.style.display !== 'block') {
        carryingWater = false;
        updateWaterIndicator();
        lowerPlantElem.style.display = 'block';
        lowerPlantElem.style.transform = 'translateX(-50%) scaleY(0)';
        setTimeout(() => {
          lowerPlantElem.style.transform = 'translateX(-50%) scaleY(1)';
        }, 10);
        checkBothPlantsWatered();
        return;
      }
      if (pot === 'upper' && upperPlantElem && upperPlantElem.style.display !== 'block') {
        carryingWater = false;
        updateWaterIndicator();
        upperPlantElem.style.display = 'block';
        upperPlantElem.style.transform = 'translateX(-50%) scaleY(0)';
        setTimeout(() => {
          upperPlantElem.style.transform = 'translateX(-50%) scaleY(1)';
        }, 10);
        checkBothPlantsWatered();
        return;
      }
    }
  }

  updateSaraPosition();
  console.log(`Portal on lower row: rightmost tile (x=${maxX})`);
  console.log(`Portal on upper row: leftmost tile (x=0)`);

  // Show initial tutorial message
  showInitialTutorial();

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault(); // Prevent browser from scrolling
      if (e.key === 'ArrowRight') {
        moveSara('right');
      } else if (e.key === 'ArrowLeft') {
        moveSara('left');
      }
    } else if (e.key === 'a' || e.key === 'A') {
      handleInteraction();
    }
  });
})(); 