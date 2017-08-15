// Global Store

/**
 ** Defines events and classes for CSS_Animations on pages
 **
***/
var CSS_ANIMATION = {};
CSS_ANIMATION.IE_TRIGGER = 'ieTrigger';
CSS_ANIMATION.EndEvent = 'animationend webkitAnimationEnd MSAnimationEnd oanimationend';
CSS_ANIMATION.StartEvent = 'animationstart webkitAnimationStart MSAnimationStart oanimationstart';
CSS_ANIMATION.PageFadeOutClass = 'fade-out-left';
CSS_ANIMATION.PageBounceOutClass = 'bounce-out';
CSS_ANIMATION.PageBounceInClass ='bounce-in';
CSS_ANIMATION.PageFadeInClass = 'fade-in-left';
CSS_ANIMATION.PageFadeOutInstantClass = 'fade-out-instant';
CSS_ANIMATION.FadeInInstant = 'fade-in-instant';
CSS_ANIMATION.FadeOutInstant = 'fade-out-instant';
MIKERIV = {};
MIKERIV.Global = {
  'title': 'Michael L. Rivera - Code | Design | Sound',
  'orderedProjects': []
};

// Key Codes
MIKERIV.KeyCodes = {
  'LEFT_ARROW': 37,
  'RIGHT_ARROW': 39,
  'CMD_LEFT': 91,
  'CMD_RIGHT': 93
};

// The div that holds page content
MIKERIV.PageContentDivId = '#page-content';

// The types of pages we have 
MIKERIV.PageTypes = {
  'About': 'about',
  'Projects':'projects',
  'Project':'project',
  'Media': 'media',
  'Blog': 'blog'
};

/**
 ** Holds rendered content for the page
 ** These are rendered when the user visits a page,
 ** then the content is stored for revisits
 **/
MIKERIV.PageContent = {
  'about': null,
  'media': null,
  'projects': null,
  'project': null,
  'blog': null,
  'project_list': {}
};

/// 
MIKERIV.Classes = {};

/**
 ** Templates for individuals pages or items
 **/
MIKERIV.Templates = {};

// Page Templates
MIKERIV.Templates.WorkPage = '<div id="project-grid-wrap" class="sixteen columns"><h3 class="page-title fade-in-right">Work</h3><hr class="page-hr fade-in-right"><%= content %></div>';
MIKERIV.Templates.ProjectGridItem = '<div class="project-thumbnail four columns fade-in-right grid-project">' +'<a class="pt-link" href="<%= link %>"></a>' + '<div class="pt-hover-modal">' + '<span class="pt-hover-spacer pt-desc absolute-center">' + '<h3><%= title %></h3><%= shortDesc %>' + '</span>' + '</div>' + '<img class="pt-img" src="<%= thumbnail %>" alt="<%= title %>" />' + '</div>';
//MIKERIV.Templates.ProjectPage = '<div class="fade-in-right page-content-item pc-text-padding"><b>A project that is cool! Show the magic!</b></div>';
MIKERIV.Templates.AboutPage = '<div id="project-grid-wrap" class="sixteen columns"><h3 class="page-title fade-in-right">About</h3><hr class="page-hr fade-in-right"></div><div class="fade-in-right page-content-item pc-text-padding columns sixteen"><p class="project-text"><b> ABOUT PAGE </b> Isn\'t the about page lovely</p></div>';
MIKERIV.Templates.BlogPage = '<div class="fade-in-right page-content-item pc-text-padding columns sixteen">  <p class="project-text"><b>BLOG PAGE </b>this is great!</p></div>';
MIKERIV.Templates.MediaPage = '<div class="fade-in-right page-content-item pc-text-padding columns sixteen">  <p class="project-text"><b> MEDIA </b>loves company</p></div>';

// Default Video Templates
MIKERIV.Templates.YoutubeVideo = '<iframe width="<%= video.width %>" height="<%= video.height %>" src="<%= video.url %>" frameborder="0" allowfullscreen></iframe>';
MIKERIV.Templates.VimeoVideo = '<iframe src="<%= video.url %>" width="<%= video.width %>" height="<%= video.height %>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

// Default Image Template
MIKERIV.Templates.ProjectImageSlides = '<% if (images.length > 1) { %><div id="project-slideshow-<%= project %>" class="project-slideshow centered height-auto"><% for (var i = 0; i < images.length; i++) { %><% var imgUrl = images[i]; %><li><img class="project-slide-img" src="<%= imgUrl %>" /></li><% } %></div><% } else if (images.length == 1) { %> <div class="center-text height-auto"><img class="res-width" src="<%= images[0]%>" /></div> <% } %>';
//500|281

/** Template types:
 ** 1 - just images (put up top)
 ** 2 - images + videos (video on top, images on bottom)
 ** 3 - just video (video on top)
 ** 4 - just text
 **/

/// Construct Project Page Template
var strVar = "";
strVar += "<div class=\"fade-in-right page-content-item pc-text-padding columns sixteen\">";
strVar += "  <h4 class=\"project-date pc-text-padding\"><%= date %><\/h4>";
strVar += "  <h3 class=\"project-title pc-text-padding\">";
strVar += "    <%= title %><span class=\"project-subtitle\"> - <%= shortDesc %><\/span>";
strVar += "  <\/h3>";
strVar += "";
strVar += "  <hr class=\"project-hr\">";
strVar += "    <% if (videoContent) { %>";
strVar += "       <p class=\"project-video\">";
strVar += "         <%= videoContent %> ";
strVar += "        <\/p>";
strVar += "    <% } else if (imagesContent && !bottomImageGallery) { %>";
strVar += "       <div class=\"pad-top-sm height-auto\">";
strVar += "         <%= imagesContent %> ";
strVar += "         <% imagesContent = ''; %>";
strVar += "       <\/div>";
strVar += "    <% } %>";
strVar += "";
strVar += "    <% for (var i = 0; i < desc.length; i++) { %>";
// strVar += "      <div class='project-desc-wrap'>";
strVar += "       <%= desc[i] %>";
// strVar += "      <\/div>";
strVar += "      <% } %>";
strVar += "";

strVar += "    <% if (features && features != '') { %>";
strVar += "     <div class='project-text pc-text-padding pad-bottom-med'>";
strVar += "        <h3 class=''><i class='fa fa-cogs about-subtitle-icon'></i> Features</h3>";
strVar += "         <li style='list-style: none;'>";
strVar += "               <%= features %>";
strVar += "          </li>";
strVar += "     <\/div>";
strVar += "   <% } %>";
strVar += "";
strVar += "    <% if (recognition && recognition.length > 0) { %>";
strVar += "     <div class='project-text pc-text-padding pad-bottom-med'>";
strVar += "        <h3 class=''><i class='fa fa-star about-subtitle-icon'></i> Recognition</h3>";
strVar += "        <% for (var i = 0; i < recognition.length; i++) { %>";
strVar += "         <li>";
strVar += "              <%= recognition[i] %>";
strVar += "          </li>";
strVar += "        <% } %>";
strVar += "     <\/div>";
strVar += "   <% } %>";
strVar += "";

