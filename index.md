---
layout: default-less-padding
title: research
permalink: /
includedInNav: true

---
<!-- {% include big-name-header.html %} -->

<div class="post" style="margin-top: 44px;">
  <article class="post-content">
    <div id="portrait-img-container" class="col one right">
        <div  class="col three right" style="padding: 0px 40px 0px 40px;">
            <img class="portrait-img three right round-corners" src="{{site.assetsDir | append: '/img/self/me_440x440.jpg'}}">
        </div>
        <div class="name-header">
            <h2>Michael L. Rivera</h2>
        </div>
      <!-- <hr class="col whole hr-partial-sep"/> -->
      <div class="contact-text-items col three" style="text-align:center;" >
        <a href="{{site.path_to_cv}}" target="_blank" title="Resume/CV">Curriculum Vitae</a>
        <br class="hidden-break-wrap"/>
        <span class="hidden-unless-small-screen"> / </span>       
        <a href="{{site.google_scholar_url}}" title="Google Scholar" target="_blank">Google Scholar</a>
        <br class="hidden-break-wrap"/>
        <span class="hidden-unless-small-screen"> / </span>
        <a href="https://github.com/{{site.github_username}}" target="_blank" title="Github">Github</a>
        <br class="hidden-break-wrap"/>
        <span class="hidden-unless-small-screen"> / </span>
        <a href="mailto:{{site.email}}" title="Email">Email</a>
        <br/>
      </div>
    </div>
    I am a Ph.D. student at the <a href="{{ site.cmuHCIIDeptWebsiteUrl }}" target="_blank">Human-Computer Interaction Institute</a> in the School of Computer Science of <a href="{{ site.cmuWebsiteUrl }}" target="_blank">Carnegie Mellon University</a>. I am advised by <a href="{{ site.scottHudsonUrl }}" target="_blank">Scott Hudson</a> at the <a href="{{site.devlabWebsiteUrl }}" target="_blank">Dev Lab</a>.
    <br/>
    <br/>
    The goal of my research is to empower users of personal fabrication technologies to prototype interactive experiences and have real world impact in areas like sustainability.
    <br/>
    <br/>
    I design and build consumer-grade machines such as 3D printers. These machines incorporate human-friendly materials (<i>e.g.,</i> textiles), or blend together different processes like 3D printing with melt electrospinning. I supplement these machines with open-source designs and software tools to make them useful and usable to end-users.
    <br/>
    <br/>
    Check out my <a href="{{site.path_to_research}}" title="Research">research projects</a> and <a href="{{site.path_to_cv}}" target="_blank" title="Resume/CV">curriculum vitae</a> to learn more about my work.
  	<br style="clear:both;"/>
  </article>
</div>

<hr class="hr-partial-sep" style="margin-top:20px; margin-bottom:20px;" />

{% include research/research-section.html abstract=page.abstract %}
