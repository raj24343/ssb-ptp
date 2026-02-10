import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Building2, BookOpen, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function FeePayment() {
  const [formData, setFormData] = useState({
    studentName: '',
    registrationNo: '',
    program: '',
    semester: '',
    amount: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to payment gateway - integrate with your payment provider
    alert('You will be redirected to the secure payment gateway. Connect your payment API here.');
  };

  const programs = ['MBA', 'PGDM', 'BBA'];
  const semesters = ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester'];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Online Fee Payment"
            subtitle="Secure & Easy"
            description="Pay your fees securely through our integrated payment portal"
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {/* Payment Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(246,248,250,0.08) 0%, rgba(246,248,250,0.04) 100%)',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 20px 60px -15px rgba(0,0,0,0.3)'
                }}
              >
                <div
                  className="px-8 py-6 border-b"
                  style={{ borderColor: 'var(--border-light)', background: 'linear-gradient(90deg, var(--brand) 0%, var(--brand-dark) 100%)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Fee Payment Portal</h2>
                      <p className="text-white/80 text-sm">Enter your details to proceed</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Registration Number *</label>
                      <input
                        type="text"
                        name="registrationNo"
                        value={formData.registrationNo}
                        onChange={handleChange}
                        required
                        placeholder="e.g., SSB2024001"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Program *</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all"
                      >
                        <option value="">Select Program</option>
                        {programs.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Semester *</label>
                      <select
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all"
                      >
                        <option value="">Select Semester</option>
                        {semesters.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Amount (₹) *</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      min="1"
                      placeholder="Enter amount to pay"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-soft)] mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--text-muted)]">
                      Your payment is secured with 256-bit SSL encryption. We never store your card details.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 py-4 px-6 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[var(--brand)]/25 transition-all duration-300 hover:scale-[1.02]"
                  >
                    Proceed to Pay
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar - Info & Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <h3 className="font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[var(--brand)]" />
                  Payment Methods
                </h3>
                <ul className="space-y-3 text-sm text-[var(--text-soft)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Credit / Debit Cards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Net Banking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    UPI (GPay, PhonePe, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Wallet Payments
                  </li>
                </ul>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(52,73,115,0.15) 0%, rgba(52,73,115,0.05) 100%)',
                  border: '1px solid rgba(52,73,115,0.3)'
                }}
              >
                <h3 className="font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[var(--accent)]" />
                  Need Help?
                </h3>
                <p className="text-sm text-[var(--text-soft)] mb-4">
                  For fee structure, payment issues, or receipt download, visit our admissions office or submit an inquiry.
                </p>
                <a
                  href="/inquiry"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)]/20 text-[var(--accent)] font-medium text-sm hover:bg-[var(--accent)]/30 transition-colors"
                >
                  Submit Inquiry
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-600/5 border border-green-500/20">
                <h3 className="font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  Safe & Secure
                </h3>
                <p className="text-sm text-[var(--text-soft)]">
                  PCI-DSS compliant payment gateway. Your transactions are protected with industry-standard security.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
