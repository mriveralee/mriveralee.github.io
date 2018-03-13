---
layout: page
permalink: /research/
title: research
description: My published work exploring novel fabrication techniques and computational design methods. 
includedInNav: true
---

<!-- <ul class="post-list">
{% for poem in site.poetry reversed %}
    <li>
        <h2><a class="poem-title" href="{{ poem.url | prepend: site.baseurl }}">{{ poem.title }}</a></h2>
        <p class="post-meta">{{ poem.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
{% endfor %}
</ul> -->


<ul class="post-list">
{% for item in site.research %}

    <li class="col three" style="padding-left: 0px; margin-bottom:0px;">
      <div class="col left two" style="padding-left: 0px;">
      {% if item.isLiveProjectPage %}
        {% assign projectLink = item.url  %}
      {% else %}
        {% assign projectLink = site.assetsDir | append: item.url | append: item.pdfUrl %}
      {% endif %}
        <a class="research-title" href="{{ projectLink }}">{{ item.title }}</a>
        <p class="research-meta">{{item.authorDescription}}. <span style="font-style:italic;">{{item.conferenceShortName}}</span>.</p>
        <p class="research-meta">
          <span>
          {% assign hasPrevLink = false %}
          {% if hasPrevLink %}
           <span class="research-meta-separator">{{ site.linkSeparator }}</span>
          {% endif %}
            {% if item.pdfUrl %}
              <a class="research-meta-link" target="_blank" href="{{site.assetsDir | append: item.url | append: item.pdfUrl }}"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Paper</a>
              {% assign hasPrevLink = true %}
            {% endif %}

            {% if item.videoUrl %}
              {% if hasPrevLink %}
               <span class="research-meta-separator">{{ site.linkSeparator }}</span>
              {% endif %}
                <a class="research-meta-link" target="_blank" href="{{ item.videoUrl }}"><i class="fa fa-film" aria-hidden="true"></i> Video</a>
              {% assign hasPrevLink = true %}
            {% endif %}
          </span>
      </p>
      </div>
      <div class="col right one">
        <a href="{{projectLink}}">
          <img class="three" src="{{site.assetsDir | append: item.url | append: item.teaserImageUrl }} ">
        </a>
      </div>
      <div class="col clearfix three" style="margin-bottom: 5px; margin-top:10px;">
        <hr style="width:60%; margin: 0px auto;"/>
      </div>

    </li>

{% endfor %}
</ul>
