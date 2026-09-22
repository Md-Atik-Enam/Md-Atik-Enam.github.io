---
title: "Making AI Roles Clear to Users"
excerpt: "Experiment and measurement audit examining whether people recognize an AI system as an observer, collaborator, or leader."
collection: portfolio
permalink: /portfolio/embodied-ai-av-teaming/
order: 2
author: atik
header:
  teaser: portfolio/dissertation-role-legibility.svg
card:
  label: "AI Role and Interaction Study"
  methods: "3 x 3 experiment, comparative ratings, profile analysis"
  sample: "498 participants across nine interface conditions"
  evidence: "Direct role contrasts, sensitivity analysis, held-out prediction"
  impact: "Created a practical way to test whether an intended AI role is clear to users."
  stat: "498"
  stat_label: "participants evaluating observer, collaborator, and leader roles"
  thumbnail_alt: "Diagram showing the path from designed AI role to interface behavior and user recognition."
  tags:
    - Human-AI interaction
    - Role clarity
    - Experiment design
    - User differences
---

<div class="case-study">
  <section class="case-hero">
    <div class="case-hero__copy">
      <p class="case-eyebrow">AI Roles / User Understanding / Experiment Design</p>
      <p class="case-lead">I studied whether people could recognize an AI system's intended role as observer, collaborator, or leader, and why different users interpreted the same interface in different ways.</p>
      <div class="case-meta-grid" aria-label="Project snapshot">
        <div><strong>Role</strong><span>Lead researcher</span></div>
        <div><strong>Method</strong><span>3 x 3 experiment and measurement audit</span></div>
        <div><strong>Participants</strong><span>498 valid responses</span></div>
        <div><strong>Tools</strong><span>Qualtrics, Prolific, R, TypeScript</span></div>
      </div>
    </div>
    <img class="case-hero__visual" src="/images/portfolio/dissertation-role-legibility.svg" alt="Diagram showing role assignment, interface behavior, and user recognition.">
  </section>

  <section class="case-section case-section--tight">
    <h2>Problem</h2>
    <p>Designers often describe AI as an assistant, collaborator, or leader. A label alone does not establish that role. The system's actions, decision rights, and communication must support the same relationship, and users must be able to recognize it.</p>
    <p>The project separated three questions: what role the designer assigned, what role the interface behavior communicated, and what role participants recognized.</p>
  </section>

  <section class="case-section">
    <h2>Study Design</h2>
    <div class="case-timeline" aria-label="Role-legibility study process">
      <div><strong>1. Assign roles</strong><span>Created observer, collaborator, and leader conditions.</span></div>
      <div><strong>2. Vary communication</strong><span>Crossed the roles with suggestive, facilitative, and directive wording.</span></div>
      <div><strong>3. Compare recognition</strong><span>Asked participants to rate all three possible roles.</span></div>
      <div><strong>4. Examine differences</strong><span>Used profile and continuous-score analyses to understand variation between users.</span></div>
    </div>
  </section>

  <section class="case-section">
    <h2>What Role Legibility Requires</h2>
    <div class="case-method-grid">
      <div>
        <h3>Clear actions</h3>
        <p>The AI must act in a way that matches the role being claimed.</p>
      </div>
      <div>
        <h3>Matching decision rights</h3>
        <p>The interface must make clear who can decide, act, approve, or override.</p>
      </div>
      <div>
        <h3>Comparative recognition</h3>
        <p>Users should rate the intended role above realistic alternatives.</p>
      </div>
      <div>
        <h3>Recourse</h3>
        <p>Users need a way to respond when the AI's actions do not match their expectations.</p>
      </div>
    </div>
  </section>

  <section class="case-section">
    <h2>Evidence</h2>
    <div class="case-evidence-grid">
      <div class="case-stat"><strong>9</strong><span>messages across role and communication conditions.</span></div>
      <div class="case-stat"><strong>498</strong><span>valid participant responses.</span></div>
      <div class="case-stat"><strong>3</strong><span>roles rated for every message.</span></div>
      <div class="case-stat"><strong>1</strong><span>message clearly recognized as its assigned role after correction.</span></div>
    </div>
    <p>The results showed that differences in user ratings do not automatically mean the intended role was established. A successful role claim needs direct evidence that users recognized the intended role over the alternatives.</p>
  </section>

  <section class="case-section">
    <h2>Key Insights</h2>
    <div class="case-insight-grid">
      <article>
        <span class="case-tag">Role clarity</span>
        <h3>Role labels were not enough.</h3>
        <p>Some messages contained actions or decision rights that did not match the assigned role.</p>
      </article>
      <article>
        <span class="case-tag case-tag--blue">Recognition</span>
        <h3>Comparative ratings gave stronger evidence.</h3>
        <p>Testing the intended role against alternatives was more useful than asking about one role alone.</p>
      </article>
      <article>
        <span class="case-tag case-tag--amber">User differences</span>
        <h3>People interpreted the same interface differently.</h3>
        <p>Perception profiles helped describe variation, but they did not prove that fixed user types existed.</p>
      </article>
      <article>
        <span class="case-tag case-tag--rose">Measurement</span>
        <h3>Design claims and user evidence must stay separate.</h3>
        <p>An assigned condition, a perceived difference, and successful role recognition are different findings.</p>
      </article>
    </div>
  </section>

  <section class="case-section">
    <h2>Design Recommendations</h2>
    <div class="case-recommendations">
      <div>
        <h3>Show the role through behavior</h3>
        <p>Use actions, timing, permissions, and control options that support the intended role.</p>
      </div>
      <div>
        <h3>Test realistic alternatives</h3>
        <p>Ask whether users recognize the intended role more strongly than other plausible roles.</p>
      </div>
      <div>
        <h3>Check role and authority together</h3>
        <p>Make sure communication style and decision rights tell the same story.</p>
      </div>
      <div>
        <h3>Provide recovery options</h3>
        <p>Let users question, correct, or override the AI when its role becomes unclear.</p>
      </div>
    </div>
  </section>

  <section class="case-section">
    <h2>Broader Product Relevance</h2>
    <p>Although the experiment used an autonomous-vehicle setting, the same questions apply to AI copilots, assistants, recommendation tools, and decision-support systems. Product teams should test whether users understand what the AI is responsible for and what remains under human control.</p>
  </section>

  <p class="dissertation-note">Dissertation Study 2 of 3. Part of <em>Understanding Human-AI Relationships in Autonomous Vehicles</em>.</p>
</div>
