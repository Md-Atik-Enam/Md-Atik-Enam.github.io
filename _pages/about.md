---
permalink: /
title: Hello there!
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


I am **Md Atik Enam**, a PhD candidate in [Human-Centered Computing](https://www.clemson.edu/cecas/departments/computing/academics/graduates/degrees/phd-hcc.html){:target="_blank"} at Clemson University. I am extremely fortunate to be advised by [Dr. Julian Brinkley](https://scholar.google.com/citations?user=g4BAX40AAAAJ&hl=en){:target="_blank"} at Clemson University. I work as a Graduate Research Assistant in the [DRIVE Lab](https://www.drivelab.ai/){:target="_blank"} at the [Clemson University International Center for Automotive Research (CU-ICAR)](https://cuicar.com/){:target="_blank"}. I have worked on projects funded by **NHTSA, Google, US Army GVSC, and NSF** and assisted in writing up project reports.  

My transdisciplinary research explores the intersection of **Human Factors, Automotive Engineering, Artificial Intelligence, Computer Science,** and **Cognitive Psychology**, with a strong focus on community engagement and advancing social good. I am also passionate about enhancing the effectiveness of undergraduate computer science education through research. 

In my free time, I enjoy 🥾 hiking, 🚶 walking, 🏃 running, and 🍳 cooking. I have hiked more than 500 miles in the USA, yet I feel there are still infinite places left to explore! 

I am always looking for opportunities to collaborate on exciting projects or assist with research that aligns with my interests. If you'd like to connect, feel free to **[email me](mailto:menam@g.clemson.edu)**. 🙂

## 👋 I'm Open to New Opportunities

I’m actively seeking research-focused positions in both **academia** and **industry**. If you know of any relevant opportunities or are interested in potential collaboration, please don’t hesitate to [get in touch](mailto:menam@g.clemson.edu).


## Latest News

<div class="latest-news">
  <ul>
    {% for news in site.news %}
      <li>
        <strong>{{ news.title }}</strong> - {{ news.date | date: "%B %d, %Y" }}
        <p>{{ news.excerpt | markdownify }}</p>
      </li>
    {% endfor %}
  </ul>
</div>