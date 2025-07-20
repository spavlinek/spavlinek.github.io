# Sara Pavlinek's Personal Website

A Jekyll-based personal website showcasing game design, research, and technical projects.

## Site Structure

```
Home/About
│
├── Projects
│     ├── Technical Projects
│     └── Game Design Projects
│
├── Research
│
├── Blog (Game Critiques)
│
└── Resume + Contact
```

## Getting Started

### Prerequisites
- Ruby (for Jekyll)
- Bundler

### Installation
1. Clone this repository
2. Install dependencies: `bundle install`
3. Run locally: `bundle exec jekyll serve`
4. Visit `http://localhost:4000`

## Customization Guide

### Personal Information
Update the following files with your information:
- `_config.yml` - Site title, description, and navigation
- `about.markdown` - Your personal story and background
- `resume.markdown` - Your professional experience and skills
- `contact.markdown` - Your contact information and social links

### Projects
Add your projects to:
- `projects/technical.markdown` - Software and technical projects
- `projects/game-design.markdown` - Game design projects

### Blog Posts
Create new blog posts in the `_posts/` directory with the format:
```
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: [category1, category2]
tags: [tag1, tag2]
---
```

### Research
Update `research.markdown` with your academic work, publications, and research interests.

## File Structure

- `_config.yml` - Jekyll configuration and site settings
- `index.markdown` - Home page
- `about.markdown` - About page
- `projects/` - Project pages
- `research.markdown` - Research page
- `blog.markdown` - Blog landing page
- `resume.markdown` - Resume page
- `contact.markdown` - Contact page
- `_Game critiques/` - Blog posts
- `404.html` - Custom 404 page

## Deployment

This site is configured for GitHub Pages. Simply push changes to the main branch to deploy.

## Customization Tips

1. **Add your own projects** - Replace placeholder content with your actual work
2. **Update social links** - Add your LinkedIn, GitHub, Twitter, etc.
3. **Customize the theme** - The site uses the Minima theme, which can be customized
4. **Add images** - Create an `assets/` folder for images and media
5. **Add a custom domain** - Update `_config.yml` with your domain

## Support

For Jekyll documentation, visit [jekyllrb.com](https://jekyllrb.com/).

---

*This site is built with Jekyll and the Minima theme.* 