strVar += "    <% if (moreInfo && moreInfo.length > 0) { %>";
strVar += "     <div class='project-text pc-text-padding pad-bottom-med'>";
strVar += "        <h3 class=''><i class='fa fa-external-link about-subtitle-icon'></i> More Information</h3>";
strVar += "        <% for (var i = 0; i < moreInfo.length; i++) { %>";
strVar +=            "<li>";
strVar += "            <a href='<%= moreInfo[i].url %>' target='_blank' title='<%= moreInfo[i].title %>' alt='<%= moreInfo[i].title %>'>";
strVar += "              <%= moreInfo[i].title %>";
strVar += "            </a> ";
//strVar += "            - <%= media[i].date %>";
strVar += "          </li>";
strVar += "        <% } %>";
strVar += "     <\/div>";
strVar += "   <% } %>";
strVar += "";


strVar += "    <% if (imagesContent && bottomImageGallery) { %>";
strVar += "         <div class=\"project-section-padding height-auto\">";
strVar += "           <%= imagesContent %> ";
strVar += "         <\/div>";
strVar += "    <% } %>";
strVar += "<\/div>";


MIKERIV.Templates.ProjectPage = strVar;

/**
 ** Construct About Page Template
 **/
var aboutStrVar = "";
aboutStrVar += "<div id=\"about-page-wrap\">";
// aboutStrVar += "<h3 class=\"page-title fade-in-right\">About<\/h3><hr class=\"page-hr fade-in-right\"><\/div>";
aboutStrVar += "<div class=\"fade-in-right page-content-item pc-text-padding columns sixteen\">";
aboutStrVar += "";
//aboutStrVar += "  <hr class=\"project-hr\">";
aboutStrVar += "<h3 class=\"pc-text-padding\"><i class=\"fa fa-user about-subtitle-icon\"></i> <%= title %> </h3>";
aboutStrVar += "";
// Description
aboutStrVar += " <p class=\"project-text\">";
aboutStrVar += "   <% var fullDesc = \"\"; %>";
aboutStrVar += "        <% for (var i = 0; i < desc.length; i++) { %>";
aboutStrVar += "            <% fullDesc +=  desc[i] %>";
aboutStrVar += "        <% } %>";
aboutStrVar += "        <%= fullDesc %>";
aboutStrVar += "  </p>";
aboutStrVar += "     <div class='project-text pc-text-padding center-text'>";
aboutStrVar += "        <% for (var i = 0; i < contact.length; i++) { %>";
aboutStrVar += "          <% var hasTarget = (contact[i].url.indexOf('mailto:') == -1) ? 'target=\"_blank\"' : ''; %>";
aboutStrVar += "          <div class='about-contact-link center-text'>";
aboutStrVar += "           <a class=\"about-icon-link\" href=\"<%= contact[i].url %>\" alt=\"<%= contact[i].title %>\" title=\"<%= contact[i].title %>\" <%= hasTarget %> >";
aboutStrVar += "            <i class=\"<%= contact[i].fontAwesomeTag %>\"><span class='about-contact-link-title center-text'><%= contact[i].title %></span></i>";
aboutStrVar += "          </a>";
aboutStrVar += "          <\/div>";
aboutStrVar += "        <% } %>";
aboutStrVar += "     <\/div>";
aboutStrVar += "";
// In the Media
aboutStrVar += "  <hr class=\"project-hr\">";
aboutStrVar += "     <div class='project-text pc-text-padding pad-bottom-med'>";
aboutStrVar += "        <h3 class=''><i class='fa fa-laptop about-subtitle-icon'></i> In the Media</h3>";
aboutStrVar += "        <% for (var i = 0; i < media.length; i++) { %>";
aboutStrVar +=            "<li>";
aboutStrVar += "            <a href='<%= media[i].url %>' target='_blank' title='<%= media[i].title %>' alt='<%= media[i].title %>'>";
aboutStrVar += "              <%= media[i].title %>";
aboutStrVar += "            </a> - ";
aboutStrVar += "              <em><%= media[i].source %></em>";
//aboutStrVar += "            - <%= media[i].date %>";
aboutStrVar += "          </li>";
aboutStrVar += "        <% } %>";
aboutStrVar += "     <\/div>";
aboutStrVar += "";
// Teaching
// aboutStrVar += "  <hr class=\"project-hr\">";
// aboutStrVar += "     <div class='project-text pc-text-padding pad-bottom-med'>";
// aboutStrVar += "        <h3 class=''><i class='fa fa-pencil about-subtitle-icon'></i> <%= teaching.title %></h3>";
// aboutStrVar += "        <% for (var i = 0; i < teaching.courses.length; i++) { %>";
// aboutStrVar += "           <li>";
// aboutStrVar += "            <em><%= teaching.courses[i].role %></em>, ";
// aboutStrVar += "            <%= teaching.courses[i].name %> - ";
// aboutStrVar += "            <a href='<%= teaching.courses[i].url %>' target='_blank' title='<%= teaching.courses[i].title %>' alt='<%= teaching.courses[i].title %>'>";
// aboutStrVar += "              <%= teaching.courses[i].date %>";
// aboutStrVar += "            </a>";
// aboutStrVar += "          </li>";
// aboutStrVar += "        <% } %>";
// aboutStrVar += "     <\/div>";
// aboutStrVar += "";
aboutStrVar += "  <hr class=\"project-hr\">";
aboutStrVar += "     <div class='project-text pc-text-padding pad-bottom-med'>";
aboutStrVar += "        <h3 class=''><i class=\"fa fa-thumbs-o-up about-subtitle-icon\"></i> Likes</h3>";
aboutStrVar += "        <% for (var i = 0; i < likes.length; i++) { %>";
aboutStrVar +=            "<li>";
aboutStrVar += "            <%= likes[i] %></em>";
aboutStrVar += "          </li>";
aboutStrVar += "        <% } %>";
aboutStrVar += "     <\/div>";
aboutStrVar += "";
aboutStrVar += "     <hr class=\"project-hr margin-top-lg\">";
aboutStrVar += "     <div class='center-text'>";
aboutStrVar += "        <% for (var i = 0; i < socialLinks.length; i++) { %>";
aboutStrVar += "          <a class='about-icon-link' href='<%= socialLinks[i].url %>' target='_blank' title='<%= socialLinks[i].alt %>' alt='<%= socialLinks[i].alt %>'>";
aboutStrVar += "            <i class='<%= socialLinks[i].fontAwesomeTag %>'></i>";
aboutStrVar += "          </a>";
aboutStrVar += "        <% } %>";
aboutStrVar += "     <\/div>";
aboutStrVar += "    <% if (image) { %>";
aboutStrVar += "       <div class=\"height-auto center-text\">";
aboutStrVar += "         <img class=\"about-profile-img\"src='<%= image %>'>";
aboutStrVar += "       <\/div>";
aboutStrVar += "     <% } %>";
// aboutStrVar += "    <% if (imagesContent) { %>";
// aboutStrVar += "         <div class=\"project-section-padding height-auto\">";
// aboutStrVar += "           <%= imagesContent %> ";
// aboutStrVar += "         <\/div>";
// aboutStrVar += "    <% } %>";
aboutStrVar += "<\/div>";

MIKERIV.Templates.AboutPage = aboutStrVar;

//MIKERIV.Templates.grid_project = '<a href="<%= project.link %>"><img src="<%= project.thumbnail %>"></a>';

/**
 ** About Page Template Data 
 **/
