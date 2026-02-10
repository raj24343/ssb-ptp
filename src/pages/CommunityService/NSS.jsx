import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function NSS() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="National Service Scheme (NSS)"
            subtitle="Not Me But You"
            description="Fostering social consciousness and community service among students"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About NSS</h2>
              <p>
                The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, 
                Ministry of Youth Affairs & Sports. It provides opportunity to students in higher 
                learning to take part in various government led community service activities & programmes. 
                At SSB Puttaparthi, our NSS unit actively engages in community development and social service.
              </p>
            </div>

            <div className="panel">
              <h2>NSS Motto & Symbol</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center bg-gradient p-4 sm:p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold">"Not Me But You"</h3>
                  <p className="mt-2">मैं नहीं तू</p>
                </div>
                <div className="card">
                  <h3>Konark Wheel</h3>
                  <p>The NSS symbol is based on the Konark Wheel, representing the cycle of creation, preservation and release. It signifies movement in unity.</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Core Activities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="card">
                  <h3>Village Adoption</h3>
                  <p>Long-term engagement with rural communities to address their developmental needs and challenges.</p>
                </div>
                <div className="card">
                  <h3>Literacy Programs</h3>
                  <p>Adult literacy campaigns and educational support for underprivileged children in local areas.</p>
                </div>
                <div className="card">
                  <h3>Health Awareness</h3>
                  <p>Health camps, vaccination drives, and awareness programs on hygiene and preventive healthcare.</p>
                </div>
                <div className="card">
                  <h3>Environmental Conservation</h3>
                  <p>Tree plantation drives, water conservation projects, and environmental awareness campaigns.</p>
                </div>
                <div className="card">
                  <h3>Blood Donation</h3>
                  <p>Regular blood donation camps in collaboration with blood banks and hospitals.</p>
                </div>
                <div className="card">
                  <h3>Disaster Management</h3>
                  <p>Emergency response training and participation in disaster relief activities.</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Special Camps & Programs</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-[var(--brand)] pl-3 sm:pl-4">
                  <h4 className="font-semibold">Annual Special Camps</h4>
                  <p>7-day residential camps in adopted villages focusing on community development activities.</p>
                </div>
                <div className="border-l-4 border-[var(--brand)] pl-3 sm:pl-4">
                  <h4 className="font-semibold">National Youth Day</h4>
                  <p>Special programs on January 12th celebrating Swami Vivekananda's birthday and youth empowerment.</p>
                </div>
                <div className="border-l-4 border-[var(--brand)] pl-3 sm:pl-4">
                  <h4 className="font-semibold">Swachh Bharat Abhiyaan</h4>
                  <p>Regular cleanliness drives and sanitation awareness programs in campus and local communities.</p>
                </div>
                <div className="border-l-4 border-[var(--brand)] pl-3 sm:pl-4">
                  <h4 className="font-semibold">Digital Literacy</h4>
                  <p>Computer literacy programs for rural populations and senior citizens.</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Impact & Statistics</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">200+</div>
                  <p className="text-sm">Active Volunteers</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">5</div>
                  <p className="text-sm">Adopted Villages</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">120</div>
                  <p className="text-sm">Hours per Volunteer</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">5000+</div>
                  <p className="text-sm">Lives Impacted</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Awards & Recognition</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>State Level NSS Award for Outstanding Community Service</li>
                <li>Best NSS Unit Award - University Level</li>
                <li>Recognition for Environmental Conservation Initiatives</li>
                <li>Certificate of Appreciation from District Administration</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Join NSS</h2>
              <p>
                NSS is open to all students who are willing to work for the betterment of society. 
                Volunteers get certificates and can earn credits towards their academic curriculum.
              </p>
              <div className="mt-4">
                <p><strong>NSS Programme Officer:</strong></p>
                <p>Email: nss@ssbputtaparthi.edu.in</p>
                <p>Phone: +91-XXXX-XXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}