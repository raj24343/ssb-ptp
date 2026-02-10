import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function Milestones() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Milestones Achieved"
            subtitle="Key achievements and milestones"
            description="Our journey of excellence and growth"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Major Milestones</h2>
              <p>Key achievements and milestones will be listed here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}