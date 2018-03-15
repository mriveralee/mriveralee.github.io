---
layout: default-less-padding
title: research
permalink: /
includedInNav: true

---
{% include big-name-header.html %}

<div class="post" style="margin-top: 44px;">
  <article class="post-content">
    <div class="col one right" style="padding: 0px 40px 20px 40px;">
	   <img class="three right round-corners" src="{{site.assetsDir | append: '/img/self/me_440x440.jpg'}}">
    </div>
    I am a Ph.D. student at the <a href="http://www.hcii.cmu.edu/" target="_blank">Human-Computer Interaction Institute</a> of <a href="http://www.cmu.edu/" target="_blank">Carnegie Mellon University</a>. My research explores novel fabrication techniques and computational design methods to create new opportunities for sensing and interactivity. I am advised by <a href="http://www.cs.cmu.edu/~hudson/" target="_blank">Scott Hudson</a> at the <a href="https://github.com/cmu-devlab/" target="_blank">Dev Lab</a>  
   	<br/>
    <br/>
    Check out my <a href="{{site.path_to_research}}" title="Research">research projects </a> and <a href="{{site.path_to_cv}}" target="_blank" title="Resume/CV">curriculum vitae</a> to learn more about my work.
  	<br style="clear:both;"/>
  	<!-- <hr class="hr-partial-sep"/> -->
    <span class="contacticon center">
      <a class="fa-icon-highlight" href="mailto:{{site.email}}" title="Email">
        <i class="vert-middle fa fa-envelope-square"></i>
      </a>
      <a class="fa-icon-highlight" href="https://github.com/{{site.github_username}}" target="_blank" title="Github">
        <i class="vert-middle fa fa-github-square"></i>
      </a>
      <a class="fa-icon-highlight" href="{{site.path_to_cv}}" target="_blank" title="Resume/CV">
        <i id="cv-icon" class="vert-middle fa fa-file-text-o"></i>
      </a>
      <a class="fa-icon-highlight" href="https://www.linkedin.com/in/{{site.linkedin_username}}" target="_blank" title="LinkedIn">
        <i class="vert-middle fa fa-linkedin-square"></i>
      </a>
      <a class="fa-icon-highlight" href="https://twitter.com/{{site.twitter_username}}" target="_blank" title="Twitter">
        <i class="vert-middle fa fa-twitter-square"></i>
      </a>
    </span>
  </article>
</div>

<hr class="hr-partial-sep" style="margin-top:20px; margin-bottom:20px;" />

{% include research/research-section.html abstract=page.abstract %}
