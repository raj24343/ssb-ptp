import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function ELearning() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="e Learning"
            subtitle="Online learning resources and platforms"
            description="Enhance your skills with our comprehensive digital learning ecosystem"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Digital Learning Platform</h2>
              <p>
                Our e-learning ecosystem provides students with access to cutting-edge 
                online courses, industry certifications, and skill development programs. 
                These resources complement classroom learning and help students stay 
                current with industry trends and technologies.
              </p>
            </div>

            <div className="panel">
              <h2>Platform Partnerships</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🎓 Coursera for Business</h4>
                  <p className="text-sm mb-3">Access to world-class university courses and specializations</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Business and Management specializations</li>
                    <li>Data Science and Analytics tracks</li>
                    <li>Digital Marketing certifications</li>
                    <li>Professional certificates from top universities</li>
                    <li>Hands-on projects and peer interactions</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">💻 LinkedIn Learning</h4>
                  <p className="text-sm mb-3">Professional skill development and career advancement</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Leadership and management skills</li>
                    <li>Technical skills for business professionals</li>
                    <li>Communication and soft skills</li>
                    <li>Industry-specific knowledge tracks</li>
                    <li>Learning path recommendations</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📊 Udemy Business</h4>
                  <p className="text-sm mb-3">Practical skills for immediate application</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Excel and data analysis mastery</li>
                    <li>Digital marketing strategies</li>
                    <li>Project management methodologies</li>
                    <li>Financial modeling and analysis</li>
                    <li>Entrepreneurship and innovation</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🏛️ edX for Business</h4>
                  <p className="text-sm mb-3">Academic rigor meets industry relevance</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>MicroMasters programs</li>
                    <li>Professional education certificates</li>
                    <li>Technology and innovation courses</li>
                    <li>Global business perspectives</li>
                    <li>Research-based learning approaches</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Custom Learning Tracks</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">🎯 Placement Preparation Track</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Interview skills and techniques</li>
                    <li>Resume building workshops</li>
                    <li>Industry-specific preparation</li>
                    <li>Aptitude and reasoning tests</li>
                    <li>Group discussion strategies</li>
                    <li>Personal branding and networking</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">📈 Business Analytics Track</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Statistical analysis fundamentals</li>
                    <li>Excel for data analysis</li>
                    <li>Power BI and Tableau</li>
                    <li>Python/R for business analytics</li>
                    <li>Machine learning basics</li>
                    <li>Business intelligence tools</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🚀 Digital Marketing Track</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Search Engine Optimization</li>
                    <li>Social media marketing</li>
                    <li>Google Ads and Analytics</li>
                    <li>Content marketing strategies</li>
                    <li>Email marketing automation</li>
                    <li>Conversion optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Industry Certifications Available</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Technology Certifications</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ <strong>Google Analytics Certified</strong> - Web analytics expertise</li>
                    <li>✓ <strong>Microsoft Office Specialist</strong> - Advanced Office skills</li>
                    <li>✓ <strong>Salesforce Administrator</strong> - CRM platform mastery</li>
                    <li>✓ <strong>HubSpot Content Marketing</strong> - Inbound marketing strategies</li>
                    <li>✓ <strong>Tableau Desktop Specialist</strong> - Data visualization skills</li>
                    <li>✓ <strong>AWS Cloud Practitioner</strong> - Cloud computing fundamentals</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Business Certifications</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ <strong>Project Management Professional (PMP)</strong> - Project leadership</li>
                    <li>✓ <strong>Six Sigma Green Belt</strong> - Process improvement</li>
                    <li>✓ <strong>Digital Marketing Institute</strong> - Comprehensive digital marketing</li>
                    <li>✓ <strong>Financial Risk Manager (FRM)</strong> - Risk management expertise</li>
                    <li>✓ <strong>Certified Management Accountant</strong> - Financial accounting</li>
                    <li>✓ <strong>Scrum Master Certification</strong> - Agile methodology</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Learning Management System (LMS)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">📚 Course Management</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Personalized learning dashboard</li>
                    <li>Progress tracking and analytics</li>
                    <li>Deadline reminders and notifications</li>
                    <li>Certificate management system</li>
                    <li>Learning path recommendations</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">👥 Collaborative Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Study groups and peer discussions</li>
                    <li>Instructor and mentor interactions</li>
                    <li>Project collaboration tools</li>
                    <li>Knowledge sharing forums</li>
                    <li>Video conferencing integration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Faculty-Led Online Modules</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Core Business Skills</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Business Communication Excellence</li>
                    <li>Critical Thinking and Problem Solving</li>
                    <li>Leadership and Team Management</li>
                    <li>Negotiation and Conflict Resolution</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Industry Insights</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Emerging Business Trends</li>
                    <li>Case Study Analysis Techniques</li>
                    <li>Global Business Perspectives</li>
                    <li>Innovation and Entrepreneurship</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Professional Development</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Career Planning and Development</li>
                    <li>Personal Branding Strategies</li>
                    <li>Networking and Relationship Building</li>
                    <li>Work-Life Balance Management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>E-Learning Statistics & Achievements</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">98%</div>
                  <p className="text-sm">Student Enrollment Rate</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">85%</div>
                  <p className="text-sm">Course Completion Rate</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">1200+</div>
                  <p className="text-sm">Certificates Earned</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">15,000+</div>
                  <p className="text-sm">Learning Hours Completed</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Mobile Learning App</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📱 SSB Learn Mobile App</h4>
                  <p className="text-sm mb-3">Learn on-the-go with our dedicated mobile application</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Offline content download and access</li>
                    <li>Push notifications for deadlines</li>
                    <li>Progress synchronization across devices</li>
                    <li>Interactive quizzes and assessments</li>
                    <li>Video streaming with adaptive quality</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🔔 Smart Notifications</h4>
                  <p className="text-sm mb-3">Stay engaged with intelligent reminder system</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Personalized learning reminders</li>
                    <li>Course deadline notifications</li>
                    <li>New content availability alerts</li>
                    <li>Peer interaction notifications</li>
                    <li>Achievement and milestone updates</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Support and Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Technical Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>24/7 platform technical assistance</li>
                    <li>Video tutorials and user guides</li>
                    <li>Live chat support during business hours</li>
                    <li>Regular platform updates and maintenance</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Academic Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Faculty mentorship for course selection</li>
                    <li>Learning path guidance and counseling</li>
                    <li>Peer study groups and forums</li>
                    <li>Industry expert webinars and sessions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Getting Started</h2>
              <p>To access our e-learning platform and resources:</p>
              <div className="mt-4">
                <p><strong>E-Learning Portal:</strong> <a href="#" className="text-[var(--brand)] hover:underline">learn.ssbputtaparthi.edu.in</a></p>
                <p><strong>Student Credentials:</strong> Use your student ID and portal password</p>
                <p><strong>Mobile App:</strong> Download "SSB Learn" from App Store/Play Store</p>
                <p><strong>Support Email:</strong> elearning@ssbputtaparthi.edu.in</p>
                <p><strong>Help Desk:</strong> +91-XXXX-XXXXXX (Mon-Fri, 9 AM - 6 PM)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}