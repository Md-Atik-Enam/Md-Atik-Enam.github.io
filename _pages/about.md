---
layout: splash
permalink: /
title: "Md Atik Enam"
excerpt: "Human-centered computing researcher studying how people understand, trust, and work with AI, with a focus on autonomous mobility and accessibility."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}
{% assign published_publications = site.publications | where: "status", "published" | sort: "sort_order" %}
{% assign portfolio_items = site.portfolio | sort: "order" %}

<div class="home-page">
  <section class="home-hero" aria-label="Introduction">
    <div class="home-hero__profile">
      <img src="{{ base_path }}/images/headshot-web.jpg" alt="Md Atik Enam">
      <div class="home-affiliation">
        <strong>Ph.D. candidate in Human-Centered Computing</strong>
        <span>Expected Fall 2026, Clemson University</span>
        <span>B.S. and M.S. in Computer Science</span>
        <span>DRIVE Lab, CU-ICAR</span>
        <span>Human-AI interaction, human-autonomy teaming, and accessible mobility</span>
      </div>
    </div>

    <div class="home-hero__copy">
      <p class="home-eyebrow">Human-Centered Computing Researcher</p>
      <h1>Md Atik Enam</h1>
      <p class="home-lead">I study how people understand, trust, and work with AI. I use autonomous vehicles as my main research setting and apply the findings to accessible, evidence-based interaction design.</p>
      <p>I am a Human-Centered Computing researcher and Graduate Research Assistant in the DRIVE Lab at CU-ICAR. My dissertation, <em>Understanding Human-AI Relationships in Autonomous Vehicles</em>, examines how people understand AI roles, share decision authority, judge interaction quality, and make decisions with AI. I also study how autonomous mobility can better support people with disabilities. I use interviews, surveys, experiments, field studies, scale development, and interface evaluation. These methods and research questions apply to HCI, human factors, UX research, and AI products beyond transportation.</p>
      <a class="home-email-link" href="mailto:menam@clemson.edu">menam@clemson.edu</a>
      <div class="home-actions" aria-label="Primary links">
        <a class="home-button home-button--primary" href="#publications">Publications</a>
        <a class="home-button" href="{{ base_path }}/portfolio/">Portfolio</a>
      </div>
      <div class="home-role-note" aria-label="Open to research roles">
        <strong>Open to research roles</strong>
        <span>Seeking faculty, postdoctoral, UX research, and industry research opportunities where human-centered research can improve useful, trustworthy, and accessible AI products and services.</span>
      </div>
    </div>

    {% if site.news.size > 0 %}
      <aside class="home-news-rail" aria-label="Latest news">
        <div class="home-news-rail__heading">
          <p class="home-eyebrow">News</p>
          <h2>Latest</h2>
        </div>
        <ul>
          {% for news in site.news reversed limit: 5 %}
            <li>
              <strong>{{ news.title }}</strong>
              <span>{{ news.date | date: "%b %d, %Y" }}</span>
              <p>{{ news.excerpt | markdownify | strip_html | truncate: 120 }}</p>
            </li>
          {% endfor %}
        </ul>
      </aside>
    {% endif %}
  </section>

  <section id="research" class="home-section">
    <div class="section-heading">
      <p class="home-eyebrow">Research Vision</p>
      <h2>Human-AI interaction in autonomous mobility.</h2>
      <p>My main research area is human-AI interaction in autonomous vehicles. I study how people understand an AI system's role, respond to its authority, judge the quality of an interaction, and make decisions with it. Autonomous mobility gives me a real-world setting for studying human-autonomy teaming and interface design. A related part of my work focuses on accessibility, including how autonomous vehicles and ridesharing services can support blind and low-vision travelers and other people with disabilities.</p>
    </div>

    <div class="research-grid">
      <article>
        <h3>Human-AI Relationships</h3>
        <p>Understanding how people recognize AI roles, form expectations, calibrate trust, and evaluate interaction quality in autonomous vehicles.</p>
      </article>
      <article>
        <h3>Authority and Teaming</h3>
        <p>Studying how humans and AI negotiate decision authority, communicate intent, and coordinate safely across changing situations.</p>
      </article>
      <article>
        <h3>Accessible Autonomous Mobility</h3>
        <p>Identifying and addressing interaction barriers so autonomous vehicles and mobility services work for people with diverse abilities.</p>
      </article>
    </div>
  </section>

  <section id="publications" class="home-section">
    <div class="section-heading">
      <div>
        <p class="home-eyebrow">Published Work</p>
        <h2>Peer-reviewed publications</h2>
      </div>
    </div>

    <div class="publication-grid">
      {% for post in published_publications %}
        {% include publication-card.html %}
      {% endfor %}
    </div>
  </section>

  <section id="portfolio" class="home-section">
    <div class="section-heading section-heading--split">
      <div>
        <p class="home-eyebrow">Research to Practice</p>
        <h2>Selected project case studies</h2>
      </div>
      <p>These case studies show how I move from ambiguous research questions to study design, analysis, and recommendations for real interfaces.</p>
    </div>

    <div class="home-project-grid">
      {% for post in portfolio_items limit: 3 %}
        {% assign card = post.card %}
        {% assign thumbnail = card.thumbnail | default: post.header.teaser %}
        <article class="home-project">
          <a class="home-project__image" href="{{ post.url | relative_url }}" aria-label="View {{ post.title | escape }}">
            {% if thumbnail %}
              <img src="{% if thumbnail contains '://' %}{{ thumbnail }}{% else %}{{ thumbnail | prepend: '/images/' | relative_url }}{% endif %}" alt="{{ card.thumbnail_alt | default: post.title | escape }}">
            {% endif %}
          </a>
          <div>
            <p>{{ card.label | escape }}</p>
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <span>{{ card.methods | escape }}</span>
          </div>
        </article>
      {% endfor %}
    </div>

    <div class="home-stats home-stats--case-studies" aria-label="Research evidence">
      <div>
        <strong>20</strong>
        <span>older-adult contextual interviews, ages 59-93</span>
      </div>
      <div>
        <strong>41</strong>
        <span>participants in a real-road AV simulation study</span>
      </div>
      <div>
        <strong>3</strong>
        <span>U.S. locations for autonomous-mobility ride sessions</span>
      </div>
      <div>
        <strong>498</strong>
        <span>valid survey responses after a 10-person pilot</span>
      </div>
    </div>
  </section>

  <section id="teaching" class="home-section">
    <div class="section-heading section-heading--split">
      <div>
        <p class="home-eyebrow">Teaching</p>
        <h2>Courses and guest lectures</h2>
      </div>
      <p>I have taught, assisted with, or contributed course materials for courses across HCI, software engineering, algorithms, systems, and security.</p>
    </div>

    <div class="teaching-grid">
      <article>
        <h3>Courses as Instructor or Teaching Assistant</h3>
        <ul>
          <li>CPSC 2121: Algorithms and Data Structures Lab</li>
          <li>CPSC 4140/6140: Introduction to Human-Computer Interaction</li>
          <li>CPSC 3720: Introduction to Software Engineering</li>
          <li>CPSC 3500: Foundations of Computer Science</li>
          <li>CPSC 2310: Introduction to Computer Organization</li>
          <li>CPSC 4180/6180: Usable Security and Privacy</li>
          <li>CPSC 4200: Computer Security Principles</li>
          <li>CPSC 3220: Introduction to Operating Systems</li>
        </ul>
      </article>
      <article>
        <h3>Guest Lectures</h3>
        <ul>
          <li>CPSC 3720: Software design patterns</li>
          <li>CPSC 3720: Client-server architecture</li>
          <li>CPSC 3720: Semester project setup</li>
          <li>CPSC 4180/6180: Autonomous vehicle usable security and privacy</li>
        </ul>
      </article>
      <article>
        <h3>Curriculum Development</h3>
        <ul>
          <li>CPSC 4720/6720: Software Development Methodologies</li>
          <li>Updated modules on ethics, API learning, and software requirements engineering in the context of emerging AI tools.</li>
        </ul>
      </article>
    </div>
  </section>

  <section id="service" class="home-section">
    <div class="section-heading">
      <p class="home-eyebrow">Service</p>
      <h2>Reviewing and program service</h2>
    </div>

    <div class="service-panel">
      <div>
        <h3>Program Committee</h3>
        <ul>
          <li>ACM Technical Symposium on Computer Science Education (SIGCSE TS), 2026</li>
        </ul>
      </div>
      <div>
        <h3>Review Venues</h3>
        <ul class="service-list">
          <li>ACM CHI Conference on Human Factors in Computing Systems</li>
          <li>ACM Conference on Automotive User Interfaces and Interactive Vehicular Applications</li>
          <li>ACM Conversational User Interfaces</li>
          <li>ACM Symposium on Spatial User Interaction</li>
          <li>ACM Technical Symposium on Computer Science Education</li>
          <li>ACM Symposium on Virtual Reality Software and Technology</li>
          <li>ACM Conference on Computer-Supported Cooperative Work and Social Computing</li>
          <li>iConference</li>
          <li>Computers in Human Behavior Reports</li>
          <li>International Conference on Tangible, Embedded, and Embodied Interaction</li>
        </ul>
      </div>
    </div>
  </section>

</div>
