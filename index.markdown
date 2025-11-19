---
layout: default
---

<div class="landing-page">
  
  <div class="landing-content">
    <h1>Hi, I'm Sara <img src="/assets/images/sara_front.png" alt="Sara avatar" style="height:6rem;vertical-align:bottom;margin-left:0.1em;"></h1>
    
    <p class="landing-intro">
      I'm a product engineer building at the intersection of HCI and software who designs games for fun.
    </p>

    <!-- Game Instructions -->
    <div class="game-instructions" id="game-instructions">
      <p class="press-to-play">Press the Arrow Keys to Play < > </p>
    </div>

    <!-- Scroll Down Indicator -->
    <div class="scroll-indicator" id="scroll-indicator">
      <div class="scroll-arrow">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<!-- Mini Game Row Upper -->
<div class="minigame-row-upper">
  <div class="earth-portal-stack">
    <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
    <img src="/assets/images/minigame/portal-right.png" alt="portal right" class="portal-right" />
  </div>
  <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
  <div class="earth-pot-stack">
    <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
    <img src="/assets/images/minigame/pot.png" alt="pot" class="pot-upper" />
    <img src="/assets/images/minigame/plant.png" alt="plant" class="plant-upper" style="display:none;" />
  </div>
</div>

<!-- Mini Game Row -->
<div class="minigame-row">
  <div class="minigame-earth-row">
    <div class="earth-pot-stack">
      <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
      <img src="/assets/images/minigame/pot.png" alt="pot" class="pot-lower" />
      <img src="/assets/images/minigame/plant.png" alt="plant" class="plant-lower" style="display:none;" />
    </div>
    <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
    <div class="earth-water-stack">
      <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
      <img src="/assets/images/minigame/water.png" alt="water" class="water" />
    </div>
    <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
    <div class="earth-water-stack">
      <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
      <img src="/assets/images/minigame/water.png" alt="water" class="water" />
    </div>
    <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
    <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
    <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
    <div class="earth-portal-stack">
      <img src="/assets/images/minigame/earth.png" alt="earth" class="earth-tile" />
      <img src="/assets/images/minigame/portal-left.png" alt="portal left" class="portal-left" />
    </div>
    <div class="sara-character">
      <img id="sara-sprite" src="/assets/images/minigame/sara_standing_left.png" alt="Sara" />
    </div>
  </div>
</div>

