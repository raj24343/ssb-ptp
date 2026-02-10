import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

export default function AboutSSBCampus() {
  const campusInfrastructure = [
    {
      category: "Academic Infrastructure",
      icon: "🏛️",
      facilities: [
        { name: "Modern Classrooms", description: "Air-conditioned classrooms with smart boards and modern teaching aids" },
        { name: "Lecture Halls", description: "Spacious amphitheater-style halls with advanced audio-visual systems" },
        { name: "Seminar Halls", description: "Well-equipped venues for conferences, workshops, and guest lectures" },
        { name: "Faculty Offices", description: "Comfortable spaces for faculty consultations and research work" },
        { name: "Administrative Block", description: "Centralized offices for student services and administrative functions" }
      ]
    },
    {
      category: "Technology & Innovation",
      icon: "💻",
      facilities: [
        { name: "Wi-Fi Campus", description: "High-speed internet connectivity across the entire campus" },
        { name: "Smart Classrooms", description: "Interactive whiteboards and multimedia presentation systems" },
        { name: "Computer Labs", description: "Latest PC configurations with updated software and applications" },
        { name: "Digital Library", description: "Online access to journals, e-books, and research databases" },
        { name: "AV Equipment", description: "Modern audio-visual equipment for enhanced learning experience" }
      ]
    },
    {
      category: "Safety & Security",
      icon: "🛡️", 
      facilities: [
        { name: "24/7 Security", description: "Round-the-clock security personnel and CCTV surveillance" },
        { name: "Access Control", description: "Controlled entry and exit points with ID card systems" },
        { name: "Emergency Services", description: "First aid facilities and emergency response protocols" },
        { name: "Fire Safety", description: "Modern fire detection and suppression systems" },
        { name: "Well-lit Campus", description: "Adequate lighting throughout the campus for safety" }
      ]
    },
    {
      category: "Environmental Features",
      icon: "🌱",
      facilities: [
        { name: "Green Landscaping", description: "Beautifully maintained gardens and green spaces" },
        { name: "Eco-friendly Practices", description: "Sustainable waste management and energy conservation" },
        { name: "Open Courtyards", description: "Spacious areas for relaxation and informal discussions" },
        { name: "Tree Cover", description: "Abundant trees providing natural shade and fresh air" },
        { name: "Water Conservation", description: "Rainwater harvesting and efficient water management systems" }
      ]
    }
  ];

  const campusAmenities = [
    {
      name: "Power Infrastructure",
      description: "Uninterrupted power supply with backup generators",
      icon: "⚡",
      features: ["24/7 Power Supply", "Backup Generators", "UPS Systems", "Energy Efficient Lighting"]
    },
    {
      name: "Parking Facilities", 
      description: "Secure parking areas for students, faculty, and visitors",
      icon: "🅿️",
      features: ["Covered Parking", "Two-wheeler Parking", "Visitor Parking", "Security Surveillance"]
    },
    {
      name: "Maintenance Services",
      description: "Regular upkeep and maintenance of all facilities",
      icon: "🔧",
      features: ["Daily Cleaning", "Landscaping", "Technical Support", "Infrastructure Maintenance"]
    },
    {
      name: "Accessibility Features",
      description: "Campus designed for accessibility and ease of movement",
      icon: "♿",
      features: ["Ramp Access", "Wide Corridors", "Accessible Restrooms", "Clear Signage"]
    }
  ];

  const locationAdvantages = [
    {
      title: "Spiritual Environment",
      description: "Located in the peaceful town of Puttaparthi, known for its spiritual significance and serene atmosphere",
      icon: "🕉️"
    },
    {
      title: "Strategic Location", 
      description: "Situated behind Sri Sathya Sai Super Speciality Hospital, ensuring easy access to healthcare",
      icon: "🏥"
    },
    {
      title: "Connectivity",
      description: "Well-connected by road with regular transportation to major cities in Andhra Pradesh",
      icon: "🛣️"
    },
    {
      title: "Clean Environment",
      description: "Pollution-free environment with clean air and peaceful surroundings",
      icon: "🌿"
    }
  ];

  const campusLife = [
    {
      aspect: "Learning Environment",
      description: "Conducive atmosphere for focused study and research with minimal distractions",
      benefits: ["Quiet Study Areas", "Natural Lighting", "Comfortable Temperature", "Inspiring Architecture"]
    },
    {
      aspect: "Community Living",
      description: "Close-knit community fostering friendships and collaborative learning",
      benefits: ["Diverse Student Body", "Cultural Exchange", "Peer Learning", "Mentorship Programs"]
    },
    {
      aspect: "Holistic Development",
      description: "Opportunities for intellectual, physical, and spiritual growth",
      benefits: ["Academic Excellence", "Physical Fitness", "Cultural Activities", "Personal Values"]
    },
    {
      aspect: "Industry Exposure",
      description: "Regular industry interactions and corporate visits for practical learning",
      benefits: ["Guest Lectures", "Industry Visits", "Internship Programs", "Placement Support"]
    }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Campus Overview"
            subtitle="Where Excellence Meets Serenity"
            description="Discover our state-of-the-art campus in the spiritual heart of Puttaparthi"
          />
          
          <div className="space-y-section">
            {/* Campus Introduction */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-3xl font-bold gradient-text mb-6">Welcome to Sanskrithi Campus</h2>
              <p className="text-[var(--text-soft)] text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
                Nestled in the serene and spiritual town of Puttaparthi, our campus spans across beautifully 
                landscaped grounds that provide an ideal environment for learning and personal growth. The campus 
                seamlessly blends modern educational infrastructure with the peaceful atmosphere of this sacred town, 
                creating a unique setting that nurtures both intellectual and spiritual development.
              </p>
              
              <div className="grid sm:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">🏫</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">Modern</span>
                  <p className="text-[var(--text-soft)] text-sm">Infrastructure</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">🌱</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">Green</span>
                  <p className="text-[var(--text-soft)] text-sm">Campus</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">🔒</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">Secure</span>
                  <p className="text-[var(--text-soft)] text-sm">Environment</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">💻</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">Tech</span>
                  <p className="text-[var(--text-soft)] text-sm">Enabled</p>
                </div>
              </div>
            </Card>

            {/* Campus Infrastructure */}
            <div className="space-y-12">
              {campusInfrastructure.map((category, i) => (
                <Card key={i}>
                  <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    {category.category}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.facilities.map((facility, j) => (
                      <div key={j} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-3">{facility.name}</h3>
                        <p className="text-[var(--text-soft)] leading-relaxed">{facility.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Campus Amenities */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🏗️</span>
                </div>
                Supporting Amenities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {campusAmenities.map((amenity, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                        <span className="text-2xl">{amenity.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{amenity.name}</h3>
                        <p className="text-[var(--text-soft)] leading-relaxed mb-4">{amenity.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {amenity.features.map((feature, j) => (
                        <span key={j} className="text-sm px-3 py-1 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--text-soft)] text-center">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location Advantages */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                Location Advantages
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {locationAdvantages.map((advantage, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                        <span className="text-2xl">{advantage.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{advantage.title}</h3>
                        <p className="text-[var(--text-soft)] leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Campus Life */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                Campus Life Experience
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {campusLife.map((aspect, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-3">{aspect.aspect}</h3>
                    <p className="text-[var(--text-soft)] mb-4 leading-relaxed">{aspect.description}</p>
                    
                    <div className="space-y-2">
                      {aspect.benefits.map((benefit, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center flex-shrink-0">
                            <span className="text-[var(--accent)] text-sm">✓</span>
                          </div>
                          <span className="text-[var(--text-soft)] text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Campus Address & Contact */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6">Visit Our Campus</h2>
              <div className="max-w-2xl mx-auto mb-8">
                <div className="flex items-start gap-4 justify-center">
                  <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-[var(--text)] mb-2">Campus Address</h3>
                    <p className="text-[var(--text-soft)]">
                      Behind Sri Sathya Sai Super Speciality Hospital<br/>
                      Beedupalli Road, Prasanthigram<br/>
                      Puttaparthi - 515134<br/>
                      Sri Sathya Sai District, Andhra Pradesh
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/inquiry"
                  className="px-8 py-4 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  Contact Us
                </a>
                <a 
                  href="/inquiry"
                  className="px-8 py-4 bg-[var(--surface-2)] text-[var(--text)] font-semibold rounded-xl border border-[var(--border-light)] hover:bg-[var(--surface-3)] transition-colors"
                >
                  Apply for Admission
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}