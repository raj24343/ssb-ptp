import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function Examinations() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Examinations"
            subtitle="Examination policies and procedures"
            description="Comprehensive examination system ensuring academic rigor"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Examination System</h2>
              <p>
                SSB Puttaparthi follows a comprehensive examination system designed to evaluate 
                students' understanding, application, and analytical skills. Our assessment 
                methodology includes continuous evaluation and semester-end examinations.
              </p>
            </div>

            <div className="panel">
              <h2>Assessment Components</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Internal Assessment</h4>
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">40%</div>
                  <p className="text-sm">Continuous evaluation</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">End Semester</h4>
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">60%</div>
                  <p className="text-sm">Final examinations</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Projects</h4>
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">20%</div>
                  <p className="text-sm">Research & case studies</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Presentations</h4>
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">20%</div>
                  <p className="text-sm">Oral assessments</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Examination Rules & Guidelines</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Students must maintain 75% attendance to be eligible for examinations</li>
                <li>Hall tickets must be downloaded and brought for all examinations</li>
                <li>Electronic devices are strictly prohibited in examination halls</li>
                <li>Any form of malpractice will result in severe disciplinary action</li>
                <li>Re-evaluation facility is available within specified deadlines</li>
                <li>Supplementary examinations are conducted for eligible students</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Grading System</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Grade</th>
                      <th className="text-left p-3">Marks Range</th>
                      <th className="text-left p-3">Grade Points</th>
                      <th className="text-left p-3">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">A+</td>
                      <td className="p-3">90-100</td>
                      <td className="p-3">10</td>
                      <td className="p-3">Outstanding</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">A</td>
                      <td className="p-3">80-89</td>
                      <td className="p-3">9</td>
                      <td className="p-3">Excellent</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">B+</td>
                      <td className="p-3">70-79</td>
                      <td className="p-3">8</td>
                      <td className="p-3">Very Good</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">B</td>
                      <td className="p-3">60-69</td>
                      <td className="p-3">7</td>
                      <td className="p-3">Good</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">C</td>
                      <td className="p-3">50-59</td>
                      <td className="p-3">6</td>
                      <td className="p-3">Average</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}