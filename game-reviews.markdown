---
layout: page
title: Game Reviews
permalink: /game-reviews/
hide_title: true
---
# Game Reviews

Welcome to my game reviews section where I share analysis and critiques I wrote for some of my game design classes at CMU. So far I've focused on educational games and table-top roleplaying games, but I'm excited to add more games to this collection. 

## Recent Game Reviews

{% assign game_posts = site.posts | where_exp: "post", "post.categories contains 'game-critiques'" %}
{% if game_posts.size > 0 %}
{% for post in game_posts %}
<article class="game-review-preview">
{% if post.featured_image %}
<div class="featured-image">
<img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}" />
</div>
{% endif %}
<div class="review-content">
<h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
<p class="post-meta">
<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
{% if post.tags.size > 0 %}
<span class="post-tags">
{% for tag in post.tags %}
<span class="tag">{{ tag }}</span>
{% endfor %}
</span>
{% endif %}
</p>
{% if post.excerpt %}
<p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
{% endif %}
<p><a href="{{ post.url | relative_url }}" class="read-more">Read full review →</a></p>
</div>
</article>
<hr>
{% endfor %}
{% else %}
<p>No game reviews yet. Check back soon!</p>
{% endif %}
