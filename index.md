---
layout: default-less-padding
title: research
permalink: /
includedInNav: true
onJobMarket: false

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
    <div class="float-left">
        Starting January 2023, I will work as an Assistant Professor at the <a href="{{ site.cuAtlasUrl }}" target="_blank">ATLAS Institute</a> and the <a href="https://www.colorado.edu/cs/" target="_blank">Department of Computer Science</a> at the <a href="{{ site.cuBoulderWebsiteUrl }}" target="_blank">University of Colorado Boulder</a>. I am currently working as a <a href="{{ site.ciFellows2021Url }}"  target="_blank">Computing Innovation Fellow</a> and Post-Doctoral Researcher with <a href="{{ site.unstableDesignUrl }}" target="_blank">Laura Devendorf</a>.
        <br/>
        <br/>
         I lead the <a class="bold" href="https://utilityresearchlab.org" target="_blank">Utility Research Lab</a>, a highly interdisciplinary group that invents and investigates digital fabrication technology, tools, and techniques to advance science and engineering while positively impacting people, society, and the environment.
        <br/>    
        <br/>
        My work has been recognized with a <a href="https://cccblog.org/2021/07/22/announcing-the-2021-computing-innovation-fellows/#:~:text=CRA%20and%20CCC%20are%20extremely,CIFellowships%20at%2048%20different%20universities" target="_blank">CRA/CCC Computing Innovation Fellowship</a>, a <a href="https://blog.google/outreach-initiatives/education/new-awards-support-future-leaders-computing-research/" target="_blank">Google - CMD-IT Dissertation Fellowship</a>, a Carnegie Mellon University Sansom Endowed Presidential Fellowship, an <a href="https://research.adobe.com/fellowship/previous-fellowship-award-winners/" target="_blank">Adobe Research Fellowship Honorable Mention</a>, and a Xerox Technical Minority Scholarship.
        <br/>
        <br/>

        {% include notices/recruiting-notice.html %}

        <div class="col">
            <br/>
            I completed my Ph.D. and M.S. in Human-Computer Interaction at the <a href="{{ site.cmuHCIIDeptWebsiteUrl }}" target="_blank">Human-Computer Interaction Institute</a> of <a href="{{ site.cmuWebsiteUrl }}" target="_blank">Carnegie Mellon University</a>, where I was advised by <a href="{{ site.scottHudsonUrl }}" target="_blank">Scott Hudson</a> as part of the <a href="{{site.devlabWebsiteUrl }}" target="_blank">DevLab</a>.
            During my Ph.D. program, I interned at <a href="https://www8.hp.com/us/en/hp-labs/index.html" target="_blank">HP Labs</a> in the Immersive Experiences Lab. Before Carnegie Mellon, I completed a M.S.E in <a href="http://cg.cis.upenn.edu/cggt.html" target="_blank">Computer Graphics and Game Technology</a> and a B.S.E in <a href="http://cg.cis.upenn.edu/dmd.html" target="_blank">Digital Media Design</a> at the <a href="https://www.upenn.edu/" target="_blank">University of Pennsylvania</a>. I was also previously software engineer at <a href="https://about.fb.com/" target="_blank">Facebook</a>.
            <br/>
            <br/>
            Check out my <a href="{{site.path_to_research}}" title="Research">research projects</a> to learn more about my work.
            <span style="clear:both;"/>
        </div>
    </div>

  </article>
</div>
<div class="col">
    <hr class="hr-partial-sep" style="margin-top:20px; margin-bottom:20px;" />
</div>

{% include research/research-section.html %}
