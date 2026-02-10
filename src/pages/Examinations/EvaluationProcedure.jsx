import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function EvaluationProcedure() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Evaluation Procedure"
            subtitle="Assessment and evaluation methodology"
            description="Comprehensive evaluation system ensuring fair assessment"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Evaluation Philosophy</h2>
              <p>
                Our evaluation system is designed to assess students' understanding, 
                application skills, and analytical abilities comprehensively. We follow 
                a transparent and standardized evaluation procedure that ensures fairness 
                and consistency across all subjects and programs.
              </p>
            </div>

            <div className="panel">
              <h2>Assessment Components</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Internal Assessment (40%)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Mid-term examinations (15%)</li>
                    <li>Assignments and projects (10%)</li>
                    <li>Class participation (5%)</li>
                    <li>Presentation and viva (5%)</li>
                    <li>Attendance (5%)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">External Assessment (60%)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>End semester examination (60%)</li>
                    <li>Written examination format</li>
                    <li>3-hour duration per subject</li>
                    <li>External evaluation by qualified examiners</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Grading System</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Grade</th>
                      <th className="text-left p-3">Grade Points</th>
                      <th className="text-left p-3">Marks Range</th>
                      <th className="text-left p-3">Performance Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">O</td>
                      <td className="p-3">10</td>
                      <td className="p-3">90-100</td>
                      <td className="p-3">Outstanding</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">A+</td>
                      <td className="p-3">9</td>
                      <td className="p-3">80-89</td>
                      <td className="p-3">Excellent</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">A</td>
                      <td className="p-3">8</td>
                      <td className="p-3">70-79</td>
                      <td className="p-3">Very Good</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">B+</td>
                      <td className="p-3">7</td>
                      <td className="p-3">60-69</td>
                      <td className="p-3">Good</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">B</td>
                      <td className="p-3">6</td>
                      <td className="p-3">55-59</td>
                      <td className="p-3">Above Average</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">C</td>
                      <td className="p-3">5</td>
                      <td className="p-3">50-54</td>
                      <td className="p-3">Average</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">F</td>
                      <td className="p-3">0</td>
                      <td className="p-3">Below 50</td>
                      <td className="p-3">Fail</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Evaluation Process</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Answer scripts are coded to ensure anonymous evaluation</li>
                <li>External examiners are appointed for unbiased assessment</li>
                <li>Double valuation is conducted for major examinations</li>
                <li>Moderation committee reviews significant grade variations</li>
                <li>Final marks are computed using weighted average method</li>
                <li>Results are verified before publication</li>
              </ol>
            </div>

            <div className="panel">
              <h2>Quality Assurance</h2>
              <p>
                We maintain strict quality control measures including peer review of 
                question papers, standardized marking schemes, and regular training 
                for evaluators to ensure consistent and fair assessment across all 
                subjects and semesters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}