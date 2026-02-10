import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function GoverningBody() {
  const governingBodyMembers = [
    {
      name: "Mr. B. Vijayabhaskar Reddy",
      position: "Chairman - Governing Body",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      qualification: "M.Com, FCA",
      experience: "35+ years in Finance & Administration",
      expertise: "Strategic Planning, Financial Management"
    },
    {
      name: "Mrs. S. Pavan Reddy",
      position: "Vice Chairperson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9b73b8e?q=80&w=400&auto=format&fit=crop",
      qualification: "MBA, Ph.D in Management",
      experience: "25+ years in Educational Leadership",
      expertise: "Academic Administration, Quality Assurance"
    },
    {
      name: "Prof. B. Durga Prasad",
      position: "Academic Council Representative",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      qualification: "Ph.D in Business Management",
      experience: "30+ years in Academia",
      expertise: "Curriculum Development, Research"
    },
    {
      name: "Dr. M. Balakoteswari",
      position: "Dean - Academic Affairs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      qualification: "Ph.D in Organizational Behavior",
      experience: "22+ years in Management Education",
      expertise: "Academic Excellence, Student Development"
    },
    {
      name: "Mrs. E. Prashanthi",
      position: "Registrar",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
      qualification: "M.Tech, MBA",
      experience: "18+ years in Administration",
      expertise: "Operations Management, Student Services"
    },
    {
      name: "Mr. P. Lingamaiah",
      position: "Finance Controller",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
      qualification: "M.Com, ACA",
      experience: "20+ years in Financial Management",
      expertise: "Financial Planning, Audit & Compliance"
    }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Governing Body"
            subtitle="Our governing council members"
            description="Leadership and governance structure of SSB Puttaparthi"
          />
          
          <div className="space-y-section">
            {/* Dean's Message Section */}
            <div className="panel" style={{ 
              background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem', alignItems: 'start' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-medium)',
                    border: '1px solid var(--border-light)'
                  }}>
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
                      alt="Dr. M. Balakoteswari - Dean"
                      style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        margin: '0 auto 1.5rem',
                        display: 'block',
                        border: '3px solid var(--brand)'
                      }}
                    />
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--brand)', fontSize: '1.3em' }}>
                      Dr. M. Balakoteswari
                    </h3>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--accent)' }}>
                      Dean - Academic Affairs
                    </p>
                    <p style={{ fontSize: '0.9em', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                      Ph.D in Organizational Behavior<br/>
                      22+ years in Management Education
                    </p>
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ color: 'var(--text)', marginBottom: '2rem', fontSize: '2em' }}>
                    Dean's Message
                  </h2>
                  
                  <div style={{ 
                    position: 'relative',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-soft)',
                    marginBottom: '2rem',
                    border: '1px solid var(--border-light)'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '1.5rem',
                      fontSize: '2.5em',
                      color: 'var(--brand)',
                      opacity: '0.3'
                    }}>
                      "
                    </div>
                    <blockquote style={{ 
                      fontStyle: 'italic', 
                      fontSize: '1.2em', 
                      lineHeight: '1.6',
                      color: 'var(--text)',
                      paddingLeft: '1.5rem'
                    }}>
                      At SSB Puttaparthi, we believe that academic excellence is achieved through a perfect blend 
                      of rigorous curriculum, experienced faculty, and practical learning experiences. Our commitment 
                      is to nurture students who are not only academically sound but also industry-ready.
                    </blockquote>
                    <div style={{
                      position: 'absolute',
                      bottom: '-10px',
                      right: '1.5rem',
                      fontSize: '2.5em',
                      color: 'var(--brand)',
                      opacity: '0.3',
                      transform: 'rotate(180deg)'
                    }}>
                      "
                    </div>
                  </div>
                  
                  <p style={{ fontSize: '1.1em', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                    Our academic programs are designed to challenge students intellectually while providing them with 
                    practical skills needed in today's dynamic business environment. We emphasize critical thinking, 
                    leadership development, and ethical decision-making.
                  </p>
                  
                  <p style={{ fontSize: '1.1em', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                    Together with our dedicated faculty and supportive governing body, we continue to strive for 
                    excellence in management education.
                  </p>
                  
                  <div style={{ 
                    textAlign: 'right',
                    borderTop: '2px solid var(--brand)',
                    paddingTop: '1rem',
                    fontSize: '1.1em',
                    fontWeight: 'bold',
                    color: 'var(--brand)',
                    marginTop: '2rem'
                  }}>
                    Best Regards,<br/>
                    <span style={{ fontSize: '1em' }}>Dr. M. Balakoteswari</span><br/>
                    <span style={{ fontSize: '0.9em', color: 'var(--text-soft)' }}>Dean - Academic Affairs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Body Members */}
            <div className="panel">
              <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '3rem' }}>
                Governing Body Members
              </h2>
              <p style={{ color: 'var(--text-soft)', textAlign: 'center', marginBottom: '3rem', fontSize: '1.1em' }}>
                Distinguished leaders who guide our institution's strategic direction and ensure academic excellence
              </p>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                {governingBodyMembers.map((member, index) => (
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
                  }} className="hover:transform hover:translate-y-[-4px] hover:shadow-[var(--shadow-medium)] hover:border-[var(--border-medium)]">
                    
                    {/* Background decoration */}
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      right: '-50%',
                      width: '100px',
                      height: '100px',
                      background: `radial-gradient(circle, var(--brand), transparent)`,
                      opacity: '0.05',
                      borderRadius: '50%'
                    }} />
                    
                    <img 
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '140px',
                        height: '140px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        margin: '0 auto 1.5rem',
                        border: '3px solid var(--brand)',
                        display: 'block',
                        position: 'relative',
                        zIndex: '1'
                      }}
                    />
                    
                    <h3 style={{ 
                      color: 'var(--text)', 
                      fontSize: '1.3em', 
                      fontWeight: 'bold', 
                      marginBottom: '0.5rem',
                      position: 'relative',
                      zIndex: '1'
                    }}>
                      {member.name}
                    </h3>
                    
                    <p style={{ 
                      color: 'var(--brand)', 
                      fontWeight: 'bold', 
                      marginBottom: '1rem',
                      fontSize: '1em',
                      position: 'relative',
                      zIndex: '1'
                    }}>
                      {member.position}
                    </p>
                    
                    <div style={{
                      background: 'var(--surface-1)',
                      padding: '1rem',
                      borderRadius: 'var(--radius)',
                      marginBottom: '1rem',
                      border: '1px solid var(--border-light)',
                      position: 'relative',
                      zIndex: '1'
                    }}>
                      <p style={{ 
                        color: 'var(--text-soft)', 
                        fontSize: '0.9em',
                        marginBottom: '0.5rem',
                        lineHeight: '1.4'
                      }}>
                        <strong>Qualification:</strong> {member.qualification}
                      </p>
                      
                      <p style={{ 
                        color: 'var(--text-dim)', 
                        fontSize: '0.85em',
                        marginBottom: '0.5rem'
                      }}>
                        {member.experience}
                      </p>
                      
                      <p style={{ 
                        color: 'var(--text-muted)', 
                        fontSize: '0.8em',
                        fontStyle: 'italic'
                      }}>
                        <strong>Expertise:</strong> {member.expertise}
                      </p>
                    </div>
                    
                    <button style={{
                      background: 'var(--surface-gradient)',
                      color: 'var(--text)',
                      border: '1px solid var(--border-medium)',
                      padding: '0.5rem 1.5rem',
                      borderRadius: 'var(--radius)',
                      fontSize: '0.9em',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                      width: '100%',
                      position: 'relative',
                      zIndex: '1'
                    }} className="hover:bg-[var(--surface-3)] hover:border-[var(--border-strong)]">
                      View Full Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance Structure */}
            <div className="panel">
              <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '2rem' }}>
                Governance Structure
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🏛️</div>
                  <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Strategic Oversight</h3>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Ensuring institutional strategic direction and long-term vision alignment
                  </p>
                </div>
                
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>📚</div>
                  <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Academic Excellence</h3>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Maintaining high academic standards and quality assurance
                  </p>
                </div>
                
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>💼</div>
                  <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Financial Stewardship</h3>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Responsible financial management and resource allocation
                  </p>
                </div>
                
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🎯</div>
                  <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Policy & Compliance</h3>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Ensuring regulatory compliance and policy implementation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}