const faculty = [
  // Senior Leadership
  {
    id: 1,
    name: 'Dr. Suresh Reddy',
    title: 'Chairman & Founder',
    department: 'Leadership',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    education: 'Ph.D. in Management, IIM Ahmedabad; MBA, Wharton School',
    experience: '25+ years',
    specialization: ['Strategic Management', 'Entrepreneurship', 'Leadership Development'],
    bio: 'Visionary leader with over 25 years of experience in business education and corporate strategy. Former McKinsey partner and startup founder who has guided numerous organizations through digital transformation.',
    achievements: [
      'Founded 3 successful startups with cumulative valuation of ₹500Cr',
      'Advisor to 20+ companies including Fortune 500 firms',
      'Author of 2 bestselling books on entrepreneurship',
      'Featured speaker at Harvard Business School and Wharton'
    ],
    courses: ['Strategic Management', 'Entrepreneurship', 'Leadership & Ethics'],
    researchInterests: ['Digital Transformation', 'Sustainable Business Models', 'Innovation Management'],
    publications: 15,
    awards: ['Business Leader of the Year 2022', 'Excellence in Education Award 2021']
  },
  {
    id: 2,
    name: 'Prof. Anjali Sharma',
    title: 'Dean - Academic Affairs',
    department: 'Management',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    education: 'Ph.D. in Organizational Behavior, XLRI; MBA, IIM Bangalore',
    experience: '18+ years',
    specialization: ['Organizational Behavior', 'Human Resource Management', 'Leadership'],
    bio: 'Former McKinsey consultant and HR head at Fortune 500 companies. Expert in organizational transformation and talent development with extensive research in employee engagement and performance management.',
    achievements: [
      'Led HR transformation for 50,000+ employee organizations',
      'Consultant to 100+ companies on organizational development',
      'Keynote speaker at 25+ international conferences',
      'Winner of Best Faculty Award for 3 consecutive years'
    ],
    courses: ['Organizational Behavior', 'HR Strategy', 'Change Management'],
    researchInterests: ['Employee Engagement', 'Digital HR', 'Workplace Diversity'],
    publications: 12,
    awards: ['Outstanding Faculty Award 2023', 'Research Excellence Award 2022']
  },
  {
    id: 3,
    name: 'Dr. Rajesh Kumar',
    title: 'Director - Industry Relations',
    department: 'Strategy',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    education: 'Ph.D. in Technology Management, IIT Delhi; MBA, ISB Hyderabad',
    experience: '20+ years',
    specialization: ['Digital Transformation', 'Technology Strategy', 'Innovation'],
    bio: 'Former CTO at TCS and technology leader with deep expertise in digital transformation. Instrumental in building industry partnerships and ensuring curriculum relevance to current market needs.',
    achievements: [
      'Led digital transformation projects worth ₹1000Cr+',
      'Filed 8 technology patents',
      'Built partnerships with 200+ companies',
      'Mentor to 50+ startups in tech space'
    ],
    courses: ['Technology Strategy', 'Digital Innovation', 'Project Management'],
    researchInterests: ['AI in Business', 'Digital Transformation', 'Tech Entrepreneurship'],
    publications: 10,
    awards: ['Technology Innovation Award 2023', 'Industry Partnership Excellence 2022']
  },

  // Finance Faculty
  {
    id: 4,
    name: 'Prof. Meera Jain',
    title: 'Professor - Finance',
    department: 'Finance',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    education: 'Ph.D. in Finance, IIM Calcutta; CFA, MBA Finance',
    experience: '15+ years',
    specialization: ['Corporate Finance', 'Investment Banking', 'Financial Analytics'],
    bio: 'Former investment banker at Goldman Sachs with expertise in corporate finance and fintech. Recognized expert in financial modeling and valuation with consulting experience across multiple industries.',
    achievements: [
      'Handled deals worth ₹5000Cr+ in investment banking',
      'Financial advisor to 30+ companies',
      'Expert witness in 10+ financial disputes',
      'Regular commentator on financial news channels'
    ],
    courses: ['Corporate Finance', 'Investment Analysis', 'Financial Modeling'],
    researchInterests: ['Fintech Innovation', 'Behavioral Finance', 'ESG Investing'],
    publications: 8,
    awards: ['Best Finance Faculty 2023', 'Research Excellence in Finance 2022']
  },
  {
    id: 5,
    name: 'Dr. Amit Verma',
    title: 'Associate Professor - Finance',
    department: 'Finance',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    education: 'Ph.D. in Financial Economics, LSE; MBA, IIMA',
    experience: '12+ years',
    specialization: ['Financial Markets', 'Risk Management', 'Banking'],
    bio: 'Former risk manager at HDFC Bank with deep expertise in financial markets and banking operations. Specializes in credit risk modeling and financial derivatives.',
    achievements: [
      'Developed risk models used by 15+ banks',
      'Trainer for RBI and SEBI officials',
      'Consultant to microfinance institutions',
      'Expert in blockchain and cryptocurrency'
    ],
    courses: ['Banking Operations', 'Risk Management', 'Financial Markets'],
    researchInterests: ['Digital Banking', 'Microfinance', 'Cryptocurrency'],
    publications: 6,
    awards: ['Young Researcher Award 2023']
  },

  // Marketing Faculty
  {
    id: 6,
    name: 'Prof. Sanjay Ahmed',
    title: 'Professor - Marketing',
    department: 'Marketing',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face',
    education: 'Ph.D. in Marketing, IIM Ahmedabad; MBA Marketing',
    experience: '16+ years',
    specialization: ['Digital Marketing', 'Brand Management', 'Consumer Behavior'],
    bio: 'Brand strategist and digital marketing expert with extensive experience in FMCG and technology sectors. Former marketing head at Unilever and Flipkart with expertise in omnichannel marketing.',
    achievements: [
      'Launched 20+ successful brand campaigns',
      'Built marketing teams for 3 unicorn startups',
      'Speaker at 40+ marketing conferences globally',
      'Mentor to 100+ marketing professionals'
    ],
    courses: ['Digital Marketing', 'Brand Management', 'Consumer Insights'],
    researchInterests: ['Social Media Marketing', 'Brand Psychology', 'Influencer Marketing'],
    publications: 9,
    awards: ['Marketing Faculty of the Year 2023', 'Digital Innovation Award 2022']
  },
  {
    id: 7,
    name: 'Dr. Priya Nair',
    title: 'Associate Professor - Marketing',
    department: 'Marketing',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    education: 'Ph.D. in Consumer Psychology, Northwestern; MBA, ISB',
    experience: '11+ years',
    specialization: ['Consumer Psychology', 'Market Research', 'Retail Management'],
    bio: 'Consumer behavior expert with research focus on digital consumer psychology and retail analytics. Former researcher at Nielsen and consultant to major retail chains.',
    achievements: [
      'Conducted consumer research for 50+ brands',
      'Published in top-tier marketing journals',
      'Consultant to major e-commerce platforms',
      'Expert in neuromarketing techniques'
    ],
    courses: ['Consumer Behavior', 'Market Research', 'Retail Analytics'],
    researchInterests: ['Digital Consumer Behavior', 'Neuromarketing', 'Retail Innovation'],
    publications: 7,
    awards: ['Research Excellence Award 2023']
  },

  // Operations Faculty
  {
    id: 8,
    name: 'Prof. Vikram Singh',
    title: 'Professor - Operations',
    department: 'Operations',
    photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face',
    education: 'Ph.D. in Operations Research, IIT Bombay; MBA Operations',
    experience: '14+ years',
    specialization: ['Supply Chain Management', 'Operations Research', 'Quality Management'],
    bio: 'Supply chain expert with extensive experience in manufacturing and logistics. Former operations head at Mahindra & Mahindra with expertise in lean manufacturing and Six Sigma.',
    achievements: [
      'Implemented SCM solutions saving ₹200Cr+ annually',
      'Six Sigma Black Belt with 50+ projects',
      'Consultant to 40+ manufacturing companies',
      'Expert in Industry 4.0 implementations'
    ],
    courses: ['Supply Chain Management', 'Operations Strategy', 'Quality Systems'],
    researchInterests: ['Smart Manufacturing', 'Sustainable Operations', 'Logistics Optimization'],
    publications: 8,
    awards: ['Operations Excellence Award 2023']
  },

  // Analytics & Technology Faculty
  {
    id: 9,
    name: 'Dr. Kavita Gupta',
    title: 'Professor - Business Analytics',
    department: 'Analytics',
    photo: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face',
    education: 'Ph.D. in Data Science, Stanford; MS Analytics, MIT',
    experience: '13+ years',
    specialization: ['Business Analytics', 'Machine Learning', 'Data Strategy'],
    bio: 'Data science expert with experience in building analytics capabilities for Fortune 500 companies. Former principal data scientist at Microsoft with expertise in AI/ML applications in business.',
    achievements: [
      'Built analytics teams for 5+ Fortune 500 companies',
      'Developed ML models generating ₹500Cr+ value',
      'Author of popular data science book',
      'Keynote speaker at international AI conferences'
    ],
    courses: ['Business Analytics', 'Machine Learning', 'Data Visualization'],
    researchInterests: ['AI Ethics', 'Predictive Analytics', 'Business Intelligence'],
    publications: 11,
    awards: ['Analytics Faculty of the Year 2023', 'AI Innovation Award 2022']
  },

  // Entrepreneurship Faculty
  {
    id: 10,
    name: 'Prof. Arjun Kapoor',
    title: 'Professor - Entrepreneurship',
    department: 'Entrepreneurship',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    education: 'MBA, Harvard Business School; B.Tech, IIT Delhi',
    experience: '17+ years',
    specialization: ['Startup Strategy', 'Venture Capital', 'Innovation Management'],
    bio: 'Serial entrepreneur and venture capitalist with successful exits from 3 startups. Currently manages ₹200Cr venture fund and mentors early-stage companies in the startup ecosystem.',
    achievements: [
      'Founded 3 successful startups with total valuation ₹800Cr',
      'Invested in 50+ startups as VC partner',
      'Mentor at top accelerators like Y Combinator',
      'Regular judge at startup competitions'
    ],
    courses: ['Entrepreneurship', 'Venture Capital', 'Innovation Strategy'],
    researchInterests: ['Startup Ecosystems', 'Digital Innovation', 'Social Entrepreneurship'],
    publications: 5,
    awards: ['Entrepreneur of the Year 2022', 'Startup Mentor Award 2023']
  }
];

