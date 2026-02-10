import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';

export default function Placements() {
  const placementStats = [
    { label: "Placement Rate", value: "95%", description: "Students successfully placed" },
    { label: "Average Package", value: "₹8.5 LPA", description: "Average annual package" },
    { label: "Highest Package", value: "₹24 LPA", description: "Highest package offered" },
    { label: "Recruiting Companies", value: "56+", description: "Industry partners" }
  ];

  const topRecruiters = [
    "TCS", "Infosys", "Wipro", "Accenture", "Deloitte",
    "HDFC Bank", "ICICI Bank", "Amazon", "Flipkart", "Capgemini",
    "HCL Technologies", "Tech Mahindra", "Cognizant", "IBM", "Microsoft"
  ];

  const placementProcess = [
    {
      step: "1",
      title: "Career Counseling",
      description: "Individual career guidance and industry insights"
    },
    {
      step: "2", 
      title: "Skill Development",
      description: "Technical and soft skills training programs"
    },
    {
      step: "3",
      title: "Resume Building", 
      description: "Professional resume and portfolio development"
    },
    {
      step: "4",
      title: "Mock Interviews",
      description: "Practice sessions with industry professionals"
    },
    {
      step: "5",
      title: "Campus Drives",
      description: "On-campus recruitment by partner companies"
    }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Placements"
            subtitle="Building successful careers since 2008"
            description="Our dedicated placement cell ensures excellent career opportunities for students across diverse industries"
          />
          
          <div className="space-y-section">
            {/* Placement Statistics */}
            <div className="panel">
              <h2 className="section-title-centered">Placement Highlights 2024</h2>
              <div className="grid-2-col-large">
                <div>
                  <p className="text-intro">
                    Sanskrithi School of Business has maintained an excellent placement record with strong industry partnerships and comprehensive career support services.
                  </p>
                  <div className="mt-8">
                    <h3 className="section-heading">Key Achievements</h3>
                    <ul className="bullet-list">
                      <li className="bullet-item">
                        <span className="bullet-icon">•</span>
                        Consistent 95%+ placement rate over the last 5 years
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-icon">•</span>
                        Strong alumni network of 1200+ professionals
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-icon">•</span>
                        Industry partnerships with Fortune 500 companies
                      </li>
                      <li className="bullet-item">
                        <span className="bullet-icon">•</span>
                        Pre-placement training and skill development programs
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="stats-grid">
                  {placementStats.map((stat, index) => (
                    <div key={index} className="stat-card">
                      <div className="stat-number text-2xl">{stat.value}</div>
                      <div className="font-semibold text-brand mb-2">{stat.label}</div>
                      <div className="stat-label">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Recruiters */}
            <div className="panel">
              <h2 className="section-title-centered">Our Recruiting Partners</h2>
              <p className="text-intro text-center mb-8">
                We partner with leading organizations across Banking, IT, Consulting, Manufacturing, and other sectors
              </p>
              <div className="bg-surface-1 p-6 rounded-lg">
                <div className="flex flex-wrap gap-4 justify-center">
                  {topRecruiters.map((company, index) => (
                    <div key={index} className="px-4 py-2 bg-surface-2 rounded-lg border border-light text-center">
                      <span className="font-medium text-primary">{company}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Placement Process */}
            <div className="panel">
              <h2 className="section-title-centered">Our Placement Process</h2>
              <p className="text-intro text-center mb-8">
                A comprehensive approach to career development and placement support
              </p>
              <div className="grid md:grid-cols-5 gap-6">
                {placementProcess.map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="font-semibold text-brand mb-2">{process.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Sectors */}
            <div className="grid-2-col">
              <div className="panel">
                <h3 className="section-heading">Industry Sectors</h3>
                <ul className="bullet-list">
                  <li className="bullet-item">
                    <span className="bullet-icon">•</span>
                    Banking & Financial Services
                  </li>
                  <li className="bullet-item">
                    <span className="bullet-icon">•</span>
                    Information Technology
                  </li>
                  <li className="bullet-item">
                    <span className="bullet-icon">•</span>
                    Consulting & Advisory
                  </li>
                  <li className="bullet-item">
                    <span className="bullet-icon">•</span>
                    E-commerce & Retail
                  </li>
                  <li className="bullet-item">
                    <span className="bullet-icon">•</span>
                    Manufacturing & Operations
                  </li>
                </ul>
              </div>

              <div className="panel">
                <h3 className="section-heading">Career Support Services</h3>
                <ul className="bullet-list">
                  <li className="bullet-item">
                    <span className="bullet-icon">•</span>
                    Industry mentorship programs
                  </li>
                  <li className="bullet-item">
                    <span className="bullet-icon">•</span>
                    Professional networking events
                  </li>
                  <li className="bullet-item">
                    <span className="bullet-icon">•</span>
                    Alumni connect sessions
                  </li>
                  <li className="bullet-item">
                    <span className="bullet-icon">•</span>
                    Entrepreneurship development
                  </li>
                  <li className="bullet-item">
                    <span className="bullet-icon">•</span>
                    International career opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}