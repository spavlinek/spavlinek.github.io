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
  const upperEarthTileWidth = 60;
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

  function updateSaraPosition() {
    if (saraRow === 'lower') {
      saraCharacter.style.bottom = '80px';
      // Sara's left is pixel-based for lower row
      saraCharacter.style.left = (saraX + earthTileWidth / 2) + 'px';
      saraCharacter.style.transform = 'translateX(-50%)';
    } else {
      // Place Sara in upper row, farther right
      saraCharacter.style.bottom = '200px';
      // Sara's left is pixel-based, offset by upper row's left offset
      saraCharacter.style.left = (upperRowPixelOffset + saraX + upperEarthTileWidth / 2) + 'px';
      saraCharacter.style.transform = 'translateX(-50%)';
    }
  }

  function moveSara(dir) {
    if (saraRow === 'lower') {
      if (dir === 'right') {
        facing = 'right';
        saraX = Math.min(saraX + earthTileWidth, maxX);
        spriteIndex = (spriteIndex + 1) % rightSprites.length;
      } else {
        facing = 'left';
        saraX = Math.max(saraX - earthTileWidth, 0);
        spriteIndex = (spriteIndex + 1) % leftSprites.length;
      }
      // Only rightmost tile of lower row is a portal
      if (saraX === maxX && dir === 'right') {
        // Enter portal-right, appear at leftmost tile of upper row
        saraRow = 'upper';
        saraX = 0;
      }
    } else if (saraRow === 'upper') {
      if (dir === 'right') {
        facing = 'right';
        saraX = Math.min(saraX + upperEarthTileWidth, upperMaxX);
        spriteIndex = (spriteIndex + 1) % rightSprites.length;
      } else {
        facing = 'left';
        saraX = Math.max(saraX - upperEarthTileWidth, 0);
        spriteIndex = (spriteIndex + 1) % leftSprites.length;
      }
      // Only leftmost tile of upper row is a portal
      if (saraX === 0 && dir === 'left') {
        // Enter portal-left, appear at rightmost tile of lower row
        saraRow = 'lower';
        saraX = maxX;
      }
    }
    updateSaraPosition();
    updateSaraSprite();
  }

  updateSaraPosition();

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault(); // Prevent browser from scrolling
      if (e.key === 'ArrowRight') {
        moveSara('right');
      } else if (e.key === 'ArrowLeft') {
        moveSara('left');
      }
    }
  });
})(); 