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
      <a href="https://github.com/ronobrian" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/ronobrian" target="_blank">LinkedIn</a>
      <a href="https://twitter.com/Mrr_yobra" target="_blank">X</a>
      <a href="https://www.instagram.com/mrr_yobra?igsh=YzBmcGp2ZXNoa3cx" target="_blank">Instagram</a>
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