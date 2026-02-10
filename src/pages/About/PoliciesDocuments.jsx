import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function PoliciesDocuments() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="SSB Policies & Documents"
            subtitle="Institutional policies and important documents"
            description="Official policies, procedures, and documentation"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Policies & Documents</h2>
              <p>Institutional policies and documents will be listed here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}