import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function SOP() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="SSB Standard Operating Procedure"
            subtitle="Standard operating procedures and guidelines"
            description="Institutional procedures and operational guidelines"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Standard Operating Procedures</h2>
              <p>SOPs and operational guidelines will be detailed here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}