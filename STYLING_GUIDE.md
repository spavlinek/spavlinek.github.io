# Styling Guide for Your Personal Website

## 🎨 Available Styling Options

### Fonts
Your site now uses **Inter** as the primary font and **JetBrains Mono** for code blocks. You can change these by editing `assets/css/custom.css`:

```css
/* Change primary font */
body {
  font-family: 'Your-Font-Name', sans-serif;
}

/* Change code font */
code, pre {
  font-family: 'Your-Mono-Font', monospace;
}
```

### Color Schemes
Three pre-built color schemes are available:

1. **Default (Blue)** - Professional and modern
2. **Dark Theme** - Add `dark-theme` class to `<body>`
3. **Warm Theme** - Add `warm-theme` class to `<body>`
4. **Cool Theme** - Add `cool-theme` class to `<body>`

### Custom Colors
Edit the CSS variables in `assets/css/custom.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
  --text-color: #your-color;
  --text-light: #your-color;
  --background-color: #your-color;
  --background-alt: #your-color;
  --border-color: #your-color;
}
```

## 🧭 Top Navigation Bar Customization

### 1. Change Navigation Items
Edit `_config.yml` under the `header_pages` section:

```yaml
header_pages:
  - about.md
  - projects.md
  - research.md
  - blog.md
  - resume.md
  - contact.md
```

### 2. Change Navigation Styling
Edit the navigation styles in `assets/css/custom.css`:

```css
/* Navigation background */
.site-header {
  background: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Site title */
.site-title {
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-color) !important;
}

/* Navigation links */
.site-nav .page-link {
  font-weight: 500;
  color: var(--text-color);
  transition: color 0.2s ease;
}

.site-nav .page-link:hover {
  color: var(--primary-color);
}
```

### 3. Add a Logo
Create an `assets/images/` folder and add your logo, then edit the site title in `_config.yml`:

```yaml
title: Your Name
logo: /assets/images/your-logo.png
```

### 4. Change Navigation Layout
For a centered navigation, add this CSS:

```css
.site-nav {
  text-align: center;
}

.site-nav .page-link {
  margin: 0 1rem;
}
```

## 📱 Responsive Design

The site is mobile-responsive. Key breakpoints:

- **Desktop**: Full navigation
- **Tablet**: Condensed navigation
- **Mobile**: Hamburger menu (handled by Minima theme)

## 🎯 Component Styling

### Buttons
Use the `.btn` class for styled buttons:

```html
<a href="/contact/" class="btn">Contact Me</a>
```

### Cards
Use the `.card` class for content cards:

```html
<div class="card">
  <h3>Project Title</h3>
  <p>Project description...</p>
</div>
```

### Project Cards
Use the `.project-card` class for project showcases:

```html
<div class="project-card">
  <h3>Project Name</h3>
  <div class="project-meta">Technologies: React, Node.js</div>
  <p>Project description...</p>
</div>
```

## 🌈 Theme Switching

To add a theme switcher, create a JavaScript file:

```javascript
// assets/js/theme-switcher.js
function switchTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.className = savedTheme;
}
```

## 📝 Typography Scale

Available heading sizes:
- `h1`: 2.5rem (40px)
- `h2`: 2rem (32px)
- `h3`: 1.5rem (24px)
- `h4`: 1.25rem (20px)

## 🎨 Quick Customization Examples

### 1. Change Primary Color
```css
:root {
  --primary-color: #your-favorite-color;
}
```

### 2. Add Custom Font
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

### 3. Add Background Pattern
```css
body {
  background-image: url('data:image/svg+xml,<svg>...</svg>');
  background-repeat: repeat;
}
```

### 4. Custom Navigation Icons
```html
<!-- In your navigation -->
<a href="/projects/" class="page-link">
  <i class="fas fa-code"></i> Projects
</a>
```

## 🔧 Advanced Customization

### Custom Layouts
Create custom layouts in `_layouts/`:

```html
<!-- _layouts/project.html -->
---
layout: default
---
<div class="project-layout">
  {{ content }}
</div>
```

### Custom Includes
Create reusable components in `_includes/`:

```html
<!-- _includes/project-card.html -->
<div class="project-card">
  <h3>{{ include.title }}</h3>
  <p>{{ include.description }}</p>
  <a href="{{ include.link }}" class="btn">View Project</a>
</div>
```

## 📊 Performance Tips

1. **Optimize images** before adding them
2. **Minimize CSS** for production
3. **Use WebP format** for images when possible
4. **Lazy load** images for better performance

## 🎯 Best Practices

1. **Consistency**: Use the same colors and fonts throughout
2. **Accessibility**: Ensure sufficient color contrast
3. **Mobile-first**: Test on mobile devices first
4. **Performance**: Keep custom CSS minimal and efficient

---

*For more advanced customization, refer to the [Jekyll documentation](https://jekyllrb.com/docs/) and [Minima theme documentation](https://github.com/jekyll/minima).* 