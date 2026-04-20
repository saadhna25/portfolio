import React, { useEffect, useRef } from 'react';
import './Home.css';

/* ── DATA ── */
const skills = [
  { cat: 'AI / ML', items: ['NLP', 'LLMs', 'RAG Systems', 'Deep Learning', 'Reinforcement Learning'] },
  { cat: 'Frameworks', items: ['TensorFlow', 'Keras', 'LangChain', 'Hugging Face', 'scikit-learn'] },
  { cat: 'Tools', items: ['Python', 'FAISS', 'Streamlit', 'Google Colab', 'Git & GitHub'] },
  { cat: 'Other', items: ['React', 'SQL', 'Linux', 'REST APIs', 'Groq API'] },
];

const interests = [
  { icon: '🧠', label: 'Natural Language Processing' },
  { icon: '🤖', label: 'Large Language Models' },
  { icon: '📚', label: 'Retrieval-Augmented Generation' },
  { icon: '🔬', label: 'Deep Neural Networks' },
  { icon: '🎮', label: 'Machine Learning' },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="home">

      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="grid-lines" />
        </div>

        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="badge-dot" />
            B.Tech AI · Mahindra University, Hyderabad
          </div>

          <h1 className="hero-name animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Saadhna
          </h1>

          <p className="hero-tagline animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Building intelligent systems at the intersection of<br />
            <span className="highlight">NLP</span>, <span className="highlight">LLMs</span>, and <span className="highlight">Machine Learning</span>
          </p>

          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#about" className="btn-primary">About Me</a>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </div>
        </div>

        {/* Profile avatar */}
        <div className="hero-avatar animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="avatar-ring" />
          <div className="avatar-placeholder">
            <span className="avatar-initials">S</span>
            <p className="avatar-hint">Replace with your photo</p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ME ── */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-label reveal">About Me</div>
          <h2 className="section-title reveal">Passionate about AI that<br /><em>actually works</em></h2>

          <div className="about-grid reveal">
            <div className="about-text">
              <p>
                I'm Saadhna, a third-year B.Tech Artificial Intelligence student at Mahindra University, Hyderabad
                (graduating July 2027). I'm deeply passionate about NLP, large language models, and building
                ML systems that solve real-world problems.
              </p>
              <p>
                Currently building a RAG-based PDF Q&A system using LangChain, FAISS, and Groq API as a portfolio
                project. I've worked on neural networks for gene expression classification (TCGA PANCAN dataset)
                and NLP pipelines for sentiment analysis. I'm actively seeking ML/NLP internship opportunities
                across India.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-num">6.48</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">3rd</span>
                <span className="stat-label">Year</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">2027</span>
                <span className="stat-label">Graduating</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">AI</span>
                <span className="stat-label">Specialization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH INTERESTS ── */}
      <section className="section interests-section">
        <div className="container">
          <div className="section-label reveal">Focus Areas</div>
          <h2 className="section-title reveal">Research Interests</h2>

          <div className="interests-grid reveal">
            {interests.map((item, i) => (
              <div
                className="interest-card"
                key={item.label}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="interest-icon">{item.icon}</span>
                <span className="interest-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section skills-section">
        <div className="container">
          <div className="section-label reveal">Capabilities</div>
          <h2 className="section-title reveal">Skills</h2>

          <div className="skills-grid reveal">
            {skills.map(group => (
              <div className="skill-group" key={group.cat}>
                <h3 className="skill-cat">{group.cat}</h3>
                <div className="skill-tags">
                  {group.items.map(item => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONAL DETAILS (Contact) ── */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-label reveal">Get in Touch</div>
          <h2 className="section-title reveal">Personal Details</h2>

          <div className="contact-grid reveal">
            <div className="contact-card">
              <span className="contact-icon">👤</span>
              <div>
                <div className="contact-field">Name</div>
                <div className="contact-value">Saadhna</div>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <div>
                <div className="contact-field">Phone</div>
                <div className="contact-value">+91 83285 06723</div>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">📧</span>
              <div>
                <div className="contact-field">Personal Email</div>
                <div className="contact-value">
                  <a href="mailto:your.personal@email.com">soman.saadhna@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">🎓</span>
              <div>
                <div className="contact-field">College Email</div>
                <div className="contact-value">
                  <a href="mailto:se22aifXXX@mahindrauniversity.edu.in">se23uari107@mahindrauniversity.edu.in</a>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">🏫</span>
              <div>
                <div className="contact-field">University</div>
                <div className="contact-value">Mahindra University, Hyderabad</div>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">💼</span>
              <div>
                <div className="contact-field">GitHub</div>
                <div className="contact-value">
                  <a href="http://github.com/saadhna25" target="_blank" rel="noreferrer">
                    github.com/saadhna25
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
