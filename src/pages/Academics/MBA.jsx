import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AboutMBA() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="About MBA"
            subtitle="Master of Business Administration program"
            description="Advanced management education for leadership roles"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>MBA Program Overview</h2>
              <p>
                The Master of Business Administration (MBA) program is designed for professionals 
                seeking to advance their careers in management and leadership positions. Our MBA 
                curriculum combines theoretical knowledge with practical application, preparing 
                students for senior management roles across various industries.
              </p>
            </div>

            <div className="panel">
              <h2>Program Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>2-year postgraduate program</li>
                <li>Multiple specialization options</li>
                <li>Case study methodology</li>
                <li>Industry mentorship programs</li>
                <li>International exposure opportunities</li>
                <li>Research and dissertation projects</li>
                <li>Executive development programs</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Specializations Available</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Marketing Management</h4>
                  <p className="text-sm">Digital marketing, brand management, consumer behavior</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Finance Management</h4>
                  <p className="text-sm">Corporate finance, investment banking, financial markets</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Human Resource Management</h4>
                  <p className="text-sm">Talent acquisition, organizational development, HR analytics</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Operations Management</h4>
                  <p className="text-sm">Supply chain, quality management, project management</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Career Prospects</h2>
              <p>
                MBA graduates are well-positioned for leadership roles in Fortune 500 companies, 
                consulting firms, investment banks, and startups. Many also pursue entrepreneurial 
                ventures or executive positions in government and non-profit organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}