import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AboutRISE() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="About RISE"
            subtitle="Research, Innovation, and Startup Ecosystem"
            description="Fostering innovation and entrepreneurship"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>RISE Initiative</h2>
              <p>Information about RISE program will be added here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}