import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function ActivitiesEvents() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Activities & Events"
            subtitle="Student activities and campus events"
            description="Vibrant campus life with diverse cultural and academic activities"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Campus Activities</h2>
              <p>
                SSB Puttaparthi offers a vibrant campus life with numerous activities and 
                events throughout the academic year. These activities provide students with 
                opportunities to develop leadership skills, explore their talents, and build 
                lasting friendships beyond the classroom.
              </p>
            </div>

            <div className="panel">
              <h2>Student Clubs & Organizations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Academic Clubs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Business & Management Club</li>
                    <li>Finance & Investment Club</li>
                    <li>Marketing & Advertising Club</li>
                    <li>Entrepreneurship Development Cell</li>
                    <li>Research & Innovation Club</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Clubs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Music & Dance Club</li>
                    <li>Drama & Theatre Society</li>
                    <li>Photography Club</li>
                    <li>Literary Society</li>
                    <li>Art & Craft Club</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Annual Events</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Annual Cultural Festival:</strong> Multi-day celebration with music, dance, and cultural programs</li>
                <li><strong>Business Summit:</strong> Management conclave with industry leaders and experts</li>
                <li><strong>Sports Day:</strong> Inter-class and inter-college sports competitions</li>
                <li><strong>Freshers' Welcome:</strong> Orientation and welcome program for new students</li>
                <li><strong>Alumni Meet:</strong> Annual gathering of graduates and networking events</li>
                <li><strong>Industry Interface:</strong> Corporate interaction sessions and career fairs</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Regular Activities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Weekly Programs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Guest lectures and seminars</li>
                    <li>Workshop and skill development sessions</li>
                    <li>Cultural evening programs</li>
                    <li>Sports tournaments and matches</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Special Occasions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Festival celebrations</li>
                    <li>National day commemorations</li>
                    <li>Educational trips and excursions</li>
                    <li>Community service initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Student Leadership</h2>
              <p>
                Students are encouraged to take leadership roles in organizing events and 
                managing clubs. The Student Council provides a platform for student 
                representation and helps in organizing various campus activities, fostering 
                leadership skills and democratic participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}