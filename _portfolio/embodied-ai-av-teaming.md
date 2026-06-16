---
title: "Embodied AI Roles in Autonomous Vehicles"
excerpt: "Quantitative experiment on how passengers interpret AI teammate roles and influence styles in autonomous-vehicle interfaces."
collection: portfolio
permalink: /portfolio/embodied-ai-av-teaming/
order: 3
author: atik
header:
  teaser: portfolio/eai-teaming-thumb.svg
card:
  label: "Quantitative Experiment"
  methods: "3 x 3 between-subject experiment, ANOVA, latent profile analysis"
  sample: "498 valid Prolific responses"
  evidence: "Qualtrics survey data, reliability checks, ANOVA, five-profile model"
  impact: "Revealed distinct response profiles that can guide AI teammate role and authority decisions in AV interfaces."
  stat: "498"
  stat_label: "valid survey responses after a 10-person pilot"
  thumbnail_alt: "Thumbnail summarizing a quantitative autonomous-vehicle AI teammate experiment with 498 valid responses and five latent profiles."
  tags:
    - Autonomous vehicles
    - Embodied AI
    - Quantitative
    - Segmentation
---

<div class="case-study">
  <section class="case-hero">
    <div class="case-hero__copy">
      <p class="case-eyebrow">Autonomous Vehicles / Embodied AI / Quantitative Experiment</p>
      <p class="case-lead">I designed and analyzed a 3 x 3 between-subject online experiment to test how AI teammate role and communication influence style shape trust, personification, personalization, and perceived authority in autonomous-vehicle HMIs.</p>
      <div class="case-meta-grid" aria-label="Project snapshot">
        <div><strong>Role</strong><span>Lead researcher</span></div>
        <div><strong>Method</strong><span>Survey experiment + latent profile analysis</span></div>
        <div><strong>Participants</strong><span>498 valid responses</span></div>
        <div><strong>Tools</strong><span>Qualtrics, Prolific, R, TypeScript</span></div>
      </div>
    </div>
    <img class="case-hero__visual" src="/images/portfolio/eai-teaming-case.svg" alt="Diagram of a 3 by 3 autonomous vehicle AI teammate experiment and five latent response profiles.">
  </section>

  <section class="case-section case-section--tight">
    <h2>Problem</h2>
    <p>Autonomous-vehicle interfaces may present the vehicle AI as an observer, collaborator, or leader. They may also communicate in a suggestive, facilitative, or directive style. Those choices can affect whether passengers experience the AI as trustworthy, personalized, human-like, or overly authoritative.</p>
    <p>The project tested whether these role and influence-style manipulations changed aggregate perceptions, and whether hidden response profiles could explain differences that mean comparisons alone might miss.</p>
  </section>

  <section class="case-section">
    <h2>Project Approach</h2>
    <div class="case-timeline" aria-label="Project process">
      <div><strong>1. Experimental design</strong><span>Created a 3 x 3 between-subject design crossing AI role: observer, collaborator, leader; with influence style: suggestive, facilitative, directive.</span></div>
      <div><strong>2. Prototype</strong><span>Developed the interaction prototype in TypeScript and used Llama 2 to support the AI teammate scenario.</span></div>
      <div><strong>3. Survey deployment</strong><span>Hosted the study in Qualtrics and recruited participants through Prolific after a 10-person pilot.</span></div>
      <div><strong>4. Analysis</strong><span>Used R for reliability analysis, ANOVA, and latent profile analysis with models from one to six classes.</span></div>
    </div>
  </section>

  <section class="case-section">
    <h2>Timeline</h2>
    <div class="case-duration" aria-label="Four-week quantitative project timeline">
      <div class="case-duration__bar">
        <span class="case-duration__segment case-duration__segment--irb" style="--start: 0%; --width: 50%;"><strong>IRB approval</strong><em>~2 weeks</em></span>
        <span class="case-duration__segment case-duration__segment--study" style="--start: 50%; --width: 25%;"><strong>Survey launch</strong><em>Prolific</em></span>
        <span class="case-duration__segment case-duration__segment--analysis" style="--start: 75%; --width: 25%;"><strong>Analysis</strong><em>R</em></span>
      </div>
      <div class="case-duration__axis" aria-hidden="true">
        <span>Week 1</span>
        <span>Week 2</span>
        <span>Week 3</span>
        <span>Week 4</span>
      </div>
      <p class="case-duration__note">* Human-subjects IRB approval extended the calendar timeline; once approval was in place, the online experiment and analysis moved quickly.</p>
    </div>
  </section>

  <section class="case-section">
    <h2>Tools</h2>
    <div class="case-method-grid">
      <div>
        <h3>Experiment build</h3>
        <p>Developed the prototype in TypeScript and used Llama 2 for the embodied AI teammate interaction.</p>
      </div>
      <div>
        <h3>Survey operations</h3>
        <p>Used Qualtrics for consent, measures, and survey flow, with Prolific for recruitment and compensation.</p>
      </div>
      <div>
        <h3>Statistical analysis</h3>
        <p>Used R for reliability checks, ANOVA, and latent profile analysis using the tidyLPA workflow.</p>
      </div>
      <div>
        <h3>Quality controls</h3>
        <p>Used bot checks, fast-submission controls, and attention checks; 12 responses were removed before final analysis.</p>
      </div>
    </div>
  </section>

  <section class="case-section">
    <h2>Experiment Design</h2>
    <div class="case-method-grid">
      <div>
        <h3>AI role</h3>
        <p>Compared observer, collaborator, and leader roles, representing increasing decision-making authority.</p>
      </div>
      <div>
        <h3>Influence style</h3>
        <p>Compared suggestive, facilitative, and directive communication styles in route-choice scenarios.</p>
      </div>
      <div>
        <h3>Measures</h3>
        <p>Measured trust in the AI teammate, perceived personification, perceived personalization, and perceived influence style.</p>
      </div>
      <div>
        <h3>Sample</h3>
        <p>Recruited 510 total participants across pilot and main launch; 498 valid responses remained after attention checks.</p>
      </div>
    </div>
  </section>

  <section class="case-section">
    <h2>Method Rationale</h2>
    <div class="case-method-grid">
      <div>
        <h3>Alternative: Single-condition survey</h3>
        <p>A single-condition survey could measure general attitudes toward AI in autonomous vehicles, but it would not isolate role and influence-style combinations.</p>
      </div>
      <div>
        <h3>Alternative: Qualitative interviews</h3>
        <p>Interviews could explain why people respond differently to AI authority, but they would not provide enough statistical power to compare nine experimental conditions.</p>
      </div>
      <div>
        <h3>Alternative: Aggregate analysis only</h3>
        <p>ANOVA tested population-level effects, but relying only on mean differences would miss distinct trust, authority, and human-likeness response patterns.</p>
      </div>
      <div>
        <h3>Chosen: Experiment + latent profiles</h3>
        <p>The 3 x 3 between-subject design tested role and influence-style effects, while latent profile analysis revealed hidden response groups beneath nonsignificant aggregate results.</p>
      </div>
    </div>
  </section>

  <section class="case-section">
    <h2>Quantitative Signal</h2>
    <div class="case-metric-grid">
      <div><strong>498</strong><span>valid responses after attention-check exclusions.</span></div>
      <div><strong>.69-.91</strong><span>Cronbach's alpha range across trust, personification, personalization, and influence constructs.</span></div>
      <div><strong>No aggregate effects</strong><span>AI role, influence style, and their interaction were not statistically significant across the measured constructs.</span></div>
      <div><strong>5 profiles</strong><span>Latent profile analysis selected a five-class solution with BIC = 58653.21 and entropy above .91.</span></div>
    </div>
  </section>

  <section class="case-section">
    <h2>Figures</h2>
    <div class="case-figure-stack">
      <figure>
        <img src="/images/portfolio/eai-figure-4-1.png" alt="Line plots comparing trust, personification, personalization, and perceived influence scores across observer, collaborator, and leader roles by influence style.">
        <figcaption>Figure 4.1: Mean construct scores across AI role and influence-style conditions. The aggregate patterns were visible but did not reach statistical significance.</figcaption>
      </figure>
      <figure>
        <img src="/images/portfolio/eai-figure-4-2.png" alt="Latent user perception profile line plot across influence, personalization, personification, and trust dimensions.">
        <figcaption>Figure 4.2: Five latent user perception profiles across influence, personalization, personification, and trust.</figcaption>
      </figure>
      <figure>
        <img src="/images/portfolio/eai-figure-4-3.png" alt="Bar chart comparing observer, collaborator, and leader role perceptions across five latent profiles.">
        <figcaption>Figure 4.3: Observer, collaborator, and leader perceptions across the five latent profiles.</figcaption>
      </figure>
    </div>
  </section>

  <section class="case-section">
    <h2>Profile Results</h2>
    <div class="case-evidence-grid">
      <div class="case-stat"><strong>5.4%</strong><span>Skeptics toward AI: low trust, personification, personalization, and influence perception.</span></div>
      <div class="case-stat"><strong>25.1%</strong><span>Pragmatists over human-likeness: moderate trust with lower social interpretation.</span></div>
      <div class="case-stat"><strong>18.7%</strong><span>Seeking partnership with AI: high trust, personification, personalization, and influence perception.</span></div>
      <div class="case-stat"><strong>19.3%</strong><span>Accepting authority of AI: high trust and influence perception without needing human-likeness.</span></div>
      <div class="case-stat"><strong>31.5%</strong><span>Balanced users: neutral to moderately positive perceptions across all four dimensions.</span></div>
      <div class="case-stat"><strong>p &lt; .001</strong><span>Profiles differed strongly in collaborator and leader perceptions.</span></div>
    </div>
  </section>

  <section class="case-section">
    <h2>Key Insights</h2>
    <div class="case-insight-grid">
      <article>
        <span class="case-tag">Manipulation strength</span>
        <h3>Text-only role changes did not shift average perceptions.</h3>
        <p>The ANOVA results suggest that subtle textual role and influence-style manipulations were not enough to create consistent mean differences across participants.</p>
      </article>
      <article>
        <span class="case-tag case-tag--amber">Segmentation</span>
        <h3>Aggregate averages hid meaningful response patterns.</h3>
        <p>The five-profile solution showed that participants interpreted the same AI teammate scenario through different trust, authority, and human-likeness patterns.</p>
      </article>
      <article>
        <span class="case-tag case-tag--blue">Authority</span>
        <h3>Trust and human-likeness did not always move together.</h3>
        <p>Some users accepted AI authority without needing the AI to feel human-like, while others responded most positively when the AI felt like a partner.</p>
      </article>
      <article>
        <span class="case-tag case-tag--rose">Interface strategy</span>
        <h3>Collaborator and leader perceptions were more diagnostic than observer perceptions.</h3>
        <p>Profile differences were strongest for collaborator and leader perceptions, suggesting that active AI roles require more careful calibration.</p>
      </article>
    </div>
  </section>

  <section class="case-section">
    <h2>Design Recommendations</h2>
    <div class="case-recommendations">
      <div>
        <h3>Do not rely on labels alone</h3>
        <p>Role labels and short text prompts may be too subtle; teams should communicate AI authority through behavior, timing, control affordances, and recovery options.</p>
      </div>
      <div>
        <h3>Design for multiple trust profiles</h3>
        <p>Use settings, onboarding, and adaptive defaults that can support skeptics, pragmatists, partnership seekers, authority accepters, and balanced users.</p>
      </div>
      <div>
        <h3>Separate authority from human-likeness</h3>
        <p>Some users may trust decisive AI behavior without wanting anthropomorphic cues, while others may need stronger social and collaborative signals.</p>
      </div>
      <div>
        <h3>Test authority with realistic interaction</h3>
        <p>Follow text-based experiments with richer prototypes, simulations, or enactments that make control, override, and collaboration more tangible.</p>
      </div>
    </div>
  </section>

  <section class="case-section">
    <h2>Impact</h2>
    <div class="case-impact">
      <div><strong>Quantitative impact</strong><span>Moved beyond mean comparisons by using latent profile analysis to identify distinct response groups.</span></div>
      <div><strong>Design impact</strong><span>Showed why AV interfaces may need different AI role and authority strategies for different passenger profiles.</span></div>
      <div><strong>Product impact</strong><span>Translated complex statistical results into actionable guidance for AI teammate behavior, control, and communication.</span></div>
    </div>
  </section>
</div>
