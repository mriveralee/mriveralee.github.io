---
layout: page
permalink: /research/
title: research
description: Showcase your writing, short stories, or poems. Replace this text with your description.
includedInNav: true
---

<ul class="post-list">
{% for poem in site.poetry reversed %}
    <li>
        <h2><a class="poem-title" href="{{ poem.url | prepend: site.baseurl }}">{{ poem.title }}</a></h2>
        <p class="post-meta">{{ poem.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
{% endfor %}
</ul>


<ul class="post-list">
{% for item in site.research %}
    <li class="col three">
      <div class="right one">
        <img class="three" height="100%" src="{{site.assetsDir | append: item.url | append: item.teaserImageUrl }} ">
      </div>
      <div class="left two">
        <h2><a class="poem-title" href="{{ item.url }}">{{ item.title }}</a></h2>
        <p class="post-meta">{{item.abstract}}</p>
        <!-- <p class="post-meta">{{ item.publicationDate| date: '%B %-d, %Y — %H:%M' }}</p> -->
        <p class="post-meta">{{ item.publicationDate| date: '%B %Y' }}</p>
      </div>
    </li>
{% endfor %}
</ul>
