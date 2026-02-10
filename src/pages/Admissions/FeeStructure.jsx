import React, { useState } from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

export default function FeeStructure() {
  const [selectedProgram, setSelectedProgram] = useState('mba');

  const feeStructure = {
    mba: {
      title: "MBA Program",
      duration: "2 Years",
      totalFee: "₹1,26,000",
      yearlyFee: "₹63,000",
      breakdown: [
        { component: "Tuition Fee", year1: "₹50,000", year2: "₹50,000", total: "₹1,00,000" },
        { component: "Development Fee", year1: "₹8,000", year2: "₹8,000", total: "₹16,000" },
        { component: "Library Fee", year1: "₹2,000", year2: "₹2,000", total: "₹4,000" },
        { component: "Exam Fee", year1: "₹2,000", year2: "₹2,000", total: "₹4,000" },
        { component: "Lab Fee", year1: "₹1,000", year2: "₹1,000", total: "₹2,000" }
      ]
    },
    pgdm: {
      title: "PGDM Program", 
      duration: "2 Years",
      totalFee: "₹1,40,000",
      yearlyFee: "₹70,000",
      breakdown: [
        { component: "Tuition Fee", year1: "₹55,000", year2: "₹55,000", total: "₹1,10,000" },
        { component: "Development Fee", year1: "₹10,000", year2: "₹10,000", total: "₹20,000" },
        { component: "Library Fee", year1: "₹2,500", year2: "₹2,500", total: "₹5,000" },
        { component: "Exam Fee", year1: "₹2,000", year2: "₹2,000", total: "₹4,000" },
        { component: "Lab Fee", year1: "₹500", year2: "₹500", total: "₹1,000" }
      ]
    }
  };

  const additionalFees = [
    { item: "Application Fee", amount: "₹1,000", note: "Non-refundable, paid once during application" },
    { item: "Admission Fee", amount: "₹5,000", note: "Paid upon confirmation of admission" },
    { item: "Caution Deposit", amount: "₹10,000", note: "Refundable at the end of the program" },
    { item: "Hostel Fee (per year)", amount: "₹45,000", note: "Includes accommodation and meals" },
    { item: "Transport Fee (per year)", amount: "₹12,000", note: "Optional, based on route" }
  ];

  const scholarships = [
    { name: "Sai Prudent Scholarship", coverage: "Up to 50%", criteria: "Merit-based, entrance exam score" },
    { name: "Need-based Assistance", coverage: "25-30%", criteria: "Family income below ₹3 lakhs" },
    { name: "Sports Excellence", coverage: "20%", criteria: "State/National level sports achievements" },
    { name: "Academic Topper", coverage: "15%", criteria: "Above 85% in graduation" }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Fee Structure"
            subtitle="Investment in Your Future"
            description="Transparent and competitive fee structure for all programs"
          />
          
          <div className="space-y-section">
            {/* Program Selection */}
            <Card>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-6">Select Program</h2>
                <div className="flex justify-center gap-6">
                  <button
                    onClick={() => setSelectedProgram('mba')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedProgram === 'mba'
                        ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white shadow-lg'
                        : 'bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border-light)] hover:bg-[var(--surface-3)]'
                    }`}
                  >
                    MBA Program
                  </button>
                  <button
                    onClick={() => setSelectedProgram('pgdm')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedProgram === 'pgdm'
                        ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white shadow-lg'
                        : 'bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border-light)] hover:bg-[var(--surface-3)]'
                    }`}
                  >
                    PGDM Program
                  </button>
                </div>
              </div>
            </Card>

            {/* Fee Breakdown */}
            <Card>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  {feeStructure[selectedProgram].title} - Fee Breakdown
                </h2>
                <div className="flex items-center gap-6">
                  <span className="text-[var(--text-soft)]">Duration: {feeStructure[selectedProgram].duration}</span>
                  <span className="text-[var(--text-soft)]">Total Fee: <span className="font-bold text-[var(--text)]">{feeStructure[selectedProgram].totalFee}</span></span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-4 text-[var(--text)] font-semibold">Fee Component</th>
                      <th className="text-center p-4 text-[var(--text)] font-semibold">Year 1</th>
                      <th className="text-center p-4 text-[var(--text)] font-semibold">Year 2</th>
                      <th className="text-center p-4 text-[var(--text)] font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure[selectedProgram].breakdown.map((fee, i) => (
                      <tr key={i} className="border-b border-[var(--border-light)] hover:bg-[var(--surface-1)] transition-colors">
                        <td className="p-4 text-[var(--text)]">{fee.component}</td>
                        <td className="p-4 text-center text-[var(--text-soft)]">{fee.year1}</td>
                        <td className="p-4 text-center text-[var(--text-soft)]">{fee.year2}</td>
                        <td className="p-4 text-center font-semibold text-[var(--text)]">{fee.total}</td>
                      </tr>
                    ))}
                    <tr className="bg-[var(--surface-1)] font-bold">
                      <td className="p-4 text-[var(--text)]">Total Program Fee</td>
                      <td className="p-4 text-center text-[var(--text)]">{feeStructure[selectedProgram].yearlyFee}</td>
                      <td className="p-4 text-center text-[var(--text)]">{feeStructure[selectedProgram].yearlyFee}</td>
                      <td className="p-4 text-center text-2xl text-[var(--text)]">{feeStructure[selectedProgram].totalFee}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Additional Fees */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Additional Fees & Charges
              </h2>
              <div className="grid gap-4">
                {additionalFees.map((fee, i) => (
                  <div key={i} className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-1">{fee.item}</h4>
                        <p className="text-[var(--text-soft)] text-sm">{fee.note}</p>
                      </div>
                      <span className="font-bold text-[var(--text)] text-lg">{fee.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Payment Schedule */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                <span className="text-3xl">📅</span>
                Payment Schedule
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Payment Options</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                        <span className="text-[var(--accent)]">💳</span>
                        Annual Payment
                      </h4>
                      <p className="text-[var(--text-soft)]">Pay full year fee at once and get 5% discount</p>
                    </div>
                    <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                        <span className="text-[var(--accent)]">📊</span>
                        Semester-wise Payment
                      </h4>
                      <p className="text-[var(--text-soft)]">Pay in 4 installments over 2 years</p>
                    </div>
                    <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                        <span className="text-[var(--accent)]">🏦</span>
                        Education Loan Support
                      </h4>
                      <p className="text-[var(--text-soft)]">Assistance with education loan processing</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    {[
                      "Online Payment Gateway (Credit/Debit Cards)",
                      "Net Banking (All Major Banks)",
                      "UPI Payments (GPay, PhonePe, Paytm)",
                      "Demand Draft (In favor of Sanskrithi School of Business)",
                      "Bank Transfer (NEFT/RTGS)"
                    ].map((method, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--surface-1)]">
                        <span className="text-[var(--accent)]">✓</span>
                        <span className="text-[var(--text)]">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Scholarships */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                Available Scholarships
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {scholarships.map((scholarship, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-[var(--text)] text-lg">{scholarship.name}</h4>
                      <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-bold">
                        {scholarship.coverage}
                      </span>
                    </div>
                    <p className="text-[var(--text-soft)]">{scholarship.criteria}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[var(--brand)]/10 to-[var(--brand-light)]/10 border border-[var(--brand)]/20">
                <p className="text-[var(--text)] font-medium mb-2">💡 Scholarship Application Process</p>
                <p className="text-[var(--text-soft)] text-sm">
                  Scholarship applications are processed along with regular admissions. Submit required documents during the application process.
                  Results are declared with admission offers.
                </p>
              </div>
            </Card>

            {/* Bank Details & Contact */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏦</span>
                  Bank Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-[var(--text-soft)]">Account Name</p>
                    <p className="text-[var(--text)] font-medium">Sanskrithi School of Business</p>
                  </div>
                  <div>
                    <p className="text-[var(--text-soft)]">Bank Name</p>
                    <p className="text-[var(--text)] font-medium">State Bank of India</p>
                  </div>
                  <div>
                    <p className="text-[var(--text-soft)]">Branch</p>
                    <p className="text-[var(--text)] font-medium">Puttaparthi Branch</p>
                  </div>
                  <div>
                    <p className="text-[var(--text-soft)]">Account Number</p>
                    <p className="text-[var(--text)] font-medium">XXXX-XXXX-XXXX</p>
                  </div>
                  <div>
                    <p className="text-[var(--text-soft)]">IFSC Code</p>
                    <p className="text-[var(--text)] font-medium">SBINXXXXXX</p>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                  <span className="text-2xl">📞</span>
                  Fee Enquiries
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[var(--text-soft)]">Accounts Office</p>
                    <p className="text-[var(--text)] font-medium">accounts@sanskrithibschool.com</p>
                  </div>
                  <div>
                    <p className="text-[var(--text-soft)]">Phone</p>
                    <p className="text-[var(--text)] font-medium">+91 8555-288838</p>
                  </div>
                  <div>
                    <p className="text-[var(--text-soft)]">Office Hours</p>
                    <p className="text-[var(--text)] font-medium">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href="/inquiry" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                  >
                    Contact Us
                  </a>
                </div>
              </Card>
            </div>

            {/* Important Notes */}
            <Card className="bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                Important Notes
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">•</span>
                  <p className="text-[var(--text-soft)]">Fee structure is subject to annual revision and may change for subsequent academic years.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">•</span>
                  <p className="text-[var(--text-soft)]">All fees must be paid before the commencement of each academic year/semester.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">•</span>
                  <p className="text-[var(--text-soft)]">Late payment charges of ₹500 per month will be applicable for delayed payments.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">•</span>
                  <p className="text-[var(--text-soft)]">Refund policy applies as per institution guidelines. Please refer to the admission brochure for detailed terms.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--accent)] mt-1">•</span>
                  <p className="text-[var(--text-soft)]">GST is applicable as per government regulations and will be added to the fee structure.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}