MIKERIV.ABOUT = {
  title: 'About',
  shortDesc: 'Programmer, Artist, Musician',
  email: 'mrivera.lee@gmail.com',
  desc: [
    ' Michael Rivera is a PhD student advised by <a href="http://www.cs.cmu.edu/~hudson/" target="_blank">Scott Hudson</a> at the <a href="http://hcii.cmu.edu" target="_blank">Human-Computer Interaction Institute</a> of <a href="http://www.cmu.edu/" target="_blank">Carnegie Mellon University</a>.',
    ' His research interests focus on novel fabrication techniques and mobile device interactions for <em>Human-Computer Interaction</em>.',
    ' He is exploring the integraton soft materials into rigid 3D printed objects using physically-based simulation and novel design tools.',
    ' <br><br>',
    ' Before journeying to PhD Land, he studied <em>Digital Media Design</em> and <em>Computer Graphics & Game Technology</em> at the <a href="http://cg.cis.upenn.edu/index.html" target="_blank">University of Pennsylvania</a>.',
    ' He also worked on mobile applications for <a href="http://facebook.com/" target="_blank">Facebook</a> and <a href="http://www.linkedin.com" target="_blank">LinkedIn</a>.',
    ' <br><br>',
    ' If you\'d like to talk shop, <a href="mailto:mrivera.lee@gmail.com?Subject=Hello!">get in touch</a>!',
  ],
  resume: '<a class="about-icon-link" href="downloads/RIVERA_MICHAEL_CV.pdf" alt="CV" title="CV" target="_blank"><i class="fa fa-file-text-o"></i></a>',
  image: 'images/self/me_148x148.png',
  contact: [
    { title: "Email",
      url: "mailto:mrivera.lee@gmail.com?Subject=Hello!",
      fontAwesomeTag: "fa fa-envelope"
    },
    { title: 'CV',
      url: 'downloads/RIVERA_MICHAEL_CV.pdf',
      fontAwesomeTag: 'fa fa-file-text-o'
    },
    { title: "LinkedIn",
      url: "http://linkedin.com/in/mikeriv",
      fontAwesomeTag: 'fa fa-linkedin-square'
    }

  ],
  professional: [
    { title: 'Facebook',
      role: 'Software Engineer Intern',
      date: 'May 2013 - August 2013',
      url: 'http://facebook.com/home'
    },
    { title: 'LinkedIn',
      role: 'Mobile Engineering Intern',
      date: 'May 2012 - August 2012',
      url: 'http://linkedin.com'
    }
  ],
  teaching: {
    title: "Teaching - <span class='h3-subtitle'>University of Pennsylvania</span>",
    courses: [
      { name: 'Digital Media Design Capstone Project (CIS 497)',
        role: 'Teaching Assistant',
        url: 'https://fling.seas.upenn.edu/~cis497/dynamic/index.php',
        date: 'Fall 2013'
      },
      { name: 'Introduction to Computer Programming (CIS 110)',
        role: 'Teaching Assistant',
        url: 'http://www.cis.upenn.edu/~cis110/13fa/',
        date: 'Fall 2013'
      },
      { name: 'Software Design & Engineering (CIS 350)',
        role: 'Teaching Assistant',
        url: 'http://www.cis.upenn.edu/~cdmurphy/cis350/spring2013/overview.shtml',
        date: 'Spring 2012'
      }
    ]
  },
  media: [
    { title: 'Leap Motion Developer Newsletter (October 2013)',
      source: 'Leap Motion',
      url: 'http://us6.campaign-archive1.com/?u=b6db0e3e157a48749e1048615&id=d5e41d31ae&e=6cf5a0481d',
      date: '10/2/2013'
    },

    { title: 'Hacking on the frontier of gestural input',
      source: 'Make Magazine',
      url: 'http://blog.makezine.com/2013/02/25/hacking-on-the-frontier-of-gestural-input/',
      date: '2/25/2013'
    },
    { title: 'A student guide to tech at Penn',
      source: 'The Daily Pennsylvanian',
      url: 'http://www.thedp.com/article/2011/09/alexey_komissarouk_fyi_a_student_guide_to_tech_at_penn',
      date: '9/28/2011'
    },
    { title: 'Students compete to design and build apps',
      source: 'The Daily Pennsylvanian',
      url: 'http://www.thedp.com/index.php/article/2011/09/students_compete_to_design_and_build_tech_apps',
      date: '9/18/2011'
    }
    // , { title: 'Ernst elected to lead Undergraduate Assembly',
    //   url: 'http://www.thedp.com/article/2011/04/ernst_elected_to_lead_undergraduate_assembly',
    //  date: ''
    // },
    // { title: 'Students evaluate benefits and challenges of pursuing dual degrees',
    //   url: 'http://www.thedp.com/article/2011/12/students_evaluate_benefits_and_challenges_of_pursuing_dual_degrees',
    //   date: ''
    // },
    // { title: 'Free Library at 40th, Walnut a hub for West Philadelphia',
    //   url: 'http://www.thedp.com/article/2012/03/public_library_underused_by_penn_students',
    //   date: ''
    // },
  ],
  socialLinks: [
      // { url: "http://linkedin.com/in/mikeriv",
      //   fontAwesomeTag: 'fa fa-linkedin-square',
      //   alt: "LinkedIn"
      // },
      { url: "http://github.com/mriveralee",
        fontAwesomeTag: "fa fa-github",
        alt: "GitHub"
      },
      { url: "http://vimeo.com/mikeriv",
        fontAwesomeTag: "fa fa-vimeo-square",
        alt: "Vimeo"
      },
      { url: "http://www.youtube.com/watch?v=JrKltv6TObw&list=PLWH3n6iHMaTfQrR8viuZ55QkedXpPH_K9",
        fontAwesomeTag: "fa fa-youtube-play",
        alt: "YouTube"
      },
      { url: "http://mikeriv.tumblr.com",
        fontAwesomeTag: "fa fa-tumblr-square",
        alt: "Tumblr"
      }
  ],
  likes: [
    'Biking',
    'Singing in the shower',
    'Pi&ntilde;a coladas and getting caught in the rain'
  ]
};

