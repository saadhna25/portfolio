import React, { useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'RAG-Based PDF Q&A System',
    status: 'In Progress',
    statusColor: '#4ade80',
    description:
      'An intelligent document question-answering system built with LangChain, FAISS vector store, Hugging Face sentence-transformers, and Groq API. Users can upload any PDF and ask natural language questions to get context-aware answers.',
    tech: ['LangChain', 'FAISS', 'Hugging Face', 'Groq API', 'Streamlit', 'Python'],
    highlights: [
      'Chunked document ingestion with recursive text splitter',
      'Semantic search via FAISS vector embeddings',
      'Fast inference using Groq LLaMA 3 endpoint',
      'Deployed Streamlit UI',
    ],
    github: 'http://github.com/saadhna25/rag-pdf-qa',
    demo: null,
    icon: '📄',
    gradient: 'linear-gradient(135deg, #7c6af5 0%, #c084fc 100%)',
  },
  {
    id: 2,
    title: 'COVID-19 Sentiment Analysis',
    status: 'Completed',
    statusColor: '#60a5fa',
    description:
      'NLP pipeline for analysing public sentiment in COVID-19 tweets using VADER for lexicon-based scoring, spaCy for named-entity recognition, and YAKE for unsupervised keyword extraction. Includes data cleaning, visualisation, and insight generation.',
    tech: ['Python', 'VADER', 'spaCy', 'YAKE', 'Pandas', 'Matplotlib'],
    highlights: [
      'Multi-method sentiment scoring (VADER + TextBlob)',
      'Named-entity and keyword extraction pipeline',
      'Temporal trend visualisation across wave periods',
      'Comparative analysis of positive vs negative discourse',
    ],
    github: 'http://github.com/saadhna25/covid-sentiment',
    demo: null,
    icon: '🦠',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
  },
  {
    id: 3,
    title: 'Gene Expression Cancer Classification',
    status: 'Completed',
    statusColor: '#60a5fa',
    description:
      'Deep neural network implementation for classifying 33 cancer types from the TCGA PANCAN gene expression dataset. Implemented ANN baseline, LeNet architecture adaptation, and GoogLeNet (Inception) in TensorFlow/Keras on Google Colab.',
    tech: ['TensorFlow', 'Keras', 'Python', 'Google Colab', 'NumPy', 'scikit-learn'],
    highlights: [
      'ANN, LeNet, and GoogLeNet architectures compared',
      '33-class classification on TCGA PANCAN dataset',
      'Batch normalisation and dropout regularisation',
      'Training curves and confusion matrix analysis',
    ],
    github: 'http://github.com/saadhna25/gene-expression-dnn',
    demo: null,
    icon: '🧬',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
  },
  {
    id: 4,
    title: 'Employee Attrition Prediction',
    status: 'Completed',
    statusColor: '#60a5fa',
    description:
      'Classic ML classification pipeline predicting employee attrition using the IBM HR Analytics dataset. Compared Logistic Regression, Decision Tree, and SVM classifiers with proper preprocessing, feature engineering, and evaluation metrics.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'Seaborn', 'Matplotlib'],
    highlights: [
      'Three ML classifiers benchmarked side-by-side',
      'SMOTE oversampling for class imbalance handling',
      'Feature importance analysis and EDA',
      'Precision, recall, F1 and ROC-AUC reporting',
    ],
    github: 'http://github.com/saadhna25/employee-attrition',
    demo: null,
    icon: '📊',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fcd34d 100%)',
  },
];

export default function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero-bg">
          <div className="p-orb p-orb-1" />
          <div className="p-orb p-orb-2" />
        </div>
        <div className="projects-hero-content">
          <div className="section-label animate-fade-up">Portfolio</div>
          <h1 className="projects-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Projects &<br /><em>Work</em>
          </h1>
          <p className="projects-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A collection of ML and NLP projects spanning<br />
            RAG systems, deep learning, and data analysis.
          </p>
        </div>
      </div>

      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              className="project-card reveal"
              key={project.id}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="card-top">
                <div className="card-icon-wrap" style={{ background: project.gradient }}>
                  <span className="card-icon">{project.icon}</span>
                </div>
                <div className="card-meta">
                  <span
                    className="card-status"
                    style={{ '--status-color': project.statusColor }}
                  >
                    <span className="status-dot" />
                    {project.status}
                  </span>
                </div>
              </div>

              <h2 className="card-title">{project.title}</h2>
              <p className="card-desc">{project.description}</p>

              <ul className="card-highlights">
                {project.highlights.map(h => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="card-tech">
                {project.tech.map(t => (
                  <span className="tech-badge" key={t}>{t}</span>
                ))}
              </div>

              <div className="card-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="card-btn card-btn-github"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                  View on GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="card-btn card-btn-demo">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
