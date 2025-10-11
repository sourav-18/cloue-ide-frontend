import React from 'react';
import './css/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Code Anywhere, Anytime with CloudIDE</h1>
            <p>The powerful online IDE that lets you develop, test, and deploy your projects directly from your browser. No setup required.</p>
            <div className="hero-actions">
              <a href="/signup" className="btn btn-primary btn-large">
                <i className="fas fa-rocket"></i> Start Coding Now
              </a>
              <a href="/demo" className="btn btn-secondary btn-large">
                <i className="fas fa-play-circle"></i> Watch Demo
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for the code window for better organization
const CodeWindow = () => {
  const codeLines = [
    { type: 'comment', content: '// Welcome to CloudIDE' },
    { type: 'code', content: 'const express = require(\'express\');', keywords: ['const', 'require'] },
    { type: 'code', content: 'const app = express();', keywords: ['const'] },
    { type: 'empty', content: '' },
    { type: 'code', content: 'app.get(\'/\', (req, res) => {', keywords: ['get'] },
    { type: 'code', content: '  res.send(\'Hello from CloudIDE!\');', keywords: ['send'], indent: true },
    { type: 'code', content: '});', keywords: [] },
    { type: 'empty', content: '' },
    { type: 'code', content: 'const PORT = process.env.PORT || 3000;', keywords: ['const', 'process', 'env'] },
    { type: 'code', content: 'app.listen(PORT, () => {', keywords: ['listen'] },
    { type: 'code', content: '  console.log(`Server running on port ${PORT}`);', keywords: ['console', 'log'], indent: true },
    { type: 'code', content: '});', keywords: [] },
  ];

  return (
    <div className="code-window">
      <div className="window-header">
        <div className="window-button red"></div>
        <div className="window-button yellow"></div>
        <div className="window-button green"></div>
        <div className="window-title">index.js - CloudIDE</div>
      </div>
      <div className="window-content">
        {codeLines.map((line, index) => (
          <CodeLine 
            key={index}
            type={line.type}
            content={line.content}
            keywords={line.keywords || []}
            indent={line.indent}
          />
        ))}
      </div>
    </div>
  );
};

const CodeLine = ({ type, content, keywords, indent }) => {
  if (type === 'empty') {
    return <div className="code-line"></div>;
  }

  if (type === 'comment') {
    return (
      <div className="code-line">
        <span className="code-comment">{content}</span>
      </div>
    );
  }

  // For code lines, highlight keywords
  const renderCodeContent = () => {
    if (keywords.length === 0) return content;

    let processedContent = content;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      processedContent = processedContent.replace(
        regex, 
        `<span class="code-keyword">${keyword}</span>`
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: processedContent }} />;
  };

  return (
    <div className={`code-line ${indent ? 'indent' : ''}`}>
      {renderCodeContent()}
    </div>
  );
};

export default HeroSection;