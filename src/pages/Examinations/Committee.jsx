import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function ExamsResultsCommittee() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Exams/Results Committee"
            subtitle="Committee overseeing examinations and results"
            description="Governance structure for examination administration"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Committee Overview</h2>
              <p>
                The Exams/Results Committee is responsible for overseeing all aspects 
                of examination conduct and result processing at SSB Puttaparthi. The 
                committee ensures adherence to academic standards, maintains transparency 
                in examination processes, and addresses any issues related to evaluations.
              </p>
            </div>

            <div className="panel">
              <h2>Committee Composition</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">Chairperson</h4>
                  <p className="text-sm mb-2">Director/Principal</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Overall policy decisions</li>
                    <li>Final approval of results</li>
                    <li>Strategic planning</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Secretary</h4>
                  <p className="text-sm mb-2">Controller of Examinations</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Committee coordination</li>
                    <li>Meeting documentation</li>
                    <li>Implementation oversight</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Academic Representatives</h4>
                  <p className="text-sm mb-2">Department Heads</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Subject-specific guidance</li>
                    <li>Faculty coordination</li>
                    <li>Academic standards</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">External Member</h4>
                  <p className="text-sm mb-2">University Representative</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>University compliance</li>
                    <li>External validation</li>
                    <li>Best practices sharing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Roles and Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Formulation and review of examination policies</li>
                <li>Approval of examination schedules and procedures</li>
                <li>Monitoring examination conduct and quality</li>
                <li>Review and approval of question paper patterns</li>
                <li>Oversight of evaluation processes and result compilation</li>
                <li>Investigation of examination-related grievances</li>
                <li>Recommendation of disciplinary actions for malpractices</li>
                <li>Continuous improvement of examination systems</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Sub-Committees</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Question Paper Committee</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Question paper setting and review</li>
                    <li>Maintaining question banks</li>
                    <li>Ensuring syllabus coverage</li>
                    <li>Quality control of questions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Evaluation Committee</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Appointment of examiners</li>
                    <li>Evaluation guidelines and training</li>
                    <li>Moderation of marks</li>
                    <li>Result processing oversight</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Meeting Schedule</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Regular Meetings</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Monthly review meetings</li>
                    <li>Pre-examination planning sessions</li>
                    <li>Post-examination review meetings</li>
                    <li>Annual policy review conference</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Special Meetings</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Emergency examination issues</li>
                    <li>Grievance resolution</li>
                    <li>Policy amendments</li>
                    <li>Result approval sessions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Decision Making Process</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Agenda circulation 7 days before meeting</li>
                <li>Quorum requirement: 50% + 1 member attendance</li>
                <li>Decisions by consensus, voting if necessary</li>
                <li>Minutes recorded and circulated within 48 hours</li>
                <li>Implementation tracking and follow-up</li>
              </ol>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}