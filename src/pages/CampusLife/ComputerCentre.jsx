import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function ComputerCentre() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Computer Centre"
            subtitle="IT infrastructure and computer labs"
            description="State-of-the-art computing facilities for digital learning"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Computing Infrastructure</h2>
              <p>
                The Computer Centre at SSB Puttaparthi is equipped with modern computing 
                facilities and high-speed internet connectivity to support academic and 
                research activities. Our labs provide students with hands-on experience 
                with the latest technology and software applications.
              </p>
            </div>

            <div className="panel">
              <h2>Laboratory Facilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Hardware Specifications</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>100+ latest configuration computers</li>
                    <li>High-speed processors and adequate RAM</li>
                    <li>Large LCD monitors for better visibility</li>
                    <li>Backup power supply systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Software Applications</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Microsoft Office Suite</li>
                    <li>Statistical analysis software (SPSS, R)</li>
                    <li>Database management systems</li>
                    <li>Programming languages and IDEs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Services Available</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Internet browsing and research</li>
                <li>Computer programming and software development</li>
                <li>Data analysis and statistical computing</li>
                <li>Project work and presentations</li>
                <li>Online learning and e-library access</li>
                <li>Printing and scanning services</li>
                <li>Technical support and assistance</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Access & Hours</h2>
              <p>
                The Computer Centre is accessible to all students and faculty members 
                during college hours and extended hours during examination periods. 
                Technical staff is available to provide support and assistance with 
                hardware and software issues.
              </p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Operating Hours:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Monday to Friday: 8:00 AM - 8:00 PM</li>
                  <li>Saturday: 9:00 AM - 5:00 PM</li>
                  <li>Extended hours during examinations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}