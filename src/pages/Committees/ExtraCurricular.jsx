import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function ExtraCurricular() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Extra Curricular Activities Committee"
            subtitle="Beyond academics - fostering holistic development"
            description="Organizing and promoting diverse extracurricular activities"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About Extra Curricular Activities Committee</h2>
              <p>
                The Extra Curricular Activities Committee is responsible for organizing 
                and coordinating various non-academic activities that contribute to the 
                holistic development of students. We ensure students have ample 
                opportunities to explore their talents, develop leadership skills, 
                and engage in meaningful cultural and social activities.
              </p>
            </div>

            <div className="panel">
              <h2>Activity Categories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">🎭 Cultural Activities</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Annual cultural fest</li>
                    <li>Dance and music competitions</li>
                    <li>Drama and theater events</li>
                    <li>Art and craft exhibitions</li>
                    <li>Literary competitions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🏆 Competitions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Inter-college competitions</li>
                    <li>Debate and elocution</li>
                    <li>Business plan contests</li>
                    <li>Technical competitions</li>
                    <li>Quiz competitions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🤝 Social Activities</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Community service projects</li>
                    <li>Environmental initiatives</li>
                    <li>Blood donation camps</li>
                    <li>Awareness campaigns</li>
                    <li>Volunteer programs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Student Clubs & Societies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">📚 Academic Clubs</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Management Club</li>
                    <li>Finance and Investment Club</li>
                    <li>Marketing Club</li>
                    <li>Entrepreneurship Cell</li>
                    <li>Research Society</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🎨 Interest-Based Clubs</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Photography Club</li>
                    <li>Music and Dance Society</li>
                    <li>Drama Club</li>
                    <li>Literary Society</li>
                    <li>Art and Craft Club</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Annual Events Calendar</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">🎪 Major Events</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>UTSAV:</strong> Annual Cultural Festival (March)</li>
                    <li><strong>SPECTRUM:</strong> Management Fest (February)</li>
                    <li><strong>BIZTECH:</strong> Business Competition (January)</li>
                    <li><strong>TALENT HUNT:</strong> Fresher's Competition (August)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">📅 Regular Activities</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Monthly cultural evenings</li>
                    <li>Weekly club meetings</li>
                    <li>Quarterly competitions</li>
                    <li>Special occasion celebrations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Annual Statistics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">45</div>
                  <p className="text-sm">Events Organized</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">400+</div>
                  <p className="text-sm">Student Participants</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">15</div>
                  <p className="text-sm">Active Clubs</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">85%</div>
                  <p className="text-sm">Student Participation Rate</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Benefits of Participation</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Personal Development</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Confidence building</li>
                    <li>Communication skills</li>
                    <li>Creative expression</li>
                    <li>Stress management</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">👥 Social Skills</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Teamwork abilities</li>
                    <li>Leadership qualities</li>
                    <li>Networking opportunities</li>
                    <li>Cultural awareness</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">💼 Career Benefits</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Resume enhancement</li>
                    <li>Interview advantages</li>
                    <li>Professional skills</li>
                    <li>Recognition certificates</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}