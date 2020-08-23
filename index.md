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
        <a href="{{site.url_for_cv}}" target="_blank" title="Resume/CV">Curriculum Vitae</a>
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
    I am a Ph.D. candidate at the <a href="{{ site.cmuHCIIDeptWebsiteUrl }}" target="_blank">Human-Computer Interaction Institute</a> in the School of Computer Science of <a href="{{ site.cmuWebsiteUrl }}" target="_blank">Carnegie Mellon University</a>. I am advised by <a href="{{ site.scottHudsonUrl }}" target="_blank">Scott Hudson</a> at the <a href="{{site.devlabWebsiteUrl }}" target="_blank">DevLab</a>.
    <br/>
    <br/>
    My research sits at the intersection of technical human-computer interaction (HCI), material science and digital fabrication. I develop new capabilities for digital fabrication technologies like 3D printers, and explore how they might better serve the people who use them.
    <br/>
    <br/>
    To this end, I have introduced fabrication techniques for materials that are soft, compliant, or environmentally-sustainable while demonstrating applications in sensing, actuation, and interactive devices. I supplement these techniques with open-source hardware designs and software tools to make them useful and approachable to end-users.
    <br/>
    <br/>
    Check out my <a href="{{site.path_to_research}}" title="Research">research projects</a> and <a href="{{site.url_for_cv}}" target="_blank" title="Resume/CV">curriculum vitae</a> to learn more about my work.
  	<br style="clear:both;"/>
  </article>
</div>

<hr class="hr-partial-sep" style="margin-top:20px; margin-bottom:20px;" />

{% include research/research-section.html abstract=page.abstract %}
