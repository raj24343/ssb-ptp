import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AcademicCouncil() {
  const councilMembers = [
    {
      name: "Dr. Srinivas Reddy",
      position: "Chairperson - Academic Council",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      qualification: "Ph.D in Management, IIM Ahmedabad",
      role: "Strategic Academic Leadership & Vision"
    },
    {
      name: "Dr. M. Balakoteswari",
      position: "Dean - Academic Affairs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      qualification: "Ph.D in Organizational Behavior",
      role: "Academic Program Oversight"
    },
    {
      name: "Prof. B. Durga Prasad",
      position: "Academic Council Representative",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      qualification: "Ph.D in Business Management",
      role: "Curriculum Development & Research"
    },
    {
      name: "Dr. Rajesh Kumar",
      position: "Head - MBA Program",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      qualification: "Ph.D in Finance, IIM Bangalore",
      role: "MBA Academic Excellence"
    },
    {
      name: "Prof. Priya Sharma",
      position: "Head - PGDM Program",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9b73b8e?q=80&w=400&auto=format&fit=crop",
      qualification: "Ph.D in Business Analytics, IIT Delhi",
      role: "PGDM Academic Innovation"
    },
    {
      name: "Dr. Suresh Reddy",
      position: "Head - Research & Development",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
      qualification: "Ph.D in Strategic Management",
      role: "Research Initiatives & Publications"
    }
  ];

  const responsibilities = [
    {
      title: "Academic Standards",
      description: "Maintaining and enhancing academic excellence across all programs",
      icon: "📚"
    },
    {
      title: "Curriculum Development",
      description: "Designing industry-relevant and globally competitive curricula",
      icon: "🔬"
    },
    {
      title: "Faculty Development",
      description: "Ensuring continuous professional development of faculty members",
      icon: "👨‍🏫"
    },
    {
      title: "Quality Assurance",
      description: "Implementing robust quality assurance mechanisms for academic programs",
      icon: "✅"
    },
    {
      title: "Research Oversight",
      description: "Promoting and monitoring research activities and publications",
      icon: "📊"
    },
    {
      title: "Student Assessment",
      description: "Developing fair and comprehensive student evaluation systems",
      icon: "📝"
    }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Academic Council"
            subtitle="Academic governance and oversight"
            description="The apex academic body responsible for maintaining excellence in education and research"
          />
          
          <div className="space-y-section">
            {/* Introduction */}
            <div className="panel">
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ color: 'var(--text)', fontSize: '2.2em', marginBottom: '2rem' }}>
                  Academic Excellence & Governance
                </h2>
                <p style={{ 
                  color: 'var(--text-soft)', 
                  fontSize: '1.2em', 
                  lineHeight: '1.7',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  The Academic Council serves as the premier academic authority at SSB Puttaparthi, 
                  responsible for formulating academic policies, ensuring quality standards, and 
                  driving innovation in management education.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--glass-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🏛️</div>
                  <h4 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Academic Governance</h4>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Strategic oversight of all academic programs and initiatives
                  </p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--glass-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>⚖️</div>
                  <h4 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Quality Assurance</h4>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Ensuring highest standards in curriculum and delivery
                  </p>
                </div>
                
                <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--glass-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🎯</div>
                  <h4 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Strategic Vision</h4>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Defining long-term academic excellence and innovation goals
                  </p>
                </div>
              </div>
            </div>

            {/* Council Members */}
            <div className="panel">
              <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '3rem' }}>
                Academic Council Members
              </h2>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem' 
              }}>
                {councilMembers.map((member, index) => (
                  <div key={index} style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'all var(--transition-medium)',
                    position: 'relative',
                    overflow: 'hidden'
                  }} className="hover:transform hover:translate-y-[-4px] hover:shadow-[var(--shadow-medium)]">
                    
                    <div style={{
                      position: 'absolute',
                      top: '-40px',
                      right: '-40px',
                      width: '100px',
                      height: '100px',
                      background: 'radial-gradient(circle, var(--brand)15, transparent)',
                      borderRadius: '50%'
                    }} />
                    
                    <img 
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '120px',
                        height: '120px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        margin: '0 auto 1.5rem',
                        border: '3px solid var(--brand)',
                        display: 'block',
                        position: 'relative',
                        zIndex: 1
                      }}
                    />
                    
                    <h3 style={{ 
                      color: 'var(--text)', 
                      fontSize: '1.2em', 
                      fontWeight: 'bold', 
                      marginBottom: '0.5rem',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {member.name}
                    </h3>
                    
                    <p style={{ 
                      color: 'var(--brand)', 
                      fontWeight: 'bold', 
                      marginBottom: '0.5rem',
                      fontSize: '0.95em',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {member.position}
                    </p>
                    
                    <p style={{ 
                      color: 'var(--text-soft)', 
                      fontSize: '0.85em',
                      marginBottom: '1rem',
                      fontStyle: 'italic',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {member.qualification}
                    </p>
                    
                    <div style={{
                      background: 'var(--surface-1)',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--border-light)',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <p style={{ 
                        color: 'var(--text-dim)', 
                        fontSize: '0.8em',
                        fontWeight: '600'
                      }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="panel">
              <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '3rem' }}>
                Key Responsibilities
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {responsibilities.map((responsibility, index) => (
                  <div key={index} style={{
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'all var(--transition-medium)'
                  }} className="hover:transform hover:translate-y-[-2px] hover:shadow-[var(--shadow-soft)]">
                    
                    <div style={{ fontSize: '3.5em', marginBottom: '1rem' }}>
                      {responsibility.icon}
                    </div>
                    <h4 style={{ 
                      color: 'var(--brand)', 
                      fontSize: '1.3em', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem' 
                    }}>
                      {responsibility.title}
                    </h4>
                    <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                      {responsibility.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Meeting Schedule & Procedures */}
            <div className="panel" style={{
              background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
              border: '1px solid var(--border-light)'
            }}>
              <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '3rem' }}>
                Council Operations
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem'
                }}>
                  <div style={{ fontSize: '2.5em', textAlign: 'center', marginBottom: '1rem' }}>📅</div>
                  <h4 style={{ color: 'var(--brand)', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                    Meeting Schedule
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-soft)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>• Monthly Academic Reviews</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Quarterly Policy Updates</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Annual Strategic Planning</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Special Sessions as needed</li>
                  </ul>
                </div>
                
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem'
                }}>
                  <div style={{ fontSize: '2.5em', textAlign: 'center', marginBottom: '1rem' }}>📋</div>
                  <h4 style={{ color: 'var(--brand)', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                    Key Decisions
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-soft)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>• Curriculum Approval</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Faculty Appointments</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Academic Regulations</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Quality Standards</li>
                  </ul>
                </div>
                
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem'
                }}>
                  <div style={{ fontSize: '2.5em', textAlign: 'center', marginBottom: '1rem' }}>🎯</div>
                  <h4 style={{ color: 'var(--brand)', fontSize: '1.2em', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                    Strategic Focus
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-soft)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>• Academic Innovation</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Industry Alignment</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Research Excellence</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Global Standards</li>
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