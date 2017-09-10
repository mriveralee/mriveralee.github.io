---
layout: project
title: Stretching the Bounds of 3D Printing with Embedded Textiles
authors:
  - Michael L. Rivera
  - Melissa Moukperian
  - Daniel Ashbrook
  - Jennifer Mankoff
  - Scott E. Hudson
conferencePage: http://dl.acm.org/citation.cfm?id=3025460
pdfUrl: CHI17-stretching-3dp.pdf
videoUrl: https://www.youtube.com/watch?v=vMZIl4vDHfc
youtubeVideoId: 9xqze9csLmY
publicationYear: 2017
publicationDate: May 2017
conferenceShortName: CHI 2017
conferenceName: ACM SIGCHI
teaserImageUrl: /img/teaser_watch_band_01.jpg
images:
abstract: >
  Textiles are an old and well developed technology that have many desirable characteristics. They can be easily folded, twisted, deformed, or cut; some can be stretched; many are soft. Textiles can maintain their shape when placed under tension and can even be engineered with variable stretching ability. Conversely, 3D printing is a relatively new technology that can precisely produce functional, rigid objects with custom geometry. Combining 3D printing and textiles opens up new opportunities for rapidly creating rigid objects with embedded flexibility as well as soft materials imbued with additional functionality. In this paper, we introduce a suite of techniques for integrating 3D printing with textiles during the printing process, opening up a new design space that takes inspiration from both fields. We demonstrate how the malleability, stretchability and aesthetic qualities of textiles can enhance rigid printed objects, and how textiles can be augmented with functional properties enabled by 3D printing.

citation: "Michael L. Rivera, Melissa Moukperian, Daniel Ashbrook, Jennifer Mankoff, and Scott E. Hudson. 2017. Stretching the Bounds of 3D Printing with Embedded Textiles. In Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (CHI '17). ACM, New York, NY, USA, 497-508. DOI: https://doi.org/10.1145/3025453.3025460"

authorDescription: <span class="bold">Michael L. Rivera</span>, Melissa Moukperian, Daniel Ashbrook, Jennifer Mankoff, and Scott E. Hudson
isLiveProjectPage: true
---

<div>
  <h3 style="margin-bottom:10px;">abstract</h3>
  <p>{{ page.abstract }}</p>
</div>

{% if page.youtubeVideoId %}
<div class="yt-video-container">
  <iframe width="100%" height="auto" src="{{ page.youtubeVideoId | prepend: 'https://www.youtube.com/embed/'}}" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
{% endif %}

<p>
  <h3 style="margin-bottom:10px;">citation</h3>
  <div class="research-meta">
      <pre class="citation">{{ page.citation }}</pre>
  </div>
</p>


<h3 style="margin-bottom:10px;"> media and images </h3>
<div class="media_container">
  <div class="img_row">
    <div class="col half">
      <a href="{{site.assetsDir | append: page.url | append: '/img/high-res/watch_band_01.jpg'}}" target="_blank">
        <img width="100%" src="{{site.assetsDir | append: page.url | append: '/img/low-res/watch_band_01.jpg'}}" />
      </a>
    </div>
    <div class="col half">
      <a href="{{site.assetsDir | append: page.url | append: '/img/high-res/watch_band_02.jpg'}}" target="_blank">
        <img width="100%" src="{{site.assetsDir | append: page.url | append: '/img/low-res/watch_band_02.jpg'}}" />
      </a>
    </div>
  </div>

  <div class="img_row">
    <div class="col half">
      <a href="{{site.assetsDir | append: page.url | append: '/img/high-res/box_lid_01.jpg'}}" target="_blank">
        <img width="100%" src="{{site.assetsDir | append: page.url | append: '/img/low-res/box_lid_01.jpg'}}" />
      </a>
    </div>
    <div class="col half">
      <a href="{{site.assetsDir | append: page.url | append: '/img/high-res/box_lid_02.jpg'}}" target="_blank">
        <img width="100%" src="{{site.assetsDir | append: page.url | append: '/img/low-res/box_lid_02.jpg'}}" />
      </a>
    </div>
  </div>

  <div class="img_row">
    <div class="col one">
      <a href="{{site.assetsDir | append: page.url | append: '/img/high-res/adhesion.jpg'}}" target="_blank">
        <img width="100%" src="{{site.assetsDir | append: page.url | append: '/img/low-res/adhesion.jpg'}}" />
      </a>
    </div>
    <div class="col one">
      <a href="{{site.assetsDir | append: page.url | append: '/img/high-res/cat_toy_01.jpg'}}" target="_blank">
        <img width="100%" src="{{site.assetsDir | append: page.url | append: '/img/low-res/cat_toy_01.jpg'}}" />
      </a>
    </div>
    <div class="col one">
      <a href="{{site.assetsDir | append: page.url | append: '/img/high-res/mech_arm_01.jpg'}}" target="_blank">
        <img width="100%" src="{{site.assetsDir | append: page.url | append: '/img/low-res/mech_arm_01.jpg'}}" />
      </a>
    </div>
  </div>
  <div class="img_row">
    <div >
      <a href="{{site.assetsDir | append: page.url | append: '/img/high-res/dodeca_flat.jpg'}}" target="_blank">
        <img class="col half" width="100%" src="{{site.assetsDir | append: page.url | append: '/img/low-res/dodeca_flat.jpg'}}" />
      </a>
    </div>
    <div class="col half">
      <a href="{{site.assetsDir | append: page.url | append: '/img/high-res/dodeca_open.jpg'}}" target="_blank">
        <img width="100%" src="{{site.assetsDir | append: page.url | append: '/img/low-res/dodeca_open.jpg'}}" />
      </a>
    </div>
  </div>
</div>
