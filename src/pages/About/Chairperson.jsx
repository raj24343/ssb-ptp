import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AboutChairperson() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="About Chairperson"
            subtitle="Message from our Chairperson"
            description="Leadership vision and guidance for SSB Puttaparthi"
          />
          
          <div className="space-y-section">
            {/* Chairperson Profile Section */}
            <div className="panel" style={{ 
              background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '4rem', alignItems: 'start' }}>
                <div style={{ textAlign: 'center', position: 'sticky', top: '2rem' }}>
                  <div style={{ 
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-medium)',
                    border: '1px solid var(--border-light)'
                  }}>
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
                      alt="Dr. Vijay Baskar Reddy - Chairperson"
                      style={{
                        width: '220px',
                        height: '220px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        margin: '0 auto 1.5rem',
                        display: 'block',
                        border: '4px solid var(--brand)'
                      }}
                    />
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--brand)', fontSize: '1.4em' }}>
                      Dr. Vijay Baskar Reddy
                    </h3>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--accent)' }}>
                      Chairperson & Founder
                    </p>
                    <p style={{ fontSize: '0.9em', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                      Ph.D in Management<br/>
                      IIM Ahmedabad<br/>
                      30+ years experience in<br/>
                      Academia & Industry
                    </p>
                    
                    <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--surface-1)', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)' }}>
                      <div style={{ fontSize: '0.9em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        Awards & Recognition
                      </div>
                      <div style={{ fontSize: '0.8em', color: 'var(--text-dim)' }}>
                        • Excellence in Education Award 2020<br/>
                        • Industry Leadership Recognition<br/>
                        • Academic Excellence Honor<br/>
                        • Business Innovation Award
                      </div>
                    </div>

                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--surface-2)', borderRadius: 'var(--radius)', border: '1px solid var(--border-light)' }}>
                      <div style={{ fontSize: '0.9em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        Professional Experience
                      </div>
                      <div style={{ fontSize: '0.8em', color: 'var(--text-dim)' }}>
                        • Former Vice President, TCS<br/>
                        • Board Member, AICTE<br/>
                        • Consultant, Multiple MNCs<br/>
                        • Author of 15+ Research Papers
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '3rem', fontSize: '2.2em' }}>
                    Chairperson's Message
                  </h2>
                  
                  <div style={{ 
                    position: 'relative',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-backdrop)',
                    padding: '2.5rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-soft)',
                    marginBottom: '2rem',
                    border: '1px solid var(--border-light)'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '2rem',
                      fontSize: '3em',
                      color: 'var(--brand)',
                      opacity: '0.3'
                    }}>
                      "
                    </div>
                    <blockquote style={{ 
                      fontStyle: 'italic', 
                      fontSize: '1.3em', 
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                      color: 'var(--text)',
                      paddingLeft: '2rem'
                    }}>
                      Education is the cornerstone of a progressive society. At Sanskrithi School of Business, 
                      we don't just impart knowledge; we shape character, build leadership, and foster innovation. 
                      Our mission is to create ethical business leaders who will drive positive change in the world.
                    </blockquote>
                    <div style={{
                      position: 'absolute',
                      bottom: '-15px',
                      right: '2rem',
                      fontSize: '3em',
                      color: 'var(--brand)',
                      opacity: '0.3',
                      transform: 'rotate(180deg)'
                    }}>
                      "
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gap: '2rem', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '1.1em', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                      When we established SSB Puttaparthi in 2008, our vision was clear: to create an institution 
                      that bridges the gap between academic excellence and industry relevance. Today, as I reflect 
                      on our journey of over 15 years, I am proud to see how far we have come.
                    </p>
                    
                    <p style={{ fontSize: '1.1em', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                      Our students are not just learners; they are future leaders, entrepreneurs, and change-makers. 
                      We have carefully crafted our curriculum to ensure that every graduate possesses not only 
                      technical competencies but also strong ethical values and social consciousness.
                    </p>
                    
                    <div style={{ 
                      background: 'var(--surface-1)', 
                      padding: '2rem', 
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-light)',
                      borderLeft: '4px solid var(--brand)'
                    }}>
                      <h4 style={{ color: 'var(--brand)', marginBottom: '1rem', fontSize: '1.2em' }}>
                        Our Commitment to Excellence
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                          <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                          <span style={{ color: 'var(--text-primary)' }}>
                            Maintaining the highest standards of academic rigor and industry relevance
                          </span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                          <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                          <span style={{ color: 'var(--text-primary)' }}>
                            Fostering innovation, entrepreneurship, and critical thinking among students
                          </span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                          <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                          <span style={{ color: 'var(--text-primary)' }}>
                            Building strong industry partnerships for practical learning experiences
                          </span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: '1.6' }}>
                          <span style={{ color: 'var(--brand)', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                          <span style={{ color: 'var(--text-primary)' }}>
                            Ensuring holistic development through values-based education
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <p style={{ fontSize: '1.1em', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                      As we look towards the future, we remain committed to evolving with the changing business 
                      landscape while staying true to our core values. I invite you to be part of our transformative 
                      journey and contribute to building a better tomorrow.
                    </p>
                  </div>
                  
                  <div style={{ 
                    textAlign: 'right',
                    borderTop: '2px solid var(--brand)',
                    paddingTop: '1.5rem',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                    color: 'var(--brand)'
                  }}>
                    Warm Regards,<br/>
                    <span style={{ fontSize: '1.1em' }}>Dr. Vijay Baskar Reddy</span><br/>
                    <span style={{ fontSize: '0.9em', color: 'var(--text-soft)' }}>Chairperson & Founder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Leadership Philosophy */}
            <div className="panel">
              <h2 style={{ color: 'var(--text)', textAlign: 'center', marginBottom: '2rem' }}>
                Leadership Philosophy
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-backdrop)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🎓</div>
                  <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Academic Excellence</h3>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Pursuing the highest standards in education delivery and academic research
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
                  <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Industry Connect</h3>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Building strong partnerships with industry leaders for practical learning
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
                  <div style={{ fontSize: '3em', marginBottom: '1rem' }}>🌍</div>
                  <h3 style={{ color: 'var(--brand)', marginBottom: '1rem' }}>Global Perspective</h3>
                  <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                    Preparing students for global business challenges and opportunities
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