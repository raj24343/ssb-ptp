const courses = [
  {
    slug: 'mba',
    title: 'Master of Business Administration (MBA)',
    shortTitle: 'MBA',
    duration: '2 Years',
    intake: 120,
    mode: 'Full-time',
    eligibility: 'Bachelor\'s degree in any discipline with 50% marks',
    fees: '₹4.5 Lakhs (Total)',
    description: 'A comprehensive business education program that combines rigorous academic foundation with practical industry application. Designed for building strong managerial and leadership capabilities across diverse business functions.',
    highlights: [
      'Industry-aligned curriculum with latest business trends',
      'Specialization options in Marketing, Finance, HR, and Operations',
      'Live projects with Fortune 500 companies',
      'International study tour and exchange programs',
      'Mentorship from C-suite executives',
      'Strong alumni network across various industries',
      'Placement assistance with 95%+ success rate'
    ],
    specializations: [
      {
        name: 'Marketing Management',
        icon: '📈',
        description: 'Digital marketing, brand strategy, consumer behavior, and market research',
        subjects: ['Digital Marketing', 'Brand Management', 'Consumer Behavior', 'Market Research', 'Sales Management']
      },
      {
        name: 'Finance & Banking',
        icon: '💰',
        description: 'Corporate finance, investment banking, financial analysis, and fintech',
        subjects: ['Corporate Finance', 'Investment Banking', 'Financial Analysis', 'Risk Management', 'Fintech Innovation']
      },
      {
        name: 'Human Resources',
        icon: '👥',
        description: 'Talent management, organizational psychology, and workforce development',
        subjects: ['Talent Acquisition', 'Performance Management', 'Organizational Behavior', 'HR Analytics', 'Leadership Development']
      },
      {
        name: 'Operations Management',
        icon: '⚙️',
        description: 'Supply chain, logistics, process optimization, and quality management',
        subjects: ['Supply Chain Management', 'Operations Research', 'Quality Management', 'Project Management', 'Lean Six Sigma']
      }
    ],
    careerProspects: [
      'Management Trainee in MNCs',
      'Business Analyst',
      'Project Manager',
      'Marketing Manager',
      'Financial Analyst',
      'HR Business Partner',
      'Operations Manager',
      'Consultant'
    ],
    averagePackage: '₹6.5 LPA',
    highestPackage: '₹16 LPA',
    topRecruiters: ['TCS', 'Infosys', 'Wipro', 'HDFC Bank', 'ICICI Bank', 'Deloitte', 'PwC', 'Amazon']
  },
  {
    slug: 'pgdm',
    title: 'Post Graduate Diploma in Management (PGDM)',
    shortTitle: 'PGDM',
    duration: '2 Years',
    intake: 60,
    mode: 'Full-time',
    eligibility: 'Bachelor\'s degree in any discipline with 50% marks',
    fees: '₹5.2 Lakhs (Total)',
    description: 'An innovation-focused program emphasizing experiential learning, entrepreneurship, and emerging business trends. Perfect for aspiring entrepreneurs and those seeking dynamic career paths in evolving industries.',
    highlights: [
      'Experiential learning with real business challenges',
      'Dual specialization opportunities',
      'Startup incubation and entrepreneurship support',
      'Industry immersion programs',
      'Live case studies and consulting projects',
      'Guest lectures from industry leaders',
      'International exposure through partnerships'
    ],
    specializations: [
      {
        name: 'Business Analytics & Data Science',
        icon: '📊',
        description: 'Data science, predictive modeling, AI/ML applications in business',
        subjects: ['Business Analytics', 'Data Mining', 'Machine Learning', 'Big Data Technologies', 'Predictive Modeling']
      },
      {
        name: 'Entrepreneurship & Innovation',
        icon: '🚀',
        description: 'Startup ecosystem, venture capital, business model innovation',
        subjects: ['Startup Management', 'Venture Capital', 'Business Model Innovation', 'Design Thinking', 'Social Entrepreneurship']
      },
      {
        name: 'International Business',
        icon: '🌍',
        description: 'Global markets, cross-cultural management, international trade',
        subjects: ['International Trade', 'Global Supply Chain', 'Cross-cultural Management', 'Foreign Exchange', 'Global Marketing']
      },
      {
        name: 'Digital Business & Technology',
        icon: '💻',
        description: 'E-commerce, digital transformation, technology strategy',
        subjects: ['Digital Marketing', 'E-commerce Management', 'Digital Transformation', 'Technology Strategy', 'Cybersecurity Management']
      }
    ],
    careerProspects: [
      'Business Development Manager',
      'Data Analyst',
      'Digital Marketing Specialist',
      'Startup Founder',
      'Product Manager',
      'Strategy Consultant',
      'International Business Executive',
      'Innovation Manager'
    ],
    averagePackage: '₹7.2 LPA',
    highestPackage: '₹18 LPA',
    topRecruiters: ['Flipkart', 'Swiggy', 'Byju\'s', 'Paytm', 'Zomato', 'Microsoft', 'Google', 'Accenture']
  }
];

// Program comparison data
export const programComparison = {
  mba: {
    focus: 'Academic Excellence + Industry Application',
    bestFor: 'Traditional corporate careers and managerial roles',
    learningStyle: 'Theory-driven with practical applications',
    networkingOpportunity: 'Strong alumni network in established companies'
  },
  pgdm: {
    focus: 'Industry-First Learning + Innovation',
    bestFor: 'Entrepreneurship, startups, and emerging industries',
    learningStyle: 'Hands-on experiential learning',
    networkingOpportunity: 'Dynamic network of entrepreneurs and innovators'
  }
};

// Common features across all programs
export const commonFeatures = [
  {
    icon: '🏢',
    title: 'Industry Integration',
    description: 'Live projects with partner companies and regular industry interaction'
  },
  {
    icon: '👨‍🏫',
    title: 'Expert Faculty',
    description: 'Learn from practitioners and academics with real-world experience'
  },
  {
    icon: '🌍',
    title: 'Global Perspective',
    description: 'International exposure through partnerships and exchange programs'
  },
  {
    icon: '💼',
    title: 'Career Support',
    description: 'Comprehensive placement assistance and alumni network access'
  },
  {
    icon: '📚',
    title: 'Modern Curriculum',
    description: 'Updated syllabus reflecting latest industry trends and requirements'
  },
  {
    icon: '🎯',
    title: 'Skill Development',
    description: 'Soft skills, leadership, and communication training'
  }
];

// Admission process
export const admissionProcess = [
  {
    step: 1,
    title: 'Online Application',
    description: 'Submit application form with required documents',
    duration: '10-15 minutes',
    documents: ['Academic transcripts', 'ID proof', 'Passport size photos']
  },
  {
    step: 2,
    title: 'Entrance Test',
    description: 'Aptitude test covering quantitative, verbal, and logical reasoning',
    duration: '2 hours',
    format: 'Computer-based test'
  },
  {
    step: 3,
    title: 'Personal Interview',
    description: 'Panel interview to assess personality, communication, and motivation',
    duration: '20-30 minutes',
    focus: 'Leadership potential and career goals'
  },
  {
    step: 4,
    title: 'Final Selection',
    description: 'Merit-based selection considering all evaluation parameters',
    timeline: 'Within 1 week',
    notification: 'Email and SMS'
  }
];

export default courses;