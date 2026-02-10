import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function GreenClub() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Green Club"
            subtitle="Nurturing Nature, Securing Future"
            description="Promoting environmental awareness and sustainable practices for a greener tomorrow"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About Green Club</h2>
              <p>
                The Green Club at SSB Puttaparthi is dedicated to creating environmental awareness and 
                promoting sustainable practices among students and the local community. We believe that 
                every small action towards environmental conservation can create a significant impact 
                for future generations.
              </p>
            </div>

            <div className="panel">
              <h2>Our Mission</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h3>Environmental Education</h3>
                  <p>Creating awareness about environmental issues and sustainable living practices through workshops and seminars.</p>
                </div>
                <div className="card">
                  <h3>Conservation Projects</h3>
                  <p>Implementing practical conservation initiatives like water harvesting, waste management, and energy conservation.</p>
                </div>
                <div className="card">
                  <h3>Green Campus</h3>
                  <p>Developing and maintaining an eco-friendly campus environment with green spaces and sustainable infrastructure.</p>
                </div>
                <div className="card">
                  <h3>Community Outreach</h3>
                  <p>Extending environmental awareness programs to local communities and schools in the region.</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Key Initiatives</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Tree Plantation Drives</h4>
                  <p>Regular tree planting activities across campus and local areas, with focus on native species and medicinal plants.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Waste Management</h4>
                  <p>Comprehensive waste segregation, composting, and recycling programs to achieve zero-waste campus goals.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Water Conservation</h4>
                  <p>Rainwater harvesting systems, water quality testing, and awareness programs on water conservation.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Renewable Energy</h4>
                  <p>Promoting solar energy usage, energy-efficient practices, and carbon footprint reduction initiatives.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Organic Farming</h4>
                  <p>Establishing organic gardens and teaching sustainable farming practices to students and local farmers.</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Special Events & Campaigns</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h3>World Environment Day</h3>
                  <p>Annual celebrations with tree plantation, environmental quiz competitions, and green awareness rallies.</p>
                </div>
                <div className="card">
                  <h3>Earth Hour Campaign</h3>
                  <p>Energy conservation awareness programs and campus-wide participation in Earth Hour initiatives.</p>
                </div>
                <div className="card">
                  <h3>Green Week</h3>
                  <p>Week-long environmental awareness programs featuring workshops, exhibitions, and eco-friendly competitions.</p>
                </div>
                <div className="card">
                  <h3>Plastic-Free Campus</h3>
                  <p>Campaigns to eliminate single-use plastics and promote biodegradable alternatives across campus.</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Environmental Impact</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">2000+</div>
                  <p className="text-sm">Trees Planted</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">80%</div>
                  <p className="text-sm">Waste Recycled</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">50%</div>
                  <p className="text-sm">Energy Saved</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">100+</div>
                  <p className="text-sm">Active Members</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Awards & Certifications</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Green Campus Award - State Environmental Authority</li>
                <li>Best Environmental Club Award - University Level</li>
                <li>ISO 14001 Environmental Management Certification</li>
                <li>NAAC Green Audit Excellence Award</li>
                <li>Ministry of Environment Recognition for Sustainability Initiatives</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Future Projects</h2>
              <div className="space-y-3">
                <p>• Development of botanical garden with medicinal plant section</p>
                <p>• Installation of solar panel systems for renewable energy</p>
                <p>• Construction of eco-friendly student hostels</p>
                <p>• Implementation of smart water management systems</p>
                <p>• Creation of environmental research and innovation center</p>
              </div>
            </div>

            <div className="panel">
              <h2>Join Green Club</h2>
              <p>
                Be part of the environmental revolution! Join our Green Club to contribute towards 
                a sustainable future. Open to all students passionate about environmental conservation.
              </p>
              <div className="mt-4">
                <p><strong>Green Club Coordinator:</strong></p>
                <p>Email: greenclub@ssbputtaparthi.edu.in</p>
                <p>Phone: +91-XXXX-XXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}