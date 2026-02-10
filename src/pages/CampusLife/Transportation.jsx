import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function Transportation() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Transportation"
            subtitle="Campus and city transport services"
            description="Convenient transportation facilities for students"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Transportation Services</h2>
              <p>
                SSB Puttaparthi provides comprehensive transportation services to ensure 
                students have safe and convenient access to the campus from various locations. 
                Our transportation network connects the campus with major city areas and 
                transport hubs.
              </p>
            </div>

            <div className="panel">
              <h2>Bus Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Campus Shuttle</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Regular shuttle services within campus</li>
                    <li>Connects hostels to academic buildings</li>
                    <li>Access to sports and recreational facilities</li>
                    <li>Evening services for library and study areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">City Routes</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Daily bus services to Puttaparthi town</li>
                    <li>Weekend services to major cities</li>
                    <li>Airport and railway station connectivity</li>
                    <li>Shopping and recreational area access</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Route Details</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Morning services: 7:00 AM to 9:00 AM</li>
                <li>Regular services: Every 30 minutes during college hours</li>
                <li>Evening services: 5:00 PM to 8:00 PM</li>
                <li>Weekend special services to nearby attractions</li>
                <li>Emergency transportation available 24/7</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Safety Features</h2>
              <p>
                All our buses are equipped with GPS tracking, first aid kits, and 
                emergency communication systems. Professional drivers with valid 
                licenses ensure safe transportation. Regular maintenance and safety 
                checks are conducted to maintain the highest safety standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}