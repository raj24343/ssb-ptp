import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function ExaminationDownloads() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Downloads"
            subtitle="Application forms and certificate downloads"
            description="Essential forms and documents for examination-related processes"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Available Downloads</h2>
              <p>
                Download various application forms, certificates, and documents 
                related to examinations and academic records. All forms are available 
                in PDF format and can be filled either digitally or manually.
              </p>
            </div>

            <div className="panel">
              <h2>Certificate Applications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">📄 Provisional Certificate</h4>
                  <p className="text-sm mb-3">Temporary certificate until original is issued</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Required for job applications</li>
                    <li>Valid for 6 months</li>
                    <li>Processing time: 7 days</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📄 Duplicate Certificate</h4>
                  <p className="text-sm mb-3">Replacement for lost or damaged certificates</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>FIR copy required for lost certificates</li>
                    <li>Affidavit on stamp paper</li>
                    <li>Processing time: 15 days</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📄 Migration Certificate</h4>
                  <p className="text-sm mb-3">For transfer to other institutions</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Required for higher studies</li>
                    <li>Original degree mandatory</li>
                    <li>Processing time: 10 days</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📄 Character Certificate</h4>
                  <p className="text-sm mb-3">Conduct and character verification</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Required for various applications</li>
                    <li>Valid for one year</li>
                    <li>Processing time: 5 days</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Academic Record Applications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">📊 Transcript Application</h4>
                  <p className="text-sm mb-3">Official academic record with grades</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Semester-wise grade details</li>
                    <li>University sealed envelope</li>
                    <li>Multiple copies available</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📊 CGPA to Percentage Conversion</h4>
                  <p className="text-sm mb-3">Official percentage equivalent certificate</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>University approved formula</li>
                    <li>Required for competitive exams</li>
                    <li>Verified by academic office</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📊 Grade Card Duplicate</h4>
                  <p className="text-sm mb-3">Replacement for lost semester grade cards</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Individual semester cards</li>
                    <li>All semester cards bundle</li>
                    <li>Official university format</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📊 Consolidated Mark Sheet</h4>
                  <p className="text-sm mb-3">Complete academic performance summary</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>All semester marks in one document</li>
                    <li>CGPA and final grade</li>
                    <li>Official verification seal</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Thesis and Project Submissions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">📝 Thesis Submission Form</h4>
                  <p className="text-sm mb-3">Final thesis submission for MBA/PGDM</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Supervisor approval required</li>
                    <li>Plagiarism report mandatory</li>
                    <li>Soft and hard copy submission</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📝 Project Report Submission</h4>
                  <p className="text-sm mb-3">Project report submission for all programs</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Faculty guide signature</li>
                    <li>Industry mentor approval</li>
                    <li>Format guidelines compliance</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📝 Thesis Defense Application</h4>
                  <p className="text-sm mb-3">Application for thesis defense scheduling</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Committee member selection</li>
                    <li>Defense date preference</li>
                    <li>Presentation requirements</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📝 Internship Report Submission</h4>
                  <p className="text-sm mb-3">Summer internship report submission</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Company supervisor evaluation</li>
                    <li>Academic supervisor approval</li>
                    <li>Learning outcome assessment</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Examination Related Forms</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Re-evaluation Application</h4>
                  <p className="text-sm mb-3">Request for answer script re-evaluation</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Per subject application</li>
                    <li>Fee payment required</li>
                    <li>15-day deadline</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Supplementary Exam Form</h4>
                  <p className="text-sm mb-3">Registration for failed subject examination</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Failed subjects only</li>
                    <li>Exam fee payment</li>
                    <li>Hall ticket generation</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Improvement Exam Form</h4>
                  <p className="text-sm mb-3">Grade improvement examination application</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Passed subjects improvement</li>
                    <li>Better grade consideration</li>
                    <li>One-time opportunity</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Medical Certificate Format</h4>
                  <p className="text-sm mb-3">Medical absence during examinations</p>
                  <ul className="list-disc list-inside space-y-1 text-xs mb-3">
                    <li>Registered doctor certificate</li>
                    <li>Hospital/clinic seal required</li>
                    <li>Special examination provision</li>
                  </ul>
                  <button className="text-[var(--brand)] text-sm hover:underline">Download Form</button>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Submission Guidelines</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Fill all forms completely and accurately</li>
                <li>Attach required supporting documents</li>
                <li>Pay applicable fees before submission</li>
                <li>Submit within specified deadlines</li>
                <li>Keep copies of submitted applications</li>
                <li>Follow up for status updates if required</li>
                <li>Collect completed certificates/documents personally</li>
              </ul>
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
}