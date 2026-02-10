import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AcademicRegulations() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Academic Regulations"
            subtitle="Academic rules and regulations"
            description="Comprehensive academic policies and regulations"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Academic Rules</h2>
              <p>Academic regulations and policies will be detailed here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}