import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function FinanceCommittee() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Finance Committee"
            subtitle="Financial governance and management"
            description="Financial oversight and planning committee"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Finance Committee</h2>
              <p>Finance committee details will be added here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}