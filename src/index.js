import './style.css';
import ronoImg from '../public/images/rono.jpeg';

const projects = [
  { 
    name: 'Rental Management System', 
    tag: 'Web App', 
    link: 'https://rental-management-system-tau.vercel.app/',
    desc: 'A full-featured rental management platform for tracking tenants, payments, and properties.',
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e)'
  },
 
  { 
    name: 'Coming Soon', 
    tag: 'Software', 
    link: '#',
    desc: 'A software project focused on solving real-world problems.',
    bg: 'linear-gradient(135deg, #1a2a2e, #0d191f)'
  },
];

const skills = ['HTML & CSS', 'JavaScript', 'Python', 'Machine Learning', 'AI', 'Node.js', 'Git'];

const app = document.getElementById('app');

app.innerHTML = `
  <!-- NAV -->
  <nav>
    <div class="nav-logo">rono.</div>
    <ul class="nav-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="nav-cta" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Let's Talk</button>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-avatar">
      <img src="${ronoImg}" alt="Rono Brian" style="width:100%; height:100%; object-fit:cover; border-radius:4px;" />
    </div>
    <h1 class="fade-up">Software <em>&amp; AI</em><br>Developer</h1>
    <p class="hero-sub fade-up">Passionate BBIT student building real-world solutions with web tech, and AI.</p>
    <a href="#work" class="hero-btn fade-up">↓ My Work</a>
  </section>

  <!-- LOGOS (tech stack) -->
  <div class="logos fade-up">
    <span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Python</span><span>AI & ML</span>
  </div>

  <!-- SERVICES -->
  <section class="services" id="services">
    <div class="services-grid">
      <div class="service-card fade-up">
        <div class="service-num">01</div>
        <div class="service-title">Web Development</div>
        <p class="service-desc">Building responsive, modern websites from scratch using HTML, CSS, and JavaScript with clean, maintainable code.</p>
        <a href="#work" class="service-link">→ View Projects</a>
      </div>
      <div class="service-card fade-up">
        <div class="service-num">02</div>
        <div class="service-title">AI & Machine Learning</div>
        <p class="service-desc">Exploring intelligent systems, building ML models, and applying AI to solve practical real-world problems.</p>
        <a href="#contact" class="service-link">→ Let's Collaborate</a>
      </div>
      <div class="service-card fade-up">
        <div class="service-num">03</div>
        <div class="service-title">UI/UX DESIGN</div>
        <p class="service-desc">Creating intuitive user experiences and visually appealing interfaces for web and mobile applications.</p>
        <a href="#about" class="service-link">→ About Me</a>
      </div>
    </div>
  </section>

  <!-- WORK -->
  <section class="work" id="work">
    <div class="work-header">
      <h2 class="section-title">Selected <em>Work</em></h2>
      <a href="#contact" class="see-all">→ See All</a>
    </div>
    <div class="work-grid">
      ${projects.map(p => `
        <div class="work-card">
          <div class="work-card-img" style="background:${p.bg}">
            <div class="work-card-overlay">
              <a href="${p.link}" target="_blank" class="view-project-btn">→ View Project</a>
            </div>
          </div>
          <div class="work-card-info">
            <div>
              <span class="work-name">${p.name}</span>
              <p class="work-desc">${p.desc}</p>
            </div>
            <span class="work-tag">${p.tag}</span>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- ABOUT -->
  <section class="about" id="about">
    <div class="about-text fade-up">
      <h2>About <em>Rono Brian</em></h2>
      <p>I'm a BBIT student with a deep passion for technology — especially the intersection of software development and artificial intelligence.</p>
      <p>I love building projects from scratch, turning ideas into working products using HTML, CSS, JavaScript, and Python. Every project is a chance to grow my skills and solve real problems.</p>
      <div class="skills-tags">
        ${skills.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>
    <div class="about-stats fade-up">
      <div>
        <div class="stat-num">BBIT</div>
        <div class="stat-label">Degree Program</div>
      </div>
      <div>
        <div class="stat-num">2+</div>
        <div class="stat-label">Years learning</div>
      </div>
      
  </section>

  <!-- CONTACT -->
  <section class="contact" id="contact">
    <h2>Let's <em>Connect</em></h2>
    <p>Open to collaborations, learning and exciting projects.</p>
    <a href="mailto:rbkipkogei@gmail.com" class="contact-email">rbkipkogei@gmail.com</a>
   
    <div class="social-links">
      <a href="https://github.com/Rono-Brian" target="_blank" title="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/brian-rono-61920b378" target="_blank" title="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <a href="https://x.com/mrr_Yobbra" target="_blank" title="Twitter / X">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/mrr_yobra" target="_blank" title="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      </a>
      <a href="mailto:rbkipkogei@gmail.com" target="_blank" title="Email">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      </a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>© 2026 Rono - All Rights reserved</p>
    <p>Crafted with passion by Brian</p>
  </footer>
`;

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));