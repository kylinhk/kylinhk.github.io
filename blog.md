---
layout: page
title: 博客
permalink: /blog/
description: 浏览最新的抖音广告投放经验、市场洞察和行业趋势分析
---

<div class="blog-header">
  <h1>行业洞察与经验分享</h1>
  <p>了解最新的抖音广告趋势，获取专业的营销策略建议</p>
</div>

<div class="posts-grid">
  {% for post in site.posts %}
    <article class="post-card">
      <div class="post-header">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">
            {{ post.date | date: "%Y年%m月%d日" }}
          </time>
          {% if post.category %}
            <span class="categories">
              <span class="category">{{ post.category }}</span>
            </span>
          {% endif %}
        </div>
      </div>
      
      <div class="post-excerpt">
        {{ post.excerpt | strip_html | truncatewords: 50 }}
      </div>
      
      <div class="post-footer">
        <a href="{{ post.url | relative_url }}" class="read-more">阅读全文 →</a>
      </div>
    </article>
  {% endfor %}
</div>

<div class="blog-sidebar">
  <div class="sidebar-section">
    <h3>热门分类</h3>
    <ul class="category-list">
      <li><a href="#">投放策略</a></li>
      <li><a href="#">案例分析</a></li>
      <li><a href="#">行业动态</a></li>
      <li><a href="#">实用技巧</a></li>
    </ul>
  </div>
  
  <div class="sidebar-section">
    <h3>最新文章</h3>
    <ul class="recent-posts">
      {% for post in site.posts limit:5 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <time>{{ post.date | date: "%m-%d" }}</time>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>