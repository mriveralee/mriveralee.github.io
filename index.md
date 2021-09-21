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
        <a href="{{site.url_for_cv}}" target="_blank" title="Curriculum Vitae">Curriculum Vitae</a>
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
    I am a Ph.D. Candidate at the <a href="{{ site.cmuHCIIDeptWebsiteUrl }}" target="_blank">Human-Computer Interaction Institute</a> in the School of Computer Science of <a href="{{ site.cmuWebsiteUrl }}" target="_blank">Carnegie Mellon University</a>. I am advised by <a href="{{ site.scottHudsonUrl }}" target="_blank">Scott Hudson</a> at the <a href="{{site.devlabWebsiteUrl }}" target="_blank">DevLab</a>.
    <br/>
    <br/>
    My primary research interests are at the intersection of human-computer interaction (HCI) and digital fabrication. I develop hardware, software and material techniques that extend the capabilities of digital fabrication technology, and explore how they can be used for functional and creative purposes. My dissertation introduces techniques for integrating everyday materials (e.g, textiles) into 3D printing processes to broaden the design space for creating personalized and interactive objects.
    <br/>
    <br/>
    My work has been recognized with a <a href="https://blog.google/outreach-initiatives/education/new-awards-support-future-leaders-computing-research/" target="_blank">Google - CMD-IT Dissertation Fellowship</a>, a Carnegie Mellon University Sansom Endowed Presidential Fellowship, an <a href="https://research.adobe.com/fellowship/previous-fellowship-award-winners/" target="_blank">Adobe Research Fellowship Honorable Mention</a>, and a Xerox Technical Minority Scholarship.
    <br/>
    <br/>
    During my Ph.D. program, I interned at <a href="https://www8.hp.com/us/en/hp-labs/index.html" target="_blank">HP Labs</a> in the Immersive Experiences Lab. Before Carnegie Mellon, I completed a M.S.E in <a href="http://cg.cis.upenn.edu/cggt.html" target="_blank">Computer Graphics and Game Technology</a> and a B.S.E in <a href="http://cg.cis.upenn.edu/dmd.html" target="_blank">Digital Media Design</a> at the <a href="https://www.upenn.edu/" target="_blank">University of Pennsylvania</a>. I was also a software engineer at <a href="https://about.fb.com/" target="_blank">Facebook</a> and <a href="https://www.linkedin.com/company/linkedin" target="_blank"> LinkedIn</a>.
    <br/>
    <br/>
    {% include notices/job-notice.html %}
    <br/>
    <br/>
    Check out my <a href="{{site.path_to_research}}" title="Research">research projects</a> to learn more about my work.
    <span style="clear:both;"/>

  </article>
</div>

<hr class="hr-partial-sep" style="margin-top:20px; margin-bottom:20px;" />

{% include research/research-section.html abstract=page.abstract %}
