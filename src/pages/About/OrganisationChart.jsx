import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function OrganisationChart() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Organisation Chart"
            subtitle="Institutional organizational structure"
            description="Organizational hierarchy and reporting structure"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Organisation Chart</h2>
              <p>Organizational structure chart will be displayed here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}