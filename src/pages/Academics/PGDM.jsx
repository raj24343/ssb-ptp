import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AboutPGDM() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="About PGDM"
            subtitle="Post Graduate Diploma in Management program"
            description="Industry-focused management education with practical orientation"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>PGDM Program Overview</h2>
              <p>
                The Post Graduate Diploma in Management (PGDM) is a comprehensive management 
                program that bridges the gap between academic learning and industry requirements. 
                Our PGDM curriculum is designed with direct industry input to ensure graduates 
                are job-ready and equipped with relevant skills.
              </p>
            </div>

            <div className="panel">
              <h2>Key Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>2-year intensive program</li>
                <li>Industry-designed curriculum</li>
                <li>Live projects with corporate partners</li>
                <li>Regular industry interactions</li>
                <li>Soft skills development</li>
                <li>Entrepreneurship incubation</li>
                <li>100% placement assistance</li>
              </ul>
            </div>

            <div className="panel">
              <h2>PGDM vs MBA</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">PGDM Advantages</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Industry-focused curriculum</li>
                    <li>Regular curriculum updates</li>
                    <li>Practical orientation</li>
                    <li>Faster industry integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Career Outcomes</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Management trainee positions</li>
                    <li>Business analyst roles</li>
                    <li>Marketing executive positions</li>
                    <li>Operations management roles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Industry Connect</h2>
              <p>
                Our PGDM program maintains strong ties with industry partners who actively 
                participate in curriculum design, guest lectures, live projects, and placement 
                activities. This ensures our graduates are industry-ready from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}