// Faculty statistics
export const facultyStats = {
  total: faculty.length,
  phd: faculty.filter(f => f.education.includes('Ph.D.')).length,
  industry: faculty.filter(f => parseInt(f.experience) >= 10).length,
  publications: faculty.reduce((sum, f) => sum + (f.publications || 0), 0),
  avgExperience: Math.round(faculty.reduce((sum, f) => sum + parseInt(f.experience), 0) / faculty.length)
};

// Departments
export const departments = [
  {
    name: 'Finance',
    head: 'Prof. Meera Jain',
    faculty: faculty.filter(f => f.department === 'Finance'),
    description: 'Comprehensive finance education covering corporate finance, investment banking, and financial analytics'
  },
  {
    name: 'Marketing',
    head: 'Prof. Sanjay Ahmed',
    faculty: faculty.filter(f => f.department === 'Marketing'),
    description: 'Modern marketing education with focus on digital marketing and consumer behavior'
  },
  {
    name: 'Operations',
    head: 'Prof. Vikram Singh',
    faculty: faculty.filter(f => f.department === 'Operations'),
    description: 'Operations management with emphasis on supply chain and quality management'
  },
  {
    name: 'Analytics',
    head: 'Dr. Kavita Gupta',
    faculty: faculty.filter(f => f.department === 'Analytics'),
    description: 'Business analytics and data science for data-driven decision making'
  },
  {
    name: 'Leadership',
    head: 'Dr. Suresh Reddy',
    faculty: faculty.filter(f => f.department === 'Leadership'),
    description: 'Strategic leadership and organizational management'
  }
];

export default faculty;