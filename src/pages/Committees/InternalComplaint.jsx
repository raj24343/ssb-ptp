import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function InternalComplaint() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Internal Complaint Committee"
            subtitle="Addressing workplace harassment and discrimination"
            description="Ensuring a safe and respectful environment for all"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About Internal Complaint Committee</h2>
              <p>
                The Internal Complaint Committee (ICC) is constituted in accordance with 
                the Sexual Harassment of Women at Workplace (Prevention, Prohibition and 
                Redressal) Act, 2013. The committee ensures a safe and secure working 
                environment free from sexual harassment for all members of the institution.
              </p>
            </div>

            <div className="panel">
              <h2>Committee Composition</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Position</th>
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">Designation</th>
                      <th className="text-left p-3">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Presiding Officer</td>
                      <td className="p-3">Dr. [Name]</td>
                      <td className="p-3">Senior Faculty (Woman)</td>
                      <td className="p-3">+91-XXXX-XXXXXX</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Internal Member</td>
                      <td className="p-3">Prof. [Name]</td>
                      <td className="p-3">Faculty Representative</td>
                      <td className="p-3">+91-XXXX-XXXXXX</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">External Member</td>
                      <td className="p-3">Ms. [Name]</td>
                      <td className="p-3">NGO Representative</td>
                      <td className="p-3">+91-XXXX-XXXXXX</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Student Representative</td>
                      <td className="p-3">[Student Name]</td>
                      <td className="p-3">Student Council Member</td>
                      <td className="p-3">+91-XXXX-XXXXXX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>What Constitutes Sexual Harassment?</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                  <li>Unwelcome physical contact and advances</li>
                  <li>Demand or request for sexual favors</li>
                  <li>Sexually colored remarks</li>
                  <li>Showing pornography</li>
                  <li>Any other unwelcome physical, verbal, or non-verbal conduct of sexual nature</li>
                </ul>
              </div>
            </div>

            <div className="panel">
              <h2>Complaint Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Filing a Complaint</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Submit written complaint within 3 months of incident</li>
                    <li>Provide detailed account of the incident</li>
                    <li>Submit supporting documents if any</li>
                    <li>Complaint can be filed anonymously</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Investigation Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Acknowledgment within 7 days</li>
                    <li>Investigation within 90 days</li>
                    <li>Fair hearing to all parties</li>
                    <li>Final report and recommendations</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Confidential Reporting</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">📧 Email Reporting</h4>
                  <p className="text-sm mb-2">icc@ssbputtaparthi.edu.in</p>
                  <p className="text-xs">Confidential and secure reporting</p>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📞 Helpline</h4>
                  <p className="text-sm mb-2">+91-XXXX-XXXXXX</p>
                  <p className="text-xs">24/7 confidential helpline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}