MIKERIV.ALL_PROJECTS = {
  'tracheal-aire' : {
      title: 'Tracheal Aire',
      shortDesc: 'Patient-specific 3D Printable Intubating Airways',
      date: 'January 2014',
      thumbnail: 'images/projects/tracheal-aire/thumbnail.gif',
      desc: [
        "<p class='project-text'>Under the mentorship of <a href='http://www.med.upenn.edu/apps/faculty/index.php/g319/p8408285' target='_blank'>Dr. Jorge Galvez</a> at Children's Hospital of Philadelphia, <a href='http://nmcgill.com' target='_blank'>Nicholas McGill</a> and I developed <a href='http://bit.ly/airwayTA' target='_blank'>Tracheal Aire</a>, a web-based platform for creating customized Williams Intubating Airways based on patient MRI and CT scan data.</p>",
        "<p class='project-text'>Our platform was built for the <a href='http://www.stahq.org/' target='_blank'>Society of Technology in Anesthesia</a> (STA) 2014 Engineering Challenge. Our interface supports the customization of two types of intubating airways and can export a finished product in four different 3D printable file types. The implementation is based on <a href='http://openjscad.org/' target='_blank'>OpenJSCAD</a>, an open source JavaScript-based Computer-aided Design software.</p>"
      ], //
      features: [
        "3D Printing, Williams Intubating Airway, OpenJSCAD"
      ],
      recognition: [
        'Won 1st place in the <a href="http://www.stahq.org/events/annual-meeting/engineering-challenge/" target="_blank">STA 2014 Engineering Challenge</a>',
        '<a href="http://medcitynews.com/2014/02/pediatic-hospital-physicians-initiate-3d-printing-think-tank/" target="_blank">Pediatric hospital physicians form 3D printing “think tank”</a> - <em>MedCity News</em>'
      ],
      moreInfo: [
        { title: "Tracheal Aire Site",
          url: "http://bit.ly/airwayTA"
        },
        { title: "GitHub Repository",
          url: "https://github.com/mriveralee/tracheal-aire"
        },
        { title: "Williams Intubating Airway",
         url: "http://www.airwaycam.com/fiberoptic-oral-airway.html"
       }
      ],
      link: '#projects/tracheal-aire',
      images: [
      'images/projects/tracheal-aire/2.png',
      'images/projects/tracheal-aire/1.png',
      'images/projects/tracheal-aire/6.png',
      'images/projects/tracheal-aire/4.png',
      'images/projects/tracheal-aire/3.png'
      //'images/projects/tracheal-aire/5.png',
      ],
      bottomImageGallery: false,
  },

  'project-paalm' : {
      title: 'Project PAALM',
      shortDesc: 'Autodesk Maya Plug-in',
      date: 'May 2013',
      thumbnail: 'images/projects/project-paalm/thumbnail.gif',
      desc: [
        "<p class='project-text'>Through an independent research project under the advisement of <a href='http://www.cis.upenn.edu/~badler/' target='_blank'>Dr. Norman I. Badler</a> at the University of Pennsylvania, I developed a fast, approximate and inexpensive method for obtaining the phalangeal joint angles of the hand using 3D gesture recognition.</p>",
        "<p class='project-text'>Phalangeal Angle Approximation through the Leap Motion Controller (Project PAALM) directly integrates the <a href='https://www.leapmotion.com/' target='_blank'>Leap Motion Controller</a> into the 3D modeling software, <a href='http://www.autodesk.com/products/autodesk-maya/overview' target='_blank'>Autodesk Maya</a>, providing an intuitive user interface for animating realistic hand motions with speed and precision."
      ],
      features: [
        "Autodesk Maya, Leap Motion Controller, Inverse Kinematics, Gesture Recognition, Python, PyMel, WebSockets"
      ],
      recognition: [
        '<strong>Rivera, Michael L.</strong> "Project PAALM: Phalangeal Angle Approximation through the Leap Motion Controller." University of Maryland, Baltimore County. McNair Scholar Research Conference. Baltimore, MD. 20 September 2013. Conference Presentation.',
        '<strong>Rivera, Michael L.</strong>, McGill, Nicholas H. "Applications of 3D Gesture Recognition" University of Pennsylvania. “Big Think” Innovation Conference. Philadelphia, PA. 30 March 2013. Conference Presentation.',
        '<a href="http://us6.campaign-archive1.com/?u=b6db0e3e157a48749e1048615&id=d5e41d31ae&e=6cf5a0481d" target="_blank">Leap Motion Developer Newsletter (October 2013)</a> - <em> Leap Motion</em>'

      ],
      moreInfo: [
        { title: "Research Blog",
          url: "http://riv.li/paalm"
        }

      ],
      link: '#projects/project-paalm',
      images: [
        'images/projects/project-paalm/2.jpg',
        'images/projects/project-paalm/3.png',
        'images/projects/project-paalm/4.jpg'
      ],
      bottomImageGallery: true,
      video: {
        url: "http://player.vimeo.com/video/75268546",
        type: "vimeo",
        width: 625,
        height: 351
      }
  },

  'phase-change' : {
    title: 'Phase Change',
    thumbnail: 'images/projects/phase-change/thumbnail.gif',
    shortDesc: 'Collaborative Sound Generation',
    date: 'May 2013',
    desc: [
      "<p class='project-text'><a href='http://mriveralee.phase-change.jit.su/?tree=PPFGMFT2xf' target='_blank'>Phase Change</a> was designed and implemented to provide a platform for collaborative audio creation and visualization. The interface allows users to record, shape, and contribute 30-second sounds in a revision control system. Contributed sounds are visualized as spherical nodes in a tree with each branch denoting a variation in collaboration.</p>",
      "<p class='project-text'>This project was a team effort as part of a self-organized independent study at the University of Pennsylvania under the advisement of <a href='http://davidcomberg.com/' target='_blank'> David Comberg</a>. I contributed the entire back end, the user interface design, and served as the technical lead managing the project's development. <a href='http://davesharpl.es' target='_blank'>Dave Sharples</a> handled user-facing audio visualization. <a href='http://judytrinh.com' target='_blank'>Judy Trinh</a> worked on user interface elements. <a href='http://coreynovich.com' target='_blank'>Corey Novich</a> and <a href='http://kathyzhou.com' target='_blank'>Kathy Zhou</a> handled the WebGL visuals such as the particle simulation and cylindrical audio visualization.</p>"
    ],
    recognition: [],
    features: [
        "HTML5, Javascript (Node, Backbone, JQuery, WebGL, Web Audio API), DropBox API, Facebook API, Socket.io, MongoDB"
    ],
    moreInfo: [
      { title: "Phase Change Site",
        url: "http://riv.li/phaseChange"
      },
      { title: "Course Project Blog",
        url: "http://upennwebtech.blogspot.com/"
      }
    ],
    link: '#projects/phase-change',
    images: [
      'images/projects/phase-change/0.png',
      'images/projects/phase-change/2.png',
      'images/projects/phase-change/4.png',
      'images/projects/phase-change/5.png'
     // 'images/projects/phase-change/6.png',
    ],
    bottomImageGallery: false
  },

  'social-sign' : {
    title: 'Social Sign',
    thumbnail: 'images/projects/social-sign/thumbnail.gif',
    shortDesc: 'Multi-user Sign Language Translator',
    date: 'January 2013',
    desc: [
      "<p class='project-text'>A product of the PennApps Spring 2013 hackathon, <a href='http://riv.li/socialSign' target='_blank'>Social Sign</a> is a tool for learning and translating American Sign Language (ASL). The web application uses a rudimentary machine learning algorithm and 3D gesture recognition through the Leap Motion Controller identify ASL from a user's hand gestures.</p>",
      "<p class='project-text'>Detected hand gestures are visualized as vectors and broadcasted in textual and visual representations to other signers in a signing room. In a chat room fashion, Social Sign provides an engaging platform for learning a new language.</p>",
      "<p class='project-text'>I wrote the server that handled translating the gestures into text and images, and sending them to individuals in the same chat room. <a href='http://nmcgill.com' target='_blank'>Nicholas McGill</a> worked on recognizing gestures from the Leap Motion Controller. <a href='http://nataliegravier.com' target='_blank'>Natalie Gravier</a> designed the site and logo.</p>"
    ],
    recognition: [
     '<a href="http://blog.makezine.com/2013/02/25/hacking-on-the-frontier-of-gestural-input/" target="_blank">Hacking on the frontier of gestural input</a> - <em> Make Magazine Blog</em>'
  ],
    features: [
      'Leap Motion Controller, Gesture Recognition, American Sign Language, Learning, Python, Javascript (Node, JQuery), Socket.io, WebGL',
    ],
    moreInfo: [
      { title: "Social Sign Site",
        url: "http://riv.li/socialSign"
      },
      { title: "GitHub Repository",
        url: "https://github.com/mriveralee/finger-me"
      },
      { title: "PennApps Hackathon",
        url: "http://pennapps.com"
      }
    ],
    link: '#projects/social-sign',
    images: [
      'images/projects/social-sign/2.jpg',
      'images/projects/social-sign/3.jpg',
      'images/projects/social-sign/4.jpg',
      'images/projects/social-sign/1.jpg'
    ],
    bottomImageGallery: true,
    video: {
        url: "http://www.youtube.com/embed/JrKltv6TObw",
        type: "youtube",
        width: 640,
        height: 360
    }
  },

  'brobots' : {
    title: 'Brobots',
    thumbnail: 'images/projects/brobots/thumbnail.gif',
    shortDesc: 'Collaborative Gesture-controlled Robots',
    date: 'February 2013',
    desc: [
      "<p class='project-text'>Brobots is a collaborative gesture-based robot control system built using Leap Motion Controllers and WebSockets in 40 hours during the <a href='http://pennhacks.com/' target='_blank'>PennHacks Spring 2013 Hardware Hackathon</a>. One user directs the speed and turn angles of a robot while the other user controls the robot's arm and gripper. The two users can be anywhere in the world and control the robot simultaneously.</p>",
      "<p class='project-text'>As an additional feature, the robot broadcasts a live video feed to a Google Hangout, making it easy to see how the robot is functioning while allowing users to communicate more effectively.</p>",
      "<p class='project-text'>I wrote the web application that converts gesture data from the Leap Motion Controllers into commands for the robot. I also implemented the socket handling for communication between users and the robot. <a href='http://nmcgill.com' target='_blank'>Nicholas McGill</a> handled circuit design and laser cutting components for the robot. We worked together to have the server communicate with the robot through a <a href='http://beagleboard.org/Products/BeagleBone' target='_blank'>BeagleBone</a> over wireless internet.</p>"
    ],
    recognition: [
      'Won 3rd place at the PennHacks Spring 2013 Hardware Hackathon at the University of Pennsylvania'
    ],
    features: 'Leap Motion Controller, BeagleBone, Gesture Recognition, Collaborative Robotics, Python, Javascript (Node, JQuery), Socket.io',
    moreInfo: [
      { title: "GitHub Repository",
        url: "https://github.com/mriveralee/brobots"
      },
      { title: "PennHacks",
        url: "http://pennhacks.com/winners"
      }
    ],
    link: '#projects/brobots',
    images: [
      'images/projects/brobots/2.png'
    ],
    bottomImageGallery: true,
    video: {
        url: "http://www.youtube.com/embed/I2zG9_y8br4",
        type: "youtube",
        width: 640,
        height: 360
    }
  },

  'cloth-simulation' : {
    title: 'Cloth Simulation',
    thumbnail: 'images/projects/cloth-simulation/thumbnail.gif',
    shortDesc: 'Physically-based Animation',
    date: 'April 2013',
    desc: [
      "<p class='project-text'>As part of my coursework in Physically-based Animation (<a href='http://www.seas.upenn.edu/~cis563/' target='_blank'>CIS 563</a>) at the University of Pennsylvania, I created an OpenGL cloth simulation using position-based dynamics. The simulation features collision detection and response for primitive shapes, and movement constraints.</p>"
    ],
    recognition: [],
    features: 'Position-based Dynamics, Collision Detection and Response, Point Constrains, OpenGL, C++',
    moreInfo: [
      { title: 'Demonstration with Fixed Point Constraints',
        url: 'http://vimeo.com/61990719'}
    ],
    link: '#projects/cloth-simulation',
    images: [],
    bottomImageGallery: true,
    video: {
        url: "http://player.vimeo.com/video/61990722",
        type: "vimeo",
        width: 500,
        height: 375
    }
  },

  'bio-code' : {
    title: 'Bio-Code',
    thumbnail: 'images/projects/bio-code/thumbnail.gif',
    shortDesc: 'Bacteria-based QR Codes',
    date: 'April 2013',
    desc: [
      "<p class='project-text'>Coming soon!</p>"
    ],
    recognition: [],
    features: 'QR Codes, Biosynthesis, Biological Design, Recombinant DNA, Green Fluorescent Protein (GFP), <em>Escherichia coli</em>',
    moreInfo: [],
    link: '#projects/bio-code',
    images: [
      'images/projects/bio-code/1.png',
      'images/projects/bio-code/2.png',
    ],
    bottomImageGallery: false
  },

  'cmusic' : {
    title: 'Cmusic',
    thumbnail: 'images/projects/cmusic/thumbnail.gif',
    shortDesc: 'A Musical Visualization',
    date: 'April 2012',
    desc: [
     "<p class='project-text'>As part of Information Design (<a href='http://datadesign.wordpress.com/' target='_blank'>FNAR 337</a>) at the University of Pennsylvania, I designed <a href='http://cmusic.mikeriv.com' target='_blank'>Cmusic</a> to visualize the dynamics of a musical piece while revealing relationships among individual notes. Changes in the speed, size, and color of circles attempt to explain the intricacies of <a href='http://www.youtube.com/watch?v=PXMVkQ70I88' target='_blank'>J.S. Bach's Prelude in C Major</a>, while still maintaining the piece's underlying musical structure.</p>"
    ],
    recognition: [],
    features: 'Javascript (Sound Manager 2, JQuery), HTML5 (Canvas)',
    moreInfo: [
      { title: "Cmusic Site",
        url: "http://cmusic.mikeriv.com"
      },
      { title: "J.S. Bach - Prelude in C Major, BWV 846 (Sheet Music)",
        url: "downloads/cmusic/J.S.Bach_%20Prelude_In_C_Major.pdf"
      },
      { title: "Information Design Course Blog",
        url:  "http://datadesign.wordpress.com/"
      }
    ],
    link: '#projects/cmusic',
    images: [
      'images/projects/cmusic/1.png',
      'images/projects/cmusic/2.png',
      'images/projects/cmusic/3.png',
      'images/projects/cmusic/4.png'
    ],
    bottomImageGallery: false
  },

  'math-me' : {
    title: 'Math Me',
    thumbnail: 'images/projects/math-me/thumbnail.gif',
    shortDesc: 'Tutoring Tool Prototype',
    date: 'November 2011',
    desc: [
      "<p class='project-text'><a href='http://mathme.mikeriv.com' target='_blank'>Mathematics Manipulation Engine (Math Me)</a> is a math proof and tutoring tool prototype. The interface allows users to create, save, and share basic math work online. The idea for Math Me sprang from a desire to abstract proof-writing in LaTex while I was studying theoretical computer science.</p>"
    ],
    recognition: [],
    features: 'PHP, Javascript (JQuery)',
    moreInfo: [
      { title: "Math Me Site",
        url: "http://mathme.mikeriv.com"
      }
    ],
    link: '#projects/math-me',
    gridCellType: 'item',
    images: [
      'images/projects/math-me/0.png',
      'images/projects/math-me/1.png',
      'images/projects/math-me/2.png',
      'images/projects/math-me/3.png'
    ],
    bottomImageGallery: false
  },

  'dine-n-dash' : {
    title: 'Dine \'N\' Dash',
    thumbnail: 'images/projects/dine-n-dash/thumbnail.gif',
    shortDesc: 'Android Application',
    date: 'September 2011',
    desc: [
      "<p class='project-text'><a href='https://play.google.com/store/apps/details?id=com.penn.dineNDash&hl=en' target='_blank'> Dine \'N\' Dash</a> provides students at the University of Pennsylvania with a searchable dining hall menu system. It was a team effort during the 48-hour PennApps Fall 2011 Hackathon. I contributed the Android application. <a href='http://nmcgill.com' target='_blank'>Nicholas McGill</a> and <a href='https://www.linkedin.com/in/daltonbanks' target='_blank'>Dalton Banks</a> handled scraping the Penn Dining website for menu items. <a href='http://nataliegravier.com'>Natalie Gravier</a> designed the logo.</p>"
     // "<div class='project-text center-text'><img class='project-img' src='images/projects/dine-n-dash/5.png'></div>",

    ],
    recognition: [
      'Won the "Building Your Own Backend Sucks" Award at PennApps Fall 2011',
      'Chosen as one of the \"Top Ten Coolest Apps\" of 40 applications at PennApps Fall 2011',
      '<a href="http://www.thedp.com/index.php/article/2011/09/students_compete_to_design_and_build_tech_apps" target="_blank" title="Students compete to design and build apps" alt="Students compete to design and build apps">Students compete to design and build apps</a> - <em>The Daily Pennsylvanian</em>',
      '<a href="http://www.thedp.com/article/2011/09/alexey_komissarouk_fyi_a_student_guide_to_tech_at_penn" target="_blank" title="A student guide to tech at Penn" alt="A student guide to tech at Penn">A student guide to tech at Penn</a> - <em>The Daily Pennsylvanian</em>'
    ],
    features: 'Java (Android), PHP, Python, Javascript (JQuery Mobile)',
    moreInfo: [
      { title: "Android Application (Google Play)",
        url: "https://play.google.com/store/apps/details?id=com.penn.dineNDash&hl=en"
      },
      { title: "PennApps Hackathon",
        url: "http://pennapps.com"
      }
    ],
    link: '#projects/dine-n-dash',
    images: [
      //'images/projects/dine-n-dash/1-n.png',
      ],
    bottomImageGallery: true,
    video: {
        url: "http://www.youtube.com/embed/0nbXaFNjR9w",
        type: "youtube",
        width: 640,
        height: 360
    }
  },

  'house' : {
    title: 'House',
    thumbnail: 'images/projects/house/thumbnail.gif',
    shortDesc: 'Vector Illustration',
    date: 'March 2010',
    desc: [
       "<p class='project-text'>As part of Digital Design Foundation (FNAR 264) at the Unversity of Pennsylvania, I created this image of Dr. Gregory House from the medical drama <a href=\"http://www.usanetwork.com/house\" target='_blank'>House</a>. This image was drawn using the solely the Pen Tool, a mouse, and zooming. Color and shading were accomplished by altering the contrast of the grayscale grid background as each aspect of House's face was drawn.</p>",
       "<div class='project-text center-text'><img class='project-img' src='images/projects/house/house.png'></div>"
    ],
    recognition: [],
    features: 'Adobe Illustrator, Pen Tool',
    moreInfo: [],
    link: '#projects/house',
    images: [],
    bottomImageGallery: true
  },

  'tumble-tag' : {
    title: 'Tumble Tag',
    thumbnail: 'images/projects/tumble-tag/thumbnail.gif',
    shortDesc: 'Tag Notifications for Tumblr',
    date: 'January 2012',
    desc: [
      "<p class='project-text'>Tumble Tag is a tagging notification system for <a href='https://www.tumblr.com/'>Tumblr</a> that was built during the PennApps Spring 2012 Hackathon. When users are tagged by name on a Tumblr post, the application lets them know. In order to prevent spam, notifications are only sent from blogs that a user has opted to follow.</p>",
      "<p class='project-text'>The initial implementation was a collaborative effort between <a href='http://nmcgill.com' target='_blank'>Nicholas McGill</a>, <a href='https://www.linkedin.com/in/daltonbanks' target='_blank'>Dalton Banks</a>, <a href='http://nataliegravier.com' target='_blank'>Natalie Gravier</a>, and myself. In August 2012, I rebuilt the system using Node.js and added a sign-up confirmation system and email notifications.</p>"
    ],
    recognition: [
      "Won a $1000 award at the PennApps Spring 2012 hackathon for best use of the Tumblr API"
    ],
    features: ' Javascript (Node, JQuery), Python, Tumblr API',
    moreInfo: [
      { title: "GitHub Repository",
        url: "https://github.com/mriveralee/tumble-tag"
      },
      { title: 'Tumblr',
        url: "https://www.tumblr.com/"
      },
      { title: "PennApps Hackathon",
        url: "http://pennapps.com"
      }
    ],
    link: '#projects/tumble-tag',
    images: [
      'images/projects/tumble-tag/3.png'
    ],
    bottomImageGallery: false
  }
};


