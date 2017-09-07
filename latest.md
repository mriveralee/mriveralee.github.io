---
layout: page
title: latest
permalink: /latest/
includedInNav: true
---


<div class="three" style="margin-bottom:40px;">
  <p>
    I have my hands in a lot of pots- from research to music, all the way to woodworking. This is a place for all the things I do, write, read, or generally find interesting.
    More to see here soon!
  </p>
  <p>
    In the mean time, check out my <a href ="/research/">research</a> and <a href ="/music/">music</a>.
  </p>
</div>

<!-- <ul class="post-list">
    {% for post in paginator.posts %}
      <li>
        <h2><a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y — %H:%M' }}</p>
        <p>{{ post.description }}</p>
        <br/>
        <hr/>
      </li>
    {% endfor %}
</ul> -->

<div class="microupdates">
  <h2 style="margin-bottom: 30px;">updates</h2>
  <table>
    <tbody>
      {% assign updates = site.data.microupdates.updates | sort: 'date' %}
      {% for update in updates reversed limit: 20 %}
        <tr class="post-meta ">
          <td class="data-spacer date"> {{ update.date | date: '%b %-d, %Y' }} </td>
          <td> {{ update.text }} </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
<div class="three" style="text-align: center; margin-bottom:10px;">
  <img class="" style="width:30%; min-width:200px; max-width:240px;" src="{{site.assetsDir | append: '/img/self/me_comic_lecture_400x400.png'}}" />
  <span class="caption clearfix"  style="margin-top:10px;">
    My likeness by the wonderful <a href="http://www.beeboopboop.com/" target="_blank">Siyan Zhao</a>.
  </span>
</div>

<hr class="hr-partial-sep" style="margin-bottom:10px;" />
