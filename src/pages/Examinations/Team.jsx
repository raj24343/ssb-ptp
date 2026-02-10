import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function ExaminationTeam() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Team Members"
            subtitle="Examination committee and staff members"
            description="Dedicated team ensuring smooth examination processes"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Examination Team Structure</h2>
              <p>
                The examination team at SSB Puttaparthi comprises dedicated faculty and 
                administrative staff responsible for conducting fair, transparent, and 
                efficient examinations. Our team ensures all examination processes follow 
                university guidelines and maintain academic integrity.
              </p>
            </div>

            <div className="panel">
              <h2>Key Personnel</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">Controller of Examinations</h4>
                  <p className="text-sm mb-2">Overall supervision of examination activities</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Examination policy implementation</li>
                    <li>Result approval and publication</li>
                    <li>Committee coordination</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Deputy Controller</h4>
                  <p className="text-sm mb-2">Assistant to Controller for day-to-day operations</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Examination scheduling</li>
                    <li>Invigilation coordination</li>
                    <li>Result processing</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Examination Officer</h4>
                  <p className="text-sm mb-2">Administrative coordination of examinations</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Hall ticket preparation</li>
                    <li>Question paper handling</li>
                    <li>Attendance management</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">IT Support Team</h4>
                  <p className="text-sm mb-2">Technical support for examination processes</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Online examination systems</li>
                    <li>Result processing software</li>
                    <li>Database management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Faculty Coordinators</h2>
              <p>
                Each department has designated faculty coordinators who work closely with 
                the examination team to ensure subject-specific requirements are met and 
                evaluation processes are conducted according to academic standards.
              </p>
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
}