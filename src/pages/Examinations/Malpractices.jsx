import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function Malpractices() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Malpractices"
            subtitle="Examination misconduct policies and penalties"
            description="Guidelines on academic integrity and disciplinary measures"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Academic Integrity Policy</h2>
              <p>
                SSB Puttaparthi is committed to maintaining the highest standards of 
                academic integrity. Any form of examination malpractice is considered 
                a serious offense and will result in appropriate disciplinary action 
                as per institutional and university guidelines.
              </p>
            </div>

            <div className="panel">
              <h2>Definition of Malpractices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">During Examination</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Copying from another student's answer sheet</li>
                    <li>Carrying unauthorized materials into exam hall</li>
                    <li>Using electronic devices or calculators when prohibited</li>
                    <li>Communication with other students during exam</li>
                    <li>Impersonation or proxy attendance</li>
                    <li>Disturbing other candidates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Before/After Examination</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Submitting fake or forged documents</li>
                    <li>Bribing or attempting to influence examiners</li>
                    <li>Tampering with answer sheets</li>
                    <li>Leaking question papers</li>
                    <li>Fraudulent representation of academic records</li>
                    <li>Plagiarism in assignments and projects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Penalties and Consequences</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Category</th>
                      <th className="text-left p-3">Offense</th>
                      <th className="text-left p-3">Penalty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">Minor</td>
                      <td className="p-3">Carrying unauthorized material</td>
                      <td className="p-3">Warning + Cancellation of subject</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">Moderate</td>
                      <td className="p-3">Copying from others</td>
                      <td className="p-3">Cancellation of semester</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">Serious</td>
                      <td className="p-3">Impersonation</td>
                      <td className="p-3">Cancellation of year + Suspension</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">Severe</td>
                      <td className="p-3">Question paper leakage</td>
                      <td className="p-3">Expulsion from institution</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Prevention Measures</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>CCTV surveillance in all examination halls</li>
                <li>Random seating arrangements</li>
                <li>Multiple question paper sets</li>
                <li>Strict invigilation by trained faculty</li>
                <li>Metal detectors at entrance (when required)</li>
                <li>Anonymous reporting system for violations</li>
                <li>Regular awareness sessions on academic integrity</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Disciplinary Committee</h2>
              <p>
                A dedicated disciplinary committee comprising senior faculty members 
                investigates all reported cases of malpractice. The committee ensures 
                fair hearing to accused students and follows due process before 
                awarding penalties.
              </p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Committee Composition:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Chairperson: Dean Academic Affairs</li>
                  <li>Controller of Examinations</li>
                  <li>Two Senior Faculty Members</li>
                  <li>Student Representative (for student hearings)</li>
                </ul>
              </div>
            </div>

            <div className="panel">
              <h2>Appeal Process</h2>
              <p>
                Students who wish to appeal against disciplinary action can submit 
                their appeal to the Director within 15 days of penalty notification. 
                The appeal will be reviewed by a higher committee and final decision 
                will be communicated within 30 days.
              </p>
            </div>

            <div className="panel">
              <h2>Reporting Malpractices</h2>
              <p>If you witness any form of examination malpractice:</p>
              <div className="mt-4">
                <p><strong>Report To:</strong></p>
                <p>Email: integrity@ssbputtaparthi.edu.in</p>
                <p>Anonymous Helpline: +91-XXXX-XXXXXX</p>
                <p>All reports will be treated confidentially</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}