import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function Academics() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Academics"
            subtitle="Our academic programs and excellence"
            description="Comprehensive management education for tomorrow's leaders"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Academic Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h3>MBA Program</h3>
                  <p>Master of Business Administration - A comprehensive 2-year program covering all aspects of business management.</p>
                </div>
                <div className="card">
                  <h3>PGDM Program</h3>
                  <p>Post Graduate Diploma in Management - Industry-focused program with practical learning approach.</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Specializations Offered</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Marketing</h4>
                  <p className="text-sm">Digital marketing, brand management, consumer behavior</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Finance</h4>
                  <p className="text-sm">Corporate finance, investment analysis, financial markets</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Human Resources</h4>
                  <p className="text-sm">Talent management, organizational behavior, HR analytics</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Operations</h4>
                  <p className="text-sm">Supply chain, quality management, project management</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">International Business</h4>
                  <p className="text-sm">Global trade, cross-cultural management, export-import</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Entrepreneurship</h4>
                  <p className="text-sm">Startup development, innovation, business planning</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Academic Excellence</h2>
              <p>
                Our academic programs are designed to provide students with comprehensive knowledge, 
                practical skills, and ethical values necessary for success in the modern business world. 
                We emphasize experiential learning, case study methods, and industry interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}