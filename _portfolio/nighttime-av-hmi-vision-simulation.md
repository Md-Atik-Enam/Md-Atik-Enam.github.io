---
title: "Can Passengers See the Stop? Nighttime AV HMI Simulation"
excerpt: "Python geometry and glare-sensitivity analysis of how an autonomous vehicle alert may reach front and rear passengers."
collection: portfolio
permalink: /portfolio/nighttime-av-hmi-vision-simulation/
order: 6
author: atik
header:
  teaser: portfolio/av-hud-vision-thumb.svg
card:
  label: "Vision-Informed AV Safety"
  methods: "Python geometry model, HUD-distance sweep, luminance sensitivity analysis"
  sample: "No participants; exploratory simulation only"
  evidence: "Four seat eye points, seven HUD distances, five veiling-luminance inputs"
  impact: "Identified rear-row alert reach and night-glare questions for a human study."
  stat: "4"
  stat_label: "illustrative passenger eye points modeled"
  thumbnail_alt: "Top view of an autonomous vehicle cabin with front and rear passenger eye points and a highlighted driver HUD zone."
  tags:
    - Vision and perception
    - Automotive HMI
    - Night visibility
    - Human factors
---

<div class="case-study">
  <section class="case-hero">
    <div class="case-hero__copy">
      <p class="case-eyebrow">Vision / Night Visibility / Autonomous Vehicle Safety</p>
      <p class="case-lead">I used an exploratory Python model to examine where a safety-critical stop alert may be visible across an autonomous vehicle cabin, and how an assumed night-time glare veil changes display contrast.</p>
      <div class="case-meta-grid" aria-label="Project snapshot">
        <div><strong>Role</strong><span>Exploratory simulation and interface analysis</span></div>
        <div><strong>Method</strong><span>Seat geometry, HUD distance sweep, contrast sensitivity</span></div>
        <div><strong>Participants</strong><span>None; hypothetical inputs only</span></div>
        <div><strong>Domain</strong><span>Autonomous-vehicle passenger HMI</span></div>
      </div>
    </div>
    <img class="case-hero__visual" src="/images/portfolio/av-hud-cabin-top-view.svg" alt="Dimensioned top view of an illustrative vehicle cabin showing front and rear passenger eye points, center HMI, HUD zone, and modeled distances.">
  </section>

  <section class="case-section case-section--tight">
    <h2>Project Objective</h2>
    <p>A visual cue on a driver-facing head-up display may not reach every passenger. The front dashboard is farther from the rear row, and a HUD has an eye box designed around a driver position. Night conditions add another question: display output must remain visible while glare and window reflections can reduce perceived contrast.</p>
    <p>I used the existing AURA route-planning study prototype as the interface reference and reframed it around one safety-critical event: an autonomous vehicle detects an obstruction and begins an emergency stop. The analysis asks how the alert could reach the front and rear rows without asking a person to delay the vehicle's automatic response.</p>
  </section>

  <section class="case-section">
    <h2>What This Case Study Is</h2>
    <div class="case-method-grid">
      <div>
        <h3>Exploratory modeling</h3>
        <p>Python calculates sight geometry, apparent display size, and contrast changes under defined assumptions.</p>
      </div>
      <div>
        <h3>Not a human vision experiment</h3>
        <p>No participants, eye tracking, reaction times, readability scores, or hazard-detection data were collected.</p>
      </div>
      <div>
        <h3>Not a vehicle measurement</h3>
        <p>The cabin dimensions and screen luminances are illustrative inputs, not measured specifications.</p>
      </div>
      <div>
        <h3>Purpose</h3>
        <p>Use the model to identify design questions and plan a cabin-mock-up or simulator study.</p>
      </div>
    </div>
  </section>

  <section class="case-section">
    <h2>Scenario and Analysis</h2>
    <div class="case-timeline" aria-label="Exploratory model workflow">
      <div><strong>1. Define the incident</strong><span>An AV detects an obstruction at 50 km/h and commits to an emergency stop. An alert onset at 0.25 seconds is a scenario input, not a measured response or standard.</span></div>
      <div><strong>2. Map passenger positions</strong><span>Model front- and rear-row eye points in an illustrative cabin, with a shared center screen and a driver HUD zone.</span></div>
      <div><strong>3. Sweep virtual distance</strong><span>Calculate equivalent glyph size from 1.5 to 15 m while holding apparent angular size at 20 arcmin.</span></div>
      <div><strong>4. Vary glare veil</strong><span>Apply hypothetical additive veiling luminance to two effective text/background luminance pairs and calculate contrast ratios.</span></div>
    </div>
  </section>

  <section class="case-section">
    <h2>Dimensioned Cabin Model</h2>
    <p>The top view shows the model coordinates. The eye-row spacing is 1.55 m; the front seat eye points are 0.34 m to either side of the centerline. The center HMI is modeled 0.72 m ahead of the front-row eye line. With display and eye height included, the calculated eye-to-screen distance is 0.83 m for the front row and 2.31 m for the rear row.</p>
    <div class="case-figure-stack">
      <figure>
        <img src="/images/portfolio/av-hud-cabin-top-view.svg" alt="Top-down cabin drawing with the 1.55 metre front-to-rear eye-row spacing, 0.68 metre lateral eye-point separation, and front HMI location dimensioned.">
        <figcaption>Dimensioned top view. These are model assumptions, not measurements from a production vehicle. Dashed sight lines do not account for seat or occupant occlusion.</figcaption>
      </figure>
      <figure>
        <img src="/images/portfolio/av-hud-alert-coverage-top.svg" alt="Top-down vehicle view showing a driver HUD cue, a front HMI cue, and a proposed separate rear passenger alert channel.">
        <figcaption>Proposed alert routing. A driver HUD can support the driver position, while front and rear passengers need display and/or audio channels designed for their seats.</figcaption>
      </figure>
    </div>
  </section>

  <section class="case-section">
    <h2>Geometric Signal</h2>
    <div class="case-metric-grid">
      <div><strong>15.2° at the front</strong><span>Modeled angular width of the 22 cm center display from either front seat.</span></div>
      <div><strong>5.5° at the rear</strong><span>Modeled angular width of the same display from either rear seat, before any visibility obstruction is considered.</span></div>
      <div><strong>16.7 to 6.0 arcmin</strong><span>Apparent angular height of a hypothetical 4 mm character, front to rear.</span></div>
      <div><strong>1.5–15 m HUD sweep</strong><span>Equivalent glyph plane height changes with distance when angular size is fixed at 20 arcmin.</span></div>
    </div>
    <p>The rear screen is smaller in the visual field because the modeled passengers are farther away. This is not a readability result: the model does not define a legibility threshold, and it does not check whether a seat, passenger, or cabin part blocks the display. HUD virtual distance also cannot be used alone to judge legibility. If the HUD holds the same angular glyph size, that angular size stays constant by design.</p>
  </section>

  <section class="case-section">
    <h2>Night and High-Beam Sensitivity</h2>
    <p>The contrast model adds a uniform in-eye veil to the assumed text and background luminance. For the strong sensitivity input of 2 cd/m², the example HUD ratio falls from 300:1 to 15.2:1; the center-HMI example falls from 80:1 to 27.3:1. At 0.5 cd/m², the modeled decreases are 83% for the HUD example and 33% for the center HMI.</p>
    <div class="case-figure-stack">
      <figure>
        <img src="/images/portfolio/av-hud-night-contrast-chart.svg" alt="Log-scale chart showing modeled contrast ratios declining as hypothetical veiling luminance rises from zero to five candela per square metre.">
        <figcaption>Contrast sensitivity. Values are generated from assumed luminances, not photometric measurements or a visibility threshold.</figcaption>
      </figure>
    </div>
    <p>The “high-beam” cases are hypothetical veil levels. They are not derived from a real headlamp, windshield, eye position, or lighting instrument. The calculation omits visual adaptation, light spectrum, pupil size, glare angle, display reflections, aging effects, and individual vision differences. It shows how sensitive the assumed display contrast is to added stray light; it does not predict whether a passenger will see or understand the alert.</p>
  </section>

  <section class="case-section">
    <h2>Design Implications</h2>
    <div class="case-recommendations">
      <div>
        <h3>Do not treat the HUD as a cabin-wide screen</h3>
        <p>Use the driver HUD for a brief, non-interactive cue only when it supports an active driver or fallback role. Do not assume rear passengers can see it.</p>
      </div>
      <div>
        <h3>Give the rear row its own alert path</h3>
        <p>Consider a rear display, audio, or haptic cue designed for back-seat occupants. Check it from each seat and with normal head movement.</p>
      </div>
      <div>
        <h3>Keep emergency content brief</h3>
        <p>“Emergency stop. Obstacle ahead. Vehicle braking.” is a proposed message, not a tested phrase. Avoid route cards, chat, text entry, and preference sliders during the event.</p>
      </div>
      <div>
        <h3>Control night glare without hiding the warning</h3>
        <p>Evaluate ambient-light dimming, dark noncritical backgrounds, bounded brightness control, and windshield reflections while preserving warning conspicuity.</p>
      </div>
    </div>
  </section>

  <section class="case-section">
    <h2>NHTSA Guidance and Study Boundary</h2>
    <p>NHTSA's driver-vehicle-interface guidance recommends minimizing glare from and onto displays. Its suggestions include automatic or adjustable dimming in darkness, dark backgrounds, and reducing window reflections. It also warns that placing noncritical information farther from forward gaze to reduce display glare is not appropriate for critical safety messages. <a href="https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/812360_humanfactorsdesignguidance.pdf">Read the NHTSA Human Factors Design Guidance</a>.</p>
    <p>NHTSA's voluntary visual-manual driver-distraction guidance uses human eye-glance and visual-occlusion procedures. The eye-glance criteria depend on participant measurements, including mean glance duration and total eyes-off-road time. This Python model has no eye-glance data and cannot pass or predict those criteria. Also, driver-focused guidance does not certify whether a passenger alert reaches a rear-seat occupant. <a href="https://www.nhtsa.gov/laws-regulations/guidance-documents">View NHTSA's visual-manual guidelines and test procedures</a>.</p>
  </section>

  <section class="case-section">
    <h2>Next Study</h2>
    <p>The next step is to replace assumed inputs with an actual cabin mock-up or simulator. Measure display luminance and reflections with a photometer, test HUD visibility inside and outside the driver eye box, and test alert detection and comprehension from front and rear seats. If a front-seat participant has a driving or takeover task, collect eye-glance measures using an applicable NHTSA procedure. Analyze passenger alert reach separately from driver distraction.</p>
  </section>

  <section class="case-section">
    <h2>Contribution</h2>
    <div class="case-impact">
      <div><strong>Research framing</strong><span>Connected display placement, passenger seating, night visibility, and emergency communication in one AV scenario.</span></div>
      <div><strong>Simulation artifact</strong><span>Created a reproducible Python geometry and contrast-sensitivity model with dimensioned top-view visuals.</span></div>
      <div><strong>Design value</strong><span>Separated what a model can screen from what requires eye tracking, photometry, and passenger testing.</span></div>
    </div>
    <p class="case-cta">This case study is exploratory. It reports no human-participant results and makes no claim of NHTSA compliance or vehicle safety validation.</p>
  </section>
</div>
