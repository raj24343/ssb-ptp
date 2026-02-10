import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function RecountingProcedure() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Recounting & Re-Evaluation Procedure"
            subtitle="Process for result verification and re-evaluation"
            description="Transparent procedures for academic result review"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Overview</h2>
              <p>
                Students who are not satisfied with their examination results have the 
                option to apply for recounting or re-evaluation of their answer scripts. 
                These procedures ensure transparency and fairness in the evaluation process 
                while maintaining academic integrity.
              </p>
            </div>

            <div className="panel">
              <h2>Recounting Procedure</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What is Recounting?</h4>
                  <p className="text-sm">
                    Recounting involves verification of marks awarded for each question 
                    and ensuring proper addition of marks without re-evaluation of answers.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Application Process:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Submit application within 15 days of result declaration</li>
                    <li>Pay prescribed fee for each subject</li>
                    <li>Provide copy of mark sheet and hall ticket</li>
                    <li>Fill complete application form with accurate details</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Fee Structure:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Per subject recounting: ₹500</li>
                    <li>Fee refundable if error found in calculation</li>
                    <li>Payment via demand draft or online portal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Re-Evaluation Procedure</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What is Re-Evaluation?</h4>
                  <p className="text-sm">
                    Re-evaluation involves complete re-assessment of answer scripts 
                    by a different examiner to ensure accurate evaluation of responses.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Eligibility Criteria:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Students who have failed in any subject</li>
                    <li>Students seeking grade improvement</li>
                    <li>Minimum attendance requirement must be met</li>
                    <li>Application within stipulated time frame</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Re-Evaluation Process:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Submit application with required documents</li>
                    <li>Pay re-evaluation fee for each subject</li>
                    <li>Scripts sent to external examiner for assessment</li>
                    <li>New marks communicated within 30 days</li>
                    <li>Better of original or re-evaluated marks considered</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Timeline and Deadlines</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Application Deadlines</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Recounting: 15 days from result date</li>
                    <li>Re-evaluation: 15 days from result date</li>
                    <li>No extensions beyond deadline</li>
                    <li>Public holidays excluded from count</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Processing Time</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Recounting: 10 working days</li>
                    <li>Re-evaluation: 30 working days</li>
                    <li>Results communicated via email/SMS</li>
                    <li>Updated certificates issued if applicable</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Important Guidelines</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Only one application per subject per examination</li>
                <li>Incomplete applications will be rejected</li>
                <li>Fee non-refundable except in case of calculation errors</li>
                <li>Results of re-evaluation are final and binding</li>
                <li>Original certificates must be surrendered if marks change</li>
                <li>Process cannot be used for improving already passed subjects</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Contact for Assistance</h2>
              <p>For queries regarding recounting and re-evaluation:</p>
              <div className="mt-4">
                <p><strong>Examination Section</strong></p>
                <p>Email: revaluation@ssbputtaparthi.edu.in</p>
                <p>Phone: +91-XXXX-XXXXXX</p>
                <p>Timing: Monday to Friday, 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}