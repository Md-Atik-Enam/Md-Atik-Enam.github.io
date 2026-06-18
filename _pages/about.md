---
layout: splash
permalink: /
title: "Md Atik Enam"
excerpt: "Human-centered computing researcher studying accessible mobility, human-AI interaction, and inclusive technology design."
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
        <span>Accessible mobility and human-AI teaming with embodied systems</span>
      </div>
    </div>

    <div class="home-hero__copy">
      <p class="home-eyebrow">Human-Centered Computing Researcher</p>
      <h1>Md Atik Enam</h1>
      <p class="home-lead">I design and study accessible, trustworthy human-AI teaming with embodied systems for mobility, aging, and learning.</p>
      <p>I am a Human-Centered Computing researcher and Graduate Research Assistant in the DRIVE Lab at CU-ICAR. My work connects human factors, automotive systems, artificial intelligence, accessibility, and HCI methods to study how emerging technologies can better serve people with diverse needs. Much of this work has been grounded in in-vehicle interfaces, intelligent transportation systems, and autonomous vehicle contexts, where I have studied how people interact with increasingly capable AI-driven technologies in real-world settings. These experiences inform my broader research agenda on designing AI systems that are accessible, trustworthy, and effective across domains.</p>
      <a class="home-email-link" href="mailto:menam@clemson.edu">menam@clemson.edu</a>
      <div class="home-actions" aria-label="Primary links">
        <a class="home-button home-button--primary" href="#publications">Publications</a>
        <a class="home-button" href="{{ base_path }}/portfolio/">Portfolio</a>
      </div>
      <div class="home-role-note" aria-label="Open to research roles">
        <strong>Open to research roles</strong>
        <span>Seeking faculty, postdoctoral, and industry research opportunities where rigorous HCI research can shape accessible, evidence-driven AI systems.</span>
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
      <h2>Adaptive human-AI teaming with embodied systems.</h2>
      <p>My research vision is to help embodied AI systems understand human variability, adapt collaboration strategies, and support shared decision-making with people in real-world contexts. Autonomous vehicles are my primary testbed because they make the stakes visible: people and AI must negotiate authority, exchange timely information, and act safely in dynamic environments. The broader goal is to move beyond one-size-fits-all AI toward systems that can support accessible mobility, older adults, people with disabilities, and teams operating under changing demands.</p>
    </div>

    <div class="research-grid">
      <article>
        <h3>Human Variability</h3>
        <p>Understanding how differences in ability, context, trust, workload, and expectations shape collaboration with embodied AI systems.</p>
      </article>
      <article>
        <h3>Adaptive Teaming</h3>
        <p>Designing AI teammates that can shift communication, authority, and interaction style based on user needs and situational demands.</p>
      </article>
      <article>
        <h3>Shared Decision Spaces</h3>
        <p>Creating interfaces where humans and embodied AI can construct, explore, and negotiate decisions instead of only receiving recommendations.</p>
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
