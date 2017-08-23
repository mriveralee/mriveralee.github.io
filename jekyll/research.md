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
      <div class="col left two">
        <a class="research-title" href="{{ item.url }}">{{ item.title }}</a>
        <p class="research-meta">{{item.shortDescription}}</p>
      </div>
      <div class="col right one">
        <img class="three" src="{{site.assetsDir | append: item.url | append: item.teaserImageUrl }} ">
      </div>
    </li>
{% endfor %}
</ul>
