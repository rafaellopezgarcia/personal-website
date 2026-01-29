const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "cv", label: "CV" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "Project One",
    description:
      "Short description of a project that highlights the problem, approach, and result.",
    status: "Featured",
  },
  {
    title: "Project Two",
    description:
      "Short description of a second project with a focus on impact or learning.",
    status: "In progress",
  },
  {
    title: "Project Three",
    description:
      "Short description of a third project with a link to the repository or demo.",
    status: "Open source",
  },
];

const BLOG_POSTS = [
  {
    title: "Why I build",
    date: "Jan 2026",
    summary: "A short note on craft, curiosity, and the work I want to do.",
  },
  {
    title: "Systems that scale",
    date: "Dec 2025",
    summary: "Thoughts on designing reliable software and teams.",
  },
];

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="logo">Rafael Lopez Garcia</div>
        <nav className="nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="section hero">
          <p className="eyebrow">Personal Website</p>
          <h1>Introduction</h1>
          <p className="lede">
            I am an engineer with experience in robotics, computer vision, and
            software engineering.
          </p>
          <p className="lede">
            With the intention to pivot my career towards AI research, in
            September 2025, I started the{" "}
            <a
              className="text-link"
              href="https://www.kuleuven.be/programmes/master-artificial-intelligence?mtm_campaign=masters&mtm_source=google&mtm_medium=cpc&gad_source=1&gad_campaignid=22048691266&gbraid=0AAAAAC4yknnDWFX7B0Xfj6sJ5sJJkD94H&gclid=Cj0KCQiAp-zLBhDkARIsABcYc6u0FMydSh6V2rac38dF76Uy0Mrq0HfkkjJxcZLWJezJPtzE00BxMLIaAiPhEALw_wcB"
              target="_blank"
              rel="noreferrer"
            >
              Advanced Master in Artificial Intelligence
            </a>{" "}
            at KU Leuven.
          </p>
          <p className="lede">
            I have previously done research at university labs, worked across a
            wide variety of tasks by interning at a stealth startup. My
            experience in automotive spans from LiDAR sensor simulation to
            mapping and tracking and from distributed systems to requirements
            engineering.
          </p>
        </section>

        <section id="cv" className="section">
          <div className="cv-card">
            <div className="cv-header">
              <div>
                <h3>CV</h3>
                <p className="cv-title">
                  Applied AI Researcher — Reinforcement Learning &amp;
                  Multimodal Learning
                </p>
              </div>
              <div className="cv-meta">
                <div>Leuven, Belgium</div>
                <a
                  className="text-link"
                  href="mailto:rafaellopezgarcia27@gmail.com"
                >
                  rafaellopezgarcia27@gmail.com
                </a>
                <div>+32 0492 83 69 67</div>
                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/rafael-lopez-garcia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="cv-section">
              <h4>Research Summary</h4>
              <p>
                Applied AI researcher specializing on mitigating modality
                dominance in multimodal models via reinforcement learning.
                Experienced in designing and evaluating ML and probabilistic
                algorithms for sensor-driven perception with a background in
                autonomous driving, robotics, computer vision, simulation, and
                production-ready software systems.
              </p>
            </div>
            <div className="cv-section">
              <h4>Research Interests</h4>
              <p>
                Reinforcement Learning; Multimodal Representation Learning;
                Modality Dominance; Cross-Modal Fusion and Alignment; Robust
                Sequential Decision-Making; Embodied and Simulation-Based
                Learning.
              </p>
            </div>
            <div className="cv-section">
              <h4>Research Experience</h4>
              <div className="cv-item">
                <div className="cv-item-header">
                  <div>
                    <strong>
                      Master’s Thesis — Reinforcement Learning &amp; Multimodal
                      Learning
                    </strong>
                    <div className="cv-item-sub">
                      Katholieke Universiteit Leuven · Leuven, Belgium
                    </div>
                  </div>
                  <span className="cv-date">2025–2026 (exp.)</span>
                </div>
                <ul>
                  <li>
                    Designing reinforcement learning agents operating on
                    multimodal inputs (image, audio, video), with explicit focus
                    on mitigating modality dominance during policy learning.
                  </li>
                  <li>
                    Evaluating generalization and robustness of learned policies
                    across environments and modality subsets, analyzing failure
                    modes arising from modality imbalance.
                  </li>
                  <li>
                    Built scientific experimentation pipelines to train, ablate,
                    and analyze multimodal models across diverse datasets and
                    modality configurations.
                  </li>
                </ul>
              </div>
              <div className="cv-item">
                <div className="cv-item-header">
                  <div>
                    <strong>Robotics Research Intern</strong>
                    <div className="cv-item-sub">
                      <a
                        className="text-link"
                        href="https://www.stanley-robotics.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Stanley Robotics
                      </a>{" "}
                      · Paris, France
                    </div>
                  </div>
                  <span className="cv-date">Jul 2015 – Jan 2016</span>
                </div>
                <ul>
                  <li>
                    Developed point-cloud-based pose estimation algorithms to
                    guide autonomous valet parking robots beneath vehicle
                    chassis.
                  </li>
                  <li>
                    Assembled a multi-sensor data collection platform and
                    generated datasets for autonomous vehicle validation.
                  </li>
                </ul>
              </div>
              <div className="cv-item">
                <div className="cv-item-header">
                  <div>
                    <strong>Student Research Assistant</strong>
                    <div className="cv-item-sub">
                      Social Robotics Lab, University of Freiburg · Freiburg,
                      Germany
                    </div>
                  </div>
                  <span className="cv-date">Apr 2015 – Jul 2015</span>
                </div>
                <ul>
                  <li>
                    Investigated real-time person re-identification methods to
                    assist human tracking in social robotics applications.
                  </li>
                </ul>
              </div>
              <div className="cv-item">
                <div className="cv-item-header">
                  <div>
                    <strong>Student Research Assistant</strong>
                    <div className="cv-item-sub">
                      Mechatronics Department, UNAM · Mexico City, Mexico
                    </div>
                  </div>
                  <span className="cv-date">Jan 2010 – Jan 2011</span>
                </div>
                <ul>
                  <li>
                    Implemented logic in a microcontroller to define the angular
                    trajectories of the actuators on a 12-DOF robot for biped
                    locomotion.
                  </li>
                  <li>
                    Developed a kinematic simulation environment to validate and
                    analyze biped gait patterns.
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv-section">
              <h4>Industry Experience</h4>
              <div className="cv-item">
                <div className="cv-item-header">
                  <div>
                    <strong>Runtime Framework Engineer</strong>
                    <div className="cv-item-sub">
                      <a
                        className="text-link"
                        href="https://woven.toyota/en/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Woven by Toyota
                      </a>{" "}
                      · Tokyo, Japan
                    </div>
                  </div>
                  <span className="cv-date">Oct 2021 – Jul 2025</span>
                </div>
                <ul>
                  <li>
                    Engineered a behaviour-driven-development framework to
                    automate the traceability of the vehicle SDK codebase in
                    compliance with requirements management.
                  </li>
                  <li>
                    Developed transport- and protocol-agnostic middleware
                    supporting modular communication across distributed systems.
                  </li>
                </ul>
              </div>
              <div className="cv-item">
                <div className="cv-item-header">
                  <div>
                    <strong>Algorithm Engineer</strong>
                    <div className="cv-item-sub">
                      <a
                        className="text-link"
                        href="https://www.aptiv.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Aptiv
                      </a>{" "}
                      · Wuppertal, Germany
                    </div>
                  </div>
                  <span className="cv-date">Jun 2019 – Aug 2021</span>
                </div>
                <ul>
                  <li>
                    Implemented Dempster-Shafer- and particle-filter-based
                    algorithms for grid-based occupancy mapping and multi-object
                    tracking within an automated driving software stack.
                  </li>
                </ul>
              </div>
              <div className="cv-item">
                <div className="cv-item-header">
                  <div>
                    <strong>Software and Algorithm Engineer</strong>
                    <div className="cv-item-sub">
                      <a
                        className="text-link"
                        href="https://www.continental.com/en/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Continental
                      </a>{" "}
                      · Queretaro, Mexico
                    </div>
                  </div>
                  <span className="cv-date">Jul 2016 – May 2019</span>
                </div>
                <ul>
                  <li>
                    Designed a LiDAR simulation framework and analyzed the
                    impact of optical, electronic, and point-cloud algorithm
                    decisions on downstream perception components.
                  </li>
                </ul>
              </div>
            </div>
            <div className="cv-section">
              <h4>Education</h4>
              <div className="cv-item-row">
                <div>
                  <strong>Advanced Master in Artificial Intelligence</strong>
                  <div className="cv-item-sub">
                    Katholieke Universiteit Leuven · Leuven, Belgium
                  </div>
                </div>
                <span className="cv-date">2025 – 2026 (exp.)</span>
              </div>
              <div className="cv-item-row">
                <div>
                  <strong>
                    M.Sc. in Embedded Systems Engineering (Robotics &amp; Computer
                    Vision)
                  </strong>
                  <div className="cv-item-sub">
                    Albert-Ludwigs-Universität Freiburg · Freiburg, Germany
                  </div>
                </div>
                <span className="cv-date">2012 – 2015</span>
              </div>
              <div className="cv-item-row">
                <div>
                  <strong>B.Eng. in Mechatronics Engineering</strong>
                  <div className="cv-item-sub">
                    National Autonomous University of Mexico · Mexico City,
                    Mexico
                  </div>
                </div>
                <span className="cv-date">2006 – 2012</span>
              </div>
            </div>
            <div className="cv-section">
              <h4>Academic Service</h4>
              <div className="cv-item-row">
                <div>
                  <strong>Student Representative</strong>
                  <div className="cv-item-sub">
                    Advanced Master in Artificial Intelligence, KU Leuven
                  </div>
                </div>
                <span className="cv-date">2025 – 2026 (exp.)</span>
              </div>
            </div>
            <div className="cv-section">
              <h4>Skills</h4>
              <div className="cv-skills">
                <div>
                  <strong>Methods:</strong> Reinforcement Learning, Multimodal
                  Learning, Deep Learning, Probabilistic Modeling
                </div>
                <div>
                  <strong>Frameworks:</strong> PyTorch, Gymnasium
                </div>
                <div>
                  <strong>Programming:</strong> Python, C++
                </div>
                <div>
                  <strong>Tooling:</strong> W&amp;B, Docker, ROS, MATLAB, Git,
                  CI/CD, Software Requirements Management
                </div>
                <div>
                  <strong>Languages:</strong> English (Fluent), Spanish (Native),
                  German (Conversational)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid">
            {PROJECTS.map((project) => (
              <article key={project.title} className="card">
                <div className="card-meta">{project.status}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className="text-link" href="#contact">
                  Request details
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="section">
          <h2>Blog</h2>
          <div className="stack">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="post">
                <div className="post-meta">{post.date}</div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            If you are interested in collaborating, hiring, or just saying
            hello, please reach out.
          </p>
          <div className="contact-card">
            <div>
              <div className="contact-label">Email</div>
              <a
                className="text-link"
                href="mailto:rafaellopezgarcia27@gmail.com"
              >
                rafaellopezgarcia27@gmail.com
              </a>
            </div>
            <div>
              <div className="contact-label">Location</div>
              <div>Leuven, Belgium</div>
            </div>
            <div>
              <div className="contact-label">Links</div>
              <div className="links">
                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/rafael-lopez-garcia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Rafael Lopez Garcia</span>
        <span>rafaellopezgarcia.com</span>
      </footer>
    </div>
  );
}

export default App;
