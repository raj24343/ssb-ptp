import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function NCC() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="National Cadet Corps (NCC)"
            subtitle="Unity and Discipline"
            description="Building disciplined citizens and future leaders through military training and character development"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About NCC</h2>
              <p>
                The National Cadet Corps (NCC) is a voluntary organization that aims to develop character, 
                comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless 
                service among young citizens. At SSB Puttaparthi, our NCC unit actively promotes these values 
                through various training programs and activities.
              </p>
            </div>

            <div className="panel">
              <h2>NCC Motto</h2>
              <div className="text-center bg-gradient p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold">"Unity and Discipline"</h3>
                <p className="mt-2">एकता और अनुशासन</p>
              </div>
            </div>

            <div className="panel">
              <h2>Training Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h3>Drill and Discipline</h3>
                  <p>Regular drill sessions to develop discipline, coordination, and team spirit among cadets.</p>
                </div>
                <div className="card">
                  <h3>Map Reading & Navigation</h3>
                  <p>Training in map reading, compass use, and basic navigation techniques for outdoor activities.</p>
                </div>
                <div className="card">
                  <h3>First Aid Training</h3>
                  <p>Essential first aid skills and emergency response training for community service.</p>
                </div>
                <div className="card">
                  <h3>Adventure Sports</h3>
                  <p>Rock climbing, trekking, and other adventure activities to build courage and confidence.</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Activities & Events</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-[var(--brand)] pl-4">
                  <h4 className="font-semibold">Annual Training Camps</h4>
                  <p>Intensive training camps combining military exercises, social service, and character building activities.</p>
                </div>
                <div className="border-l-4 border-[var(--brand)] pl-4">
                  <h4 className="font-semibold">Republic Day & Independence Day Parades</h4>
                  <p>Participation in national celebrations showcasing drill performances and patriotic spirit.</p>
                </div>
                <div className="border-l-4 border-[var(--brand)] pl-4">
                  <h4 className="font-semibold">Community Service</h4>
                  <p>Blood donation drives, cleanliness campaigns, and disaster relief activities in local communities.</p>
                </div>
                <div className="border-l-4 border-[var(--brand)] pl-4">
                  <h4 className="font-semibold">Leadership Development</h4>
                  <p>Special programs to develop leadership qualities and communication skills among cadets.</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Achievements</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">150+</div>
                  <p className="text-sm">Active Cadets</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">25+</div>
                  <p className="text-sm">Certified Officers</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">50+</div>
                  <p className="text-sm">Annual Activities</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Join NCC</h2>
              <p>
                Open to all students who wish to serve the nation and develop leadership qualities. 
                No prior military experience required - just enthusiasm and commitment to serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}