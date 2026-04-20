import React from 'react';
import './Resume.css';

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-hero">
        <div className="resume-hero-bg">
          <div className="r-orb r-orb-1" />
          <div className="r-orb r-orb-2" />
        </div>
        <div className="resume-hero-content">
          <div className="section-label animate-fade-up">My Resume</div>
          <h1 className="resume-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Curriculum<br /><em>Vitae</em>
          </h1>
          <a href="/portfolio/Saadhna_CV.pdf" download="Saadhna_CV.pdf" className="download-btn animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </a>
        </div>
      </div>
      <div className="resume-container">
        <div className="pdf-wrapper">
          <iframe src="/portfolio/Saadhna_CV.pdf" title="Saadhna Resume" className="pdf-viewer" />
        </div>
      </div>
    </main>
  );
}