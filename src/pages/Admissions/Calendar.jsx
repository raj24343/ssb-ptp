import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AcademicCalendar() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Academic Calendar"
            subtitle="Important academic dates and events"
            description="Schedule of academic activities and important dates"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Academic Schedule</h2>
              <p>Academic calendar with important dates will be shown here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}