$(function() {
    /*==========================================================
     * Router for changing the URL
     */
  MIKERIV.Classes.Router = Backbone.Router.extend({
    routes : {

      "": "showProjectsGridPage",
      "projects" : 'showProjectsGridPage',
      "projects/:projectName" : "showProjectPage",
      "about" : "showAboutPage",
      "blog" : "showBlogPage",
      "media" : "showMediaPage",
      '*path':  'defaultRoute'
    },

    defaultRoute: function(path) {
        this.showProjectsGridPage();
    },

    initialize: function() {
      // Create page swap animation listeners
      // this.initPageSwitchListeners();
      // Starts the browser history tracking
      // If you'd like to use pushState, but have 
      // browsers that don't support it natively use 
      // full page refreshes instead, you can add 
      // {hashChange: false} to the options.
      Backbone.history.start({trigger: true});
    },

    /**************************************
     ** Displays the project grid page
     **/
    showProjectsGridPage: function() {
      MIKERIV.PageView.switchPage(MIKERIV.PageTypes.Projects);
    },


    /**************************************
     ** Displays a project from the name
     **/
    showProjectPage: function(projectName) {
      // console.log(projectName);
      if (!projectName || projectName === "") {
          // Display all projects in a grid
          // console.log("Showing Grid");
          return;
        }
      // Display individual project
      // console.log("Showing " + projectName);
      MIKERIV.PageView.switchPage(MIKERIV.PageTypes.Project, projectName);
    },

    /**
     ** Displays the About PAge
     **/
     showAboutPage: function() {
      // console.log("Showing About!");
      MIKERIV.PageView.switchPage(MIKERIV.PageTypes.About);
    },

    /**
     ** Displays the Blog Page
     **/
    showBlogPage : function() {
      // console.log("Showing Blog");
      MIKERIV.PageView.switchPage(MIKERIV.PageTypes.Blog);
    },

    /**
     ** Displays the Media Page
     **/
    showMediaPage : function() {
      // console.log("Showing Media");
      MIKERIV.PageView.switchPage(MIKERIV.PageTypes.Media);
    }
  });

   /** ========================================================
    ** Page View
   **/
  MIKERIV.Classes.PageView = Backbone.View.extend({
    
    // this.el tag, class, parent
    el: MIKERIV.PageContentDivId,
    tagName: 'div',
    className: 'sixteen columns page',
    parentEl: $('#main-grid-contatiner'),

    hasInitializedGrid: false,
    hasSetFirstPage: false,
    currentPageContent: null,

    // Item Templaters
    gridItemTemplater: _.template(MIKERIV.Templates.ProjectGridItem),
    projectPageTemplater: _.template(MIKERIV.Templates.ProjectPage),

    // Page Templaters
    gridPageTemplater: _.template(MIKERIV.Templates.WorkPage),
    aboutPageTemplater: _.template(MIKERIV.Templates.AboutPage),
    mediaPageTemplater: _.template(MIKERIV.Templates.MediaPage),
    blogPageTemplater: _.template(MIKERIV.Templates.BlogPage),
    projectImageSlidesTemplater: _.template(MIKERIV.Templates.ProjectImageSlides),

    // Video Templaters
    youtubeVideoTemplater: _.template(MIKERIV.Templates.YoutubeVideo),
    vimeoVideoTemplater: _.template(MIKERIV.Templates.VimeoVideo),
    // Images
    imageWidth: 600,
    imageHeight: 300,

    events: {
      //'hover': 'onHover',
    },

    /**
     * Initializes the view
     */
    initialize: function() {
      //this.listenTo(this.model, "change", this.render);
      this.initPageSwitchListeners();
    },

    /**
     * Renders the html of the grid project view
     */
    render: function(content) {
      // Do some rendering
    },

    /**
   ** Initializes listens on the page change element for showing/hiding content
   ** based on the current animation being played
   **/
    initPageSwitchListeners: function() {
      var that = this;
      //if (Modernizr.cssanimations) {
        var eventTrigger = (Modernizr.cssanimations) ? CSS_ANIMATION.EndEvent : CSS_ANIMATION.IE_TRIGGER;
        // ANIMATION END - Bind Display:none event to the animationend iff it is fade-out
        this.$el.bind(eventTrigger, function(e){
          // this => element that just animated
          //console.log(eventTrigger);
          var classes = this.classList;
          if (e.type == CSS_ANIMATION.IE_TRIGGER) {
            classes = this.className.split(' ');
          }
          //console.log(" CLASSES: " + classes);
          if (!classes) classes = [];

          for (var i = 0; i < classes.length; i++) {
            var animClass = classes[i];
            // When we finish the fade-out, remove the class, swap the content,
            // then trigger a fade-in
            switch(animClass) {
              case CSS_ANIMATION.PageFadeOutClass:
              case CSS_ANIMATION.PageBounceOutClass:
                // Remove fade-out
                $(this).toggleClass(animClass, false);
                
                // Replace content
                $(this).html(that.currentPageContent);
                
                if (that.currentPageType == MIKERIV.PageTypes.Project) {
                  // Add the slide show listener
                  $("#project-slideshow-"+that.currentProject).craftyslide({
                      "width": that.imageWidth,
                      "height": that.imageHeight
                    });
                // // Scroll to the top of the page
                $('body').scrollTop(0);
                $(document).scrollTop(0);
                }
                // Create Hover Listeners, if necessary
                that.initHoverListeners();
                break;
            }
          }
        });
      // } else {
      //   // Case for no CSS3 Animations
      //   this.$el.bind('attrchange csschange',function(event){
      //     alert(event.type + " event triggered!");
      //   }); // .attr('href','foobar.html').css('display','none');)

      // }

      // ANIMATION Start  - Bind Display:block event to the animatin start iff it is fade-in
      // $('.page-content-item').bind(CSS_ANIMATION.StartEvent, function(){
      //   // this => element that just animated
      //   var classes = this.classList;
      //   for (var i = 0; i < classes.length; i++) {
      //     var animClass = classes[i];
      //     switch(animClass) {
      //       case CSS_ANIMATION.PageFadeInClass:
      //         // Scroll to the top of the page when changing projects
      //         if (that.currentPageType == MIKERIV.PageTypes.Project) {
      //           console.log('scrollTop');
      //           //$(document).scrollTop(0);
      //         }
      //         break;
      //     }
      //   }
      // });
    },

    /**
     ** Generates Grid of Projects HTML, inserts them into 
     ** the grid template, then stores the content for use later
     **/
    generateProjectsGridPage: function() {
      // Create all of the Project Grid Items
      // 
      var htmlItems = "";

      // Add description container, and buttons if necessary
      var hasTopSelectionButtons = false;
      if (hasTopSelectionButtons) {
        // // Add the description container
        // htmlItems += '<div class="sixteen columns project-description">'
        // + '<div class="sixteen columns">'
        // + '<a href="#">Code</a> '
        // + '<a href="#">Sound</a> '
        // + '<a href="#">Art & Design</a> '
        // + '<br><br>'
        // + '</div>';
      }

      // Create project grid items
      for (var key in MIKERIV.ALL_PROJECTS) {
        // Construct Project Grid Item from template
        var project = MIKERIV.ALL_PROJECTS[key];
        var html = this.gridItemTemplater(project);
        htmlItems += html;
      }

      // Now render this html content into the Grid Template
      var gridHtml = this.gridPageTemplater({content: htmlItems});
      return gridHtml;
    },

    /**
     ** Adds hover listener for the current page type
     ** Called when animations finish and content is replaces
     **/
    initHoverListeners: function() {
      // Add Hover Listeners if necessary (ONLY FOR PROJECTS)
      switch(this.currentPageType) {
        case MIKERIV.PageTypes.Project:
        case MIKERIV.PageTypes.Projects:
          this.initProjectGridHoverListeners();
          break;
      }
    },


    /**
     ** Creates the listeners for project grid items
     ** MUST BE CALLED AFTER ADDING THE CONTENT TO THE PAGE DIV
     **/
     initProjectGridHoverListeners: function() {
        // Set up fading listeners for each item
        var fadeDuration = 425,
          imgMaxOpacity = 1.0,
          imgMinOpacity = 0.15,
          overlayMaxOpacity = 1.0,
          overlayMinOpacity = 0.0;
        // Create hover modal overlay
        $('.project-thumbnail').hover(
          function() {
            // Fade in overlay text  
            var overlay = $(this).find('.pt-hover-modal');
            stopAnimation(overlay);
            overlay.animate({'opacity': overlayMaxOpacity}, fadeDuration);

            // Fade out src imge
            var img = $(this).find('.pt-img');
            stopAnimation(img);
            img.animate({'opacity': imgMinOpacity}, fadeDuration); },
          function() {
            // Hide the overlay text
            var overlay = $(this).find('.pt-hover-modal'); //".pt-img" for fading image w/ 0.6, 1.0
            stopAnimation(overlay);
            overlay.animate({'opacity': overlayMinOpacity}, fadeDuration);

            // Fade in src image
            var img = $(this).find(".pt-img");
            stopAnimation(img);
            img.animate({'opacity': imgMaxOpacity}, fadeDuration);
          });
     },

    /**
     ** Generates About Page HTML, and returns it
     **/
    generateAboutPage: function() {
      var html = this.aboutPageTemplater(MIKERIV.ABOUT);
      return html;
    },

    /**
     ** Generates About Page HTML, and returns it
     **/
    generateMediaPage: function() {
      var html = this.mediaPageTemplater();
      return html;
    },

    /**
     ** Generates About Page HTML, and returns it
     **/
    generateBlogPage: function() {
      var html = this.blogPageTemplater();
      return html;
    },

    /**
     ** generates the HTML for a project page given some
     ** project name
     **/
     generateProjectPage: function(projectName) {
        var projectModel = MIKERIV.ALL_PROJECTS[projectName];

        // Generate Image Viewer   
        var imagesData = {
          'project': projectName,
          'images': projectModel.images
        };
        var imagesHtml = this.projectImageSlidesTemplater(imagesData);

        // Generate Video Video
        var videoHtml = "";
        var video = projectModel.video;
        if (video) {
          var videoType = video.type;
          var videoData = {
            'video': video
          };
          switch (videoType) {
            case 'youtube':
              videoHtml = this.youtubeVideoTemplater(videoData);
              break;
            case 'vimeo':
              videoHtml = this.vimeoVideoTemplater(videoData);
              break;
          }
        }

        // Assign content to the model for html page generation
        projectModel.imagesContent = imagesHtml;
        projectModel.videoContent = videoHtml;
        
        // Render full page
        var html = this.projectPageTemplater(projectModel);
        return html;
     },

    /**
     ** Load the Next page for viewing
     **/
    switchPage: function(nextPageType, projectName) {
      // Hide old page
      if ((this.currentPageType == nextPageType) &&
        (projectName == this.currentProject)) {
          // // Scroll to the top of the page
          $('body').scrollTop(0);
          $(document).scrollTop(0);
        return;
      }

      //  Hides the content for the old page, if we have one
      var content = this.getPageContent(nextPageType, projectName);
      // Swap page content and types
      if (content) {
        var prevPageType = this.currentPageType;
        this.currentPageType = nextPageType;
        this.currentPageContent = content;

        // Trigger a page swap animation to replace the currentPageContent
        this.triggerPageSwitchAnimation(prevPageType);
        
        //this.$el.html(content);
      }

    },

    triggerPageSwitchAnimation: function(prevPageType) {
      //this.$el.toggleClass('fade-in-right', false);
        this.$el.toggleClass(CSS_ANIMATION.PageFadeOutClass, true);
        if (!Modernizr.cssanimations) {
          // Trigger an Animaton start
          this.$el.trigger(CSS_ANIMATION.IE_TRIGGER);
        }
    },

   /**
     ** Returns the content for a pageType,
     ** if it doesn't exist this will render it
     **/
    getPageContent: function(pageType, projectName) {
      // Check if we previously created the content
      // If we have return it
      var content;
      if (pageType == MIKERIV.PageTypes.Projects) {
        content = MIKERIV.PageContent['project_list'][projectName];
      } else {
        content = MIKERIV.PageContent[pageType];
      }

      // Return the previously created content
      if (content) {
        return content;
      }

      // Otherwise, we need to render it

      switch(pageType) {
        case MIKERIV.PageTypes.Projects:
          content = this.generateProjectsGridPage();
          break;
        case MIKERIV.PageTypes.Project:
          content = this.generateProjectPage(projectName);
          this.currentProject = projectName;
          
          // Append the project grid
          var gridContent = MIKERIV.PageContent[MIKERIV.PageTypes.Projects];
          gridContent = (gridContent) ? gridContent : this.generateProjectsGridPage();
          content += gridContent;
          break;
        case MIKERIV.PageTypes.About:
          content = this.generateAboutPage();
          break;
        case MIKERIV.PageTypes.Media:
          content = this.generateMediaPage();
          break;
        case MIKERIV.PageTypes.Blog:
          content = this.generateBlogPage();
          break;
      }
      // Store for later use
      if (!projectName) {
        MIKERIV.PageContent[pageType] = content;
      } else {
        MIKERIV.PageContent['project_list'][projectName] = content;
      }

      // Return the content
      return content;
    }


  });


    /**
     * Returns the div id associated with a pageType
     */
    function getPageId(pageType) {
      var pageId = '';
      switch (pageType) {
        case 'project':
          pageId = '#project-page-container';
          break;
        case 'about':
          pageId = '#about-page-container';
          break;
        case 'blog':
          pageId = '#blog-page-container';
          break;
        case 'media':
          pageId = '#media-page-container';
          break;
        case 'projects':
          pageId = '#project-grid-container';
          break;
      }
      return pageId;
    }

   


    /**
    * Stops animates of the current object
    */
    function stopAnimation(div) {
      div.stop({'clearQueue': true});
    }

    /**
     ** Sets up key listeners for the project page to trigger
     ** switching project pages
     **/
     function initProjectKeyListeners() {
        // First create global ordered list
        for (var key in MIKERIV.ALL_PROJECTS) {
          MIKERIV.Global.orderedProjects.push(key);
        }

        // TODO: Find fix for command button bug that causes a page to go back
        // $(document).keydown(function(e) {
        //   var key = e.keyCode;
        //   if (key == MIKERIV.KeyCodes.CMD_LEFT) {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     console.log("meta");
        //     return false;
        //   }
        // });

        // Now create key listeners to trigger a page change
        $(document).keydown(function(e){
          // Only want to have listeners be active on the project pages
          var key = e.keyCode;
          if (key !== MIKERIV.KeyCodes.LEFT_ARROW && key != MIKERIV.KeyCodes.RIGHT_ARROW) {
            return;
          }
          var currentPageType = MIKERIV.PageView.currentPageType;
          if (currentPageType !== MIKERIV.PageTypes.Projects &&
            currentPageType !== MIKERIV.PageTypes.Project) {
            return;
          }
          // Get index of the current page
          var projectIndex = getOrderIndexForProject(MIKERIV.PageView.currentProject);
          var nextProjectIndex = 0;
          
          // Now compute index for next page
          if (projectIndex >= 0 ) {
            switch(key) {
              case MIKERIV.KeyCodes.LEFT_ARROW:
                // Decrease project index
                nextProjectIndex = projectIndex - 1;
                // Cycle to max project if necessary
                nextProjectIndex = (nextProjectIndex < 0) ? MIKERIV.Global.orderedProjects.length - 1 : nextProjectIndex;
               break;
              case MIKERIV.KeyCodes.RIGHT_ARROW:
                // Decrease project index
                nextProjectIndex = projectIndex + 1;
                // Cycle to min project if necessary
                nextProjectIndex = (nextProjectIndex >=  MIKERIV.Global.orderedProjects.length) ? 0 : nextProjectIndex;
                break;
              }
          // Grab the project at this index
          var nextProject = MIKERIV.Global.orderedProjects[nextProjectIndex];
          // Update the hash of the page
          window.location.hash = '#'+ MIKERIV.PageTypes.Projects + '/' + nextProject;
       
          }
           });
     }

     /**
      ** Get the order index of a project in the ordered list
      **/
      function getOrderIndexForProject(projectName) {
        var orderedProjects = MIKERIV.Global.orderedProjects;
        for (var i = 0; i < orderedProjects.length; i++) {
          if (orderedProjects[i] === projectName) {
            return i;
          }
        }
        return -1;
      }


    function handleOldBrowser() {

      // Dialog Box for invalid browser
      var oldBrowserContent = "<div id='old-browser-dialog' style='display: block; position: fixed; opacity: 1; z-index: 11000; left: 50%; margin-left: -330px; top: 200px;'><div class='center-text'> <h3><i class='fa fa-exclamation-triangle'></i> Woah, your internet browser is old!</h3></div> To view my site, you must use a modern browser that supports CSS 3 Animations such as <a href='https://www.google.com/intl/en/chrome/browser/#brand=CHMB&utm_campaign=en&utm_source=en-ha-na-us-sk&utm_medium=ha' target='_blank'>Google Chrome</a> or <a href='http://www.mozilla.org/en-US/firefox/new/' target='_blank'>FireFox</a>. Please upgrade your browser and try again. <br><br><div class='center-text'>While you wait, have a look at my <a href='downloads/RIVERA_MICHAEL_RESUME.pdf' target='_blank'>resume</a> and <a href='http://linkedin.com/in/mikeriv' target='_blank'>LinkedIn</a> profile!</div></div>";
      $("#page-content").html(oldBrowserContent);
      $("body").leanModal({top : 250, overlay : 0.3});
      $("body").trigger("click");
    }

   /**
   * Initializes the site
   */
  function init() {
    // Handle a bad browser
    if (!Modernizr.cssanimations) {
      handleOldBrowser();
      return;
    }
    // Normal Page
    MIKERIV.PageView = new MIKERIV.Classes.PageView();
    MIKERIV.Router = new MIKERIV.Classes.Router();
    initProjectKeyListeners();
  }
  init();




}); // Document.ready - End