<div class="main-content">
  <div class="section-title">
    <h2>What I Do</h2>
  </div>

  <div class="what-i-do-grid">
    <a href="/projects/technical/" class="what-i-do-link">
      <div class="what-i-do-item">
        <div class="what-i-do-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
          </svg>
        </div>
        <h3>Development</h3>
        <p>I build software solutions that make technology more accessible and bring people together, from mobile apps to research tools. <br><br> My technical experience comes not only from being a computer science major, but also from numerous technical projects that I've worked on over the years. </p>
      </div>
    </a>
    
    <a href="/projects/research/" class="what-i-do-link">
      <div class="what-i-do-item">
        <div class="what-i-do-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
          </svg>
        </div>
        <h3>Research & Teaching</h3>
        <p>I'm a Research Assistant at NoriLLA, where I develop AR educational games to study AI-assisted learning. <br><br> I've also taught programming fundamentals in Python as a Teaching Assistant for a year.</p>
      </div>
    </a>
    
    <a href="/projects/game-design/" class="what-i-do-link">
      <div class="what-i-do-item">
        <div class="what-i-do-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        </div>
        <h3>Game Design</h3>
        <p>I love designing (and playing) games that challenge players with innovative mechanics and unexpected decisions.<br><br>My design projects span both digital and physical games, and they keep my creative spark alive.</p>
      </div>
    </a>
  </div>

  <div class="section-title">
    <h2>Featured Projects</h2>
  </div>

  <div class="featured-projects">
    <div class="project-item">
      <h3>AI-Assisted Learning Research</h3>
      <p class="project-subtitle">NoriLLA Research Position</p>
      
      <p>Developing an augmented reality game with computer vision to improve children's STEM learning outcomes. The research explores how AI feedback enhances learning while increasing dialogue and collaboration between children and parents—analyzed using OpenAI's Whisper for conversation transcription.</p>
      
      <a href="/projects/research/" class="project-link">View More of My Research →</a>
      <div class="project-images">
        <button class="carousel-nav prev">
            <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
        </button>
        <div class="project-images-container">
            <img src="{{ '/assets/images/norilla/Screenshot 2025-08-02 at 19.14.06.png' | relative_url }}" alt="norilla 1" />
            <img src="{{ '/assets/images/norilla/Screenshot 2025-08-02 at 19.14.16.png' | relative_url }}" alt="Face simulation - norilla 2" />
        </div>
        <button class="carousel-nav next">
            <svg viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
        </button>
        </div>
    </div>

    <div class="project-item">
      <h3>Flytrap Adventures</h3>
      <p class="project-subtitle">2D Platformer Game</p>
      
      <p> With a team from CMU's Game Creation Society, created a 2D platformer where players navigate a flytrap through a dynamic greenhouse environment, showcasing innovative game mechanics and environmental storytelling. </p>
      
      <a href="/projects/game-design/" class="project-link">View More of My Game Design →</a>
      <div class="project-images">
        <button class="carousel-nav prev">
            <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
        </button>
        <div class="project-images-container">
            <img src="{{ '/assets/images/Flytrap/n8mDxt.png' | relative_url }}" alt="Flytrap Adventures gameplay" />
            <img src="{{ '/assets/images/Flytrap/jJXk8j.png' | relative_url }}" alt="Flytrap Adventures level design" />
            <img src="{{ '/assets/images/Flytrap/4t6iaa.png' | relative_url }}" alt="Flytrap Adventures mechanics" />
            <img src="{{ '/assets/images/Flytrap/wdEpRI.png' | relative_url }}" alt="Flytrap Adventures environment" />
        </div>
        <button class="carousel-nav next">
            <svg viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
        </button>
        </div>
    </div>

    <div class="project-item">
      <h3>Simulated Facial Expression Generation</h3>
      <p class="project-subtitle">CMU RASL Research Project</p>
      
      <p>Designed and implemented a Python-based face model using PyQt5 for dynamic facial expression transitions, integrated into a personal trainer robot for real-time interactions.</p>
      
      <a href="/projects/technical/" class="project-link">View More of My Technical Projects →</a>
      <div class="project-images">
        <button class="carousel-nav prev">
            <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
        </button>
        <div class="project-images-container">
            <img src="{{ '/assets/images/face/ezgif-43f48114e79780.gif' | relative_url }}" alt="Face simulation - expression transitions" />
            <img src="{{ '/assets/images/face/ezgif-43802e8aab12f2.gif' | relative_url }}" alt="Face simulation - dynamic expressions" />
            <img src="{{ '/assets/images/face/Screenshot 2025-08-02 at 17.18.41.png' | relative_url }}" alt="Face simulation interface" />
        </div>
        <button class="carousel-nav next">
            <svg viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
        </button>
        </div>
    </div>
  </div>

  <section class="experience-section">
    <div class="experience-container">
      <div class="experience-left">
        <h2>Experience</h2>
      </div>
      <div class="experience-right">
        <div class="experience-content">
          <div class="experience-item">
            <img src="/assets/images/workExperiences/confetti.jpg" alt="Confetti logo" class="experience-logo">
            <div class="experience-details">
              <div class="experience-header">
                <h3>Software Engineering intern</h3>
                <div class="nav-arrow">→</div>
              </div>
              <div class="experience-meta">
                <a href="https://www.useconfetti.com/" class="company-link" target="_blank" rel="noopener">
                  <span class="company">Confetti</span>
                </a>
                <span class="period">Jun 2025 - Aug 2025</span>
              </div>
              <p>Developed key features for <a href="https://apps.apple.com/us/app/mosh-music-with-friends/id6748318984" target="_blank">Mosh</a>, a social music app, including AI-generated posts and music recaps, which boosted user engagement and retention. Worked in a rapid iteration cycle, integrating user feedback from testing sessions into same-day design pivots, learning the full stack on the job and optimizing for real-time performance. </p>
              <div class="experience-tags">
                <span class="tag">Swift</span>
                <span class="tag">JavaScript</span>
              </div>
            </div>
          </div>
          
          <div class="experience-item">
            <img src="/assets/images/workExperiences/norilla.webp" alt="NoriLLA logo" class="experience-logo">
            <div class="experience-details">
              <div class="experience-header">
                <h3>Research Assistant & Programming Intern</h3>
                <div class="nav-arrow">→</div>
              </div>
              <div class="experience-meta">
                <a href="https://norilla.com" class="company-link" target="_blank" rel="noopener">
                  <span class="company">NoriLLA</span>
                </a>
                <span class="period">Jun 2024 - May 2025 </span>
              </div>
              <p> Implemented an AR game that uses AI to provably improve children's learning of STEM concepts. Analyzed gameplay conversations using OpenAI's Whisper, uncovering that AI feedback led to increased
dialogue and collaboration between children and parents. </p>
              <div class="experience-tags">
                <span class="tag">Java</span>
                <span class="tag">Processing</span>
                <span class="tag">Python</span>
              </div>
            </div>
          </div>
          
          <div class="experience-item">
            <img src="/assets/images/workExperiences/cmu.png" alt="CMU logo" class="experience-logo">
            <div class="experience-details">
              <div class="experience-header">
                <h3>Teaching Assistant of Fundamentals of Programming</h3>
                <div class="nav-arrow">→</div>
              </div>
              <div class="experience-meta">
                <a href="https://www.cmu.edu" class="company-link" target="_blank" rel="noopener">
                  <span class="company">Carnegie Mellon University</span>
                </a>
                <span class="period">Jan 2024 - Dec 2024</span>
              </div>
              <p>Mentored students from first-time coders to confident developers—one student credited the experience with landing an AI startup internship and switching their major to CS. Lead recitations for 30 students and hosted office hours and tutoring sessions, helping students understand core programming concepts and debugging techniques.</p>
              <div class="experience-tags">
                <span class="tag">Python</span>
              </div>
            </div>
          </div>
          
          <div class="experience-item">
            <img src="/assets/images/workExperiences/logo_ibt.svg" alt="Institute of Biotechnology logo" class="experience-logo">
            <div class="experience-details">
              <div class="experience-header">
                <h3>Computational Biology Intern</h3>
                <div class="nav-arrow">→</div>
              </div>
              <div class="experience-meta">
                <a href="https://www.ibt.cas.cz/en/" class="company-link" target="_blank" rel="noopener">
                  <span class="company">Institute of Biotechnology CAS</span>
                </a>
                <span class="period">Jul 2023 - Aug 2023</span>
              </div>
              <p>Built pipelines for genome alignment, streamlining the processing of large-scale genomic datasets. Contributed to ongoing genomic research, proving ISL1 is required for the development and survival of spiral
ganglion neurons.</p>
              <div class="experience-tags">
                <span class="tag">R</span>
                <span class="tag">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<script src="/assets/js/minigame.js